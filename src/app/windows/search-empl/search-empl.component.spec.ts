import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmplComponent } from './search-empl.component';

describe('SearchEmplComponent', () => {
  let component: SearchEmplComponent;
  let fixture: ComponentFixture<SearchEmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
