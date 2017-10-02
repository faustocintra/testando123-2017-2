import { TestBed, inject } from '@angular/core/testing';

import { QuestoesService } from './questoes.service';

describe('QuestoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestoesService]
    });
  });

  it('should be created', inject([QuestoesService], (service: QuestoesService) => {
    expect(service).toBeTruthy();
  }));
});
