import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugAndDropComponent } from './drug-and-drop.component';

describe('DrugAndDropComponent', () => {
  let component: DrugAndDropComponent;
  let fixture: ComponentFixture<DrugAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
