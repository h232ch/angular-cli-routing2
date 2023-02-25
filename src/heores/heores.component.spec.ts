import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoresComponent } from './heores.component';

describe('HeoresComponent', () => {
  let component: HeoresComponent;
  let fixture: ComponentFixture<HeoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
