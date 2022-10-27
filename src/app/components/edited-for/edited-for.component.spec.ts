import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedForComponent } from './edited-for.component';

describe('EditedForComponent', () => {
  let component: EditedForComponent;
  let fixture: ComponentFixture<EditedForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
