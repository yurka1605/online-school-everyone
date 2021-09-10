import { ThemeService } from './shared/services/theme/theme.service';
import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Themes } from '@ui-lib';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription = this.themeService.theme$.subscribe(
    (theme) => this.changeThemeLink(theme)
  );

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService,
  ) {}

  changeThemeLink(theme: Themes): void {
    const link = this.renderer.selectRootElement('link#theme');
    this.renderer.setAttribute(
      link,
      'href',
      `assets/themes/${theme}.css`
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
