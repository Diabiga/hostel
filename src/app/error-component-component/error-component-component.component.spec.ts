import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponentComponentComponent } from './error-component-component.component';

describe('ErrorComponentComponentComponent', () => {
  let component: ErrorComponentComponentComponent;
  let fixture: ComponentFixture<ErrorComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
