/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Pedidos_jsonService } from './pedidos_json.service';

describe('Service: Pedidos_json', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pedidos_jsonService]
    });
  });

  it('should ...', inject([Pedidos_jsonService], (service: Pedidos_jsonService) => {
    expect(service).toBeTruthy();
  }));
});
