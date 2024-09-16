import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCulturaComponent } from './edit-cultura.component';

describe('EditCulturaComponent', () => {
  let component: EditCulturaComponent;
  let fixture: ComponentFixture<EditCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCulturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
