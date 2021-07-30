import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamstackComponent } from './jamstack.component';

describe('JamstackComponent', () => {
  let component: JamstackComponent;
  let fixture: ComponentFixture<JamstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamstackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
