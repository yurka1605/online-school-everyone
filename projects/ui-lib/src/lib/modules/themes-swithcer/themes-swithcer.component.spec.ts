import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesSwithcerComponent } from './themes-swithcer.component';

describe('ThemesSwithcerComponent', () => {
  let component: ThemesSwithcerComponent;
  let fixture: ComponentFixture<ThemesSwithcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesSwithcerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesSwithcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
