import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGuardComponent } from './your-guard.component';

describe('YourGuardComponent', () => {
  let component: YourGuardComponent;
  let fixture: ComponentFixture<YourGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
