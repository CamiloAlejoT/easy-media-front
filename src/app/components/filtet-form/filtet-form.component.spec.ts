import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltetFormComponent } from './filtet-form.component';

describe('FiltetFormComponent', () => {
  let component: FiltetFormComponent;
  let fixture: ComponentFixture<FiltetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltetFormComponent]
    });
    fixture = TestBed.createComponent(FiltetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
