import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const initialState = {
    isAuth: false,
    token: null,
    error: null,
  };
  let guard: AuthGuard;
  let router: jasmine.SpyObj<Router>;
  let store: MockStore;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: spy },
        provideMockStore({ initialState }),
      ]
    });
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    guard = TestBed.inject(AuthGuard);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be return false', done => {
    guard.canActivate().subscribe(isAuth => {
      console.log(isAuth);
      expect(isAuth).toBe(false);
      done();
    });
  });
});
