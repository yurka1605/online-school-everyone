import { createSelector, MemoizedSelector } from "@ngrx/store";
import { Themes } from "@ui-lib";
import { AppState } from "..";
import { State } from "./theme.reducer";

// Selectors
const selectThemeData = (state: AppState) => state.themeData;

export const selectTheme: MemoizedSelector<AppState, Themes> = createSelector(
  selectThemeData,
  (data: State) => data.theme
);
