import { Component, OnInit } from '@angular/core';
import { AppState, fromToken } from '@app/store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ThemeService } from '@app/shared/services/theme/theme.service';
import { Themes } from '@ui-lib';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth$ = this.store.select(fromToken.selectAuthetification);

  constructor(
    private readonly store: Store<AppState>,
    private router: Router,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.isAuth$.subscribe(isAuth => isAuth ? this.router.navigate(['']) : null);
  }

  auth() {
    this.themeService.changeAppTheme(Themes.Dark);
    this.store.dispatch(fromToken.getToken());
  }

}

