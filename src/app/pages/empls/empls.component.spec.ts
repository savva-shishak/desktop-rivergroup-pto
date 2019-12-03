import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplsComponent } from './empls.component';

describe('EmplsComponent', () => {
  let component: EmplsComponent;
  let fixture: ComponentFixture<EmplsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
