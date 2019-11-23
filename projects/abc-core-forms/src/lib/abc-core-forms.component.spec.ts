import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCoreFormsComponent } from './abc-core-forms.component';

describe('AbcCoreFormsComponent', () => {
  let component: AbcCoreFormsComponent;
  let fixture: ComponentFixture<AbcCoreFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcCoreFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcCoreFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
