import { request } from "@/utils/service"
import { GameConfigRequestData, GameConfigResponseData } from "@/api/game/types/game"

export function getGameConfigApi() {
  return request<GameConfigResponseData>({
    url: "game/getGameConfig",
    method: "get"
  })
}
export function setGameConfigApi(data: GameConfigRequestData) {
  return request<{}>({
    url: "game/setGameConfig",
    method: "post",
    data
  })
}
