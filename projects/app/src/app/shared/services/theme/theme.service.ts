import { Injectable } from '@angular/core';
import { changeTheme } from '@app/store/theme/theme.action';
import { selectTheme } from '@app/store/theme';
import { Store } from '@ngrx/store';
import { Themes } from '@ui-lib';
import { AppState } from '@app/store/state';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme$ = this.store.select(selectTheme);

  constructor(
    private readonly store: Store<AppState>,
  ) {}

  changeAppTheme(theme: Themes): void {
    this.store.dispatch(changeTheme({theme}));
  }
}
