import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdiCarruselComponent } from './ldi-carrusel.component';

describe('LdiCarruselComponent', () => {
  let component: LdiCarruselComponent;
  let fixture: ComponentFixture<LdiCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdiCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdiCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
