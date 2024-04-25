// 导出的函数
// 检测游戏状态
import { request } from "@/utils/service"
import { GetGameStatusResponseData } from "@/api/dashboard/types/dashboard"
import { CommonResponseData } from "@/api/common/types/common"

export function getGameStatusApi() {
  return request<GetGameStatusResponseData>({
    url: "game/getGameStatus",
    method: "get"
  })
}

export function startGameApi() {
  return request<CommonResponseData>({
    url: "game/startGame",
    method: "get"
  })
}

export function stopGameApi() {
  return request<CommonResponseData>({
    url: "game/stopGame",
    method: "get"
  })
}

export function restartGameApi() {
  return request<CommonResponseData>({
    url: "game/restartGame",
    method: "get"
  })
}

export function updateGameApi() {
  return request<CommonResponseData>({
    url: "game/updateGame",
    method: "get"
  })
}
