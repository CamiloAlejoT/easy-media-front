import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedResultsComponent } from './fixed-results.component';

describe('FixedResultsComponent', () => {
  let component: FixedResultsComponent;
  let fixture: ComponentFixture<FixedResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedResultsComponent]
    });
    fixture = TestBed.createComponent(FixedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
