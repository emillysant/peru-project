import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeografiaComponent } from './geografia.component';

describe('GeografiaComponent', () => {
  let component: GeografiaComponent;
  let fixture: ComponentFixture<GeografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeografiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
