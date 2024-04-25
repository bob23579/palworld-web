import { request } from "@/utils/service"
import { GameConfigResponseData } from "@/api/game/types/game"

/** 获取用户详情 */
export function getGameConfigApi() {
  return request<GameConfigResponseData>({
    url: "game/getGameConfig",
    method: "get"
  })
}
