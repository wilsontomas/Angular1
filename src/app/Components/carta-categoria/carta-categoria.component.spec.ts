import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCategoriaComponent } from './carta-categoria.component';

describe('CartaCategoriaComponent', () => {
  let component: CartaCategoriaComponent;
  let fixture: ComponentFixture<CartaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
