export interface LoginRequestData {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
}

export interface PasswordRequestData {
  oldPassword: string
  newPassword: string
}
export type LoginResponseData = ApiResponseData<{ token: string; message: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
export type ModifyPasswordResponseData = ApiResponseData<{}>
