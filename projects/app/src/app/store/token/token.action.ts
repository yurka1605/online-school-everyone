import { createAction, props } from "@ngrx/store";

export const getToken = createAction('[Auth Page] GET TOKEN');
export const getTokenSuccessfull = createAction('[Auth Page] GET TOKEN SUCCESSFULL', props<{token: string}>());
export const getTokenFailed = createAction('[Auth Page] GET TOKEN FAILED', props<{error: string}>());
export const deleteToken = createAction('[Auth Page] DELETE TOKEN');
export const deleteTokenSuccessfull = createAction('[Auth Page] DELETE TOKEN SUCCESSFULL');
export const deleteTokenFailed = createAction('[Auth Page] DELETE TOKEN FAILED', props<{error: string}>());
