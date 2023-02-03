import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSymptomComponent } from './list-symptom.component';

describe('ListSymptomComponent', () => {
  let component: ListSymptomComponent;
  let fixture: ComponentFixture<ListSymptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSymptomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSymptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
