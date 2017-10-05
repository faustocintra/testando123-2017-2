import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesFormComponent } from './questoes-form.component';

describe('QuestoesFormComponent', () => {
  let component: QuestoesFormComponent;
  let fixture: ComponentFixture<QuestoesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
