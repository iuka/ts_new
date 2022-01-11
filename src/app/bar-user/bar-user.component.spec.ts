import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarUserComponent } from './bar-user.component';

describe('BarUserComponent', () => {
  let component: BarUserComponent;
  let fixture: ComponentFixture<BarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
