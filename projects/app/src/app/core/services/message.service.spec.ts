import { TestBed } from '@angular/core/testing';
import { MessageTypes } from '@app/app.constant';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service && service.type === MessageTypes.Warning && !service.message).toBeTruthy();
  });


  describe('#add', () => {
    it('should be true', () => {
      service.add('add');
      expect(service.type === MessageTypes.Success).toBeTruthy();
    });
  });

  describe('#warning', () => {
    it('should be true', () => {
      service.warning('warning');
      expect(service.type === MessageTypes.Warning).toBeTruthy();
    });
  });

  describe('#error', () => {
    it('should be true', () => {
      service.error('error');
      expect(service.type === MessageTypes.Error).toBeTruthy();
    });
  });

  describe('#showMessage', () => {
    it('should be show empty message', () => {
      service.showMessage();
      expect(service.type).toEqual(MessageTypes.Warning);
    });

    it('should be show message "Handler missed"', () => {
      service.type = 'newType' as MessageTypes;
      service.showMessage();
      expect(service.message).toEqual('Handler missed');
    });
  });
});
