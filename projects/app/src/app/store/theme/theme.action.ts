import { Themes } from "@ui-lib";
import { createAction, props } from "@ngrx/store";

export const getTheme = createAction('[Auth Page] GET CURRENT THEME');
export const changeTheme = createAction('[Auth Page] CHANGE THEME', props<{theme: Themes}>());
