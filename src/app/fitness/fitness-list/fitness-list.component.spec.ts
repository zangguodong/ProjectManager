import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessListComponent } from './fitness-list.component';

describe('FitnessListComponent', () => {
  let component: FitnessListComponent;
  let fixture: ComponentFixture<FitnessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
