import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysObjetosComponent } from './arrays-objetos.component';

describe('ArraysObjetosComponent', () => {
  let component: ArraysObjetosComponent;
  let fixture: ComponentFixture<ArraysObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraysObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
