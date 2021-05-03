import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacaoObjetoComponent } from './orientacao-objeto.component';

describe('OrientacaoObjetoComponent', () => {
  let component: OrientacaoObjetoComponent;
  let fixture: ComponentFixture<OrientacaoObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientacaoObjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacaoObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
