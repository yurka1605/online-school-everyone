import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUsers', () => {
    it('should be success', () => {
      service.getUsers().subscribe(arr => {
        expect(arr.length).toEqual(0);
      });
    });

    it('should be error', () => {
      service.getUsers().subscribe({error: err => expect(err).toBeTrue()});
    });
  });
});
