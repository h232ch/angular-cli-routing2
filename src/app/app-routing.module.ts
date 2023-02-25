import {Injectable, NgModule} from '@angular/core';
import {ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy} from '@angular/router';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {ChildAComponent} from "../child-a/child-a.component";
import {ChildBComponent} from "../child-b/child-b.component";
import {Title} from "@angular/platform-browser";
import {HeoresComponent} from "../heores/heores.component";


@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

const routes: Routes = [
  { path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        title: resolvedChildATitle,
        component: ChildAComponent
      },{
        path: 'child-b',
        title: 'child!!!B',
        component: ChildBComponent
      }
    ]},
  { path: 'heroes', component: HeoresComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})



export class AppRoutingModule {
}
