import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePoolComponent } from './single-pool.component';

describe('SinglePoolComponent', () => {
  let component: SinglePoolComponent;
  let fixture: ComponentFixture<SinglePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
