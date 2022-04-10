import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonEditComponent } from './maison-edit.component';

describe('MaisonEditComponent', () => {
  let component: MaisonEditComponent;
  let fixture: ComponentFixture<MaisonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
