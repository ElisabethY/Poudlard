import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTemplateComponent } from './from-template.component';

describe('FromTemplateComponent', () => {
  let component: FromTemplateComponent;
  let fixture: ComponentFixture<FromTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
