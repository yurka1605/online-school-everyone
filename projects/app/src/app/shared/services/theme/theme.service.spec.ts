import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Themes } from '@ui-lib';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let store: MockStore;
  const initialState = { theme: Themes.Default };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
    });
    service = TestBed.inject(ThemeService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service && service.theme$).toBeTruthy();
  });

  it('should be changed theme to Dark', () => {

    const newTheme = Themes.Dark;
    service.theme$.subscribe(theme => {
      expect(theme).toBe(newTheme);
    });
    service.changeAppTheme(newTheme);
  });
});
