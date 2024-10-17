export interface IUserApiAction {
  readonly type: "UserRequest";
}

export interface IUserApiActionSuccess {
  readonly type: "UserSuccess";
  payload: [];
}

export interface IUserApiActionError {
  readonly type: "UserError";
  payload: {};
}

export type UserApiAction =
  | IUserApiAction
  | IUserApiActionSuccess
  | IUserApiActionError;
