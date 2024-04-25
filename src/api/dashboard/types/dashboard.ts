export enum GameStatusEnum {
  start = 0,
  stop = 1,
  update = 2,
  restarting = 3,
  not_found = 4
}

export type GetGameStatusResponseData = ApiResponseData<{ status: number }>
