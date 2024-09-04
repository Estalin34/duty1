import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasionesComponent } from './pasiones.component';

describe('PasionesComponent', () => {
  let component: PasionesComponent;
  let fixture: ComponentFixture<PasionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
