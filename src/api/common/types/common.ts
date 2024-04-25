// 统一回复的如是否成功的请求

/** code 为0  没有错误，否则为错误 */
/** message 错误内容 */
export type CommonResponseData = ApiResponseData<{ code: number; message: string }>
