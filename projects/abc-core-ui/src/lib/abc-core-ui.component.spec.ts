import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcCoreUiComponent } from './abc-core-ui.component';

describe('AbcCoreUiComponent', () => {
  let component: AbcCoreUiComponent;
  let fixture: ComponentFixture<AbcCoreUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcCoreUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcCoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
