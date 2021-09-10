import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Subscription } from 'rxjs';
import { AppComponent } from './app.component';
import { ThemeService } from '@app/shared/services/theme/theme.service';
import { Themes } from '@ui-lib';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let renderer: MockRenderer;
  let themeService: ThemeService;
  const themeServiceStub = {
    theme$: new Observable(),
  };
  class MockRenderer {
    selectRootElement(selectorOrNode: string): boolean {
      return true;
    }

    setAttribute(el: any, name: string, value: string): boolean {
      return true;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Renderer2, useClass: MockRenderer },
        { provide: ThemeService, useValue: themeServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    renderer = fixture.debugElement.injector.get(Renderer2) as unknown as MockRenderer;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should be called Renderer method for change link href', () => {
    const theme = Themes.Dark;
    spyOn(renderer, 'selectRootElement');
    spyOn(renderer, 'setAttribute');
    app.changeThemeLink(theme);

    expect(renderer.selectRootElement).toHaveBeenCalledWith('link#theme');
    expect(renderer.setAttribute).toHaveBeenCalledWith(
      undefined,
      'href',
      `assets/themes/${Themes.Dark}.css`
    );
  });

  it('should destroy component and unsubscribe subscription', () => {
    const spy = spyOn(Subscription.prototype, 'unsubscribe');
    app.ngOnDestroy();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(app).toBeUndefined();
  });
});
