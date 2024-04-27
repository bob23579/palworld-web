<script setup lang="ts">
import { reactive } from "vue"
import { ElMessage } from "element-plus"
import { getGameConfigApi, setGameConfigApi } from "@/api/game"

const form = reactive({
  difficulty: "None",
  day_time_speed_rate: 1.0,
  night_time_speed_rate: 1,
  exp_rate: 1,
  pal_capture_rate: 1,
  pal_spawn_num_rate: 1,
  pal_damage_rate_attack: 1,
  pal_damage_rate_defense: 1,
  player_damage_rate_attack: 1,
  player_damage_rate_defense: 1,
  player_stomach_decreace_rate: 1,
  player_stamina_decreace_rate: 1,
  player_auto_hp_regene_rate: 1,
  player_auto_hp_regene_rate_in_sleep: 1,
  pal_stomach_decreace_rate: 1,
  pal_stamina_decreace_rate: 1,
  pal_auto_hp_regene_rate: 1,
  pal_auto_hp_regene_rate_in_sleep: 1,
  build_object_damage_rate: 1,
  build_object_deterioration_damage_rate: 1,
  collection_drop_rate: 1,
  collection_object_hp_rate: 1,
  collection_object_respawn_speed_rate: 1,
  enemy_drop_item_rate: 1,
  death_penalty: "All",
  b_enable_player_to_player_damage: false,
  b_enable_friendly_fire: false,
  b_enable_invader_enemy: true,
  b_active_unko: false,
  b_enable_aim_assist_pad: true,
  b_enable_aim_assist_keyboard: false,
  drop_item_max_num: 3000,
  drop_item_max_num_unko: 100,
  base_camp_max_num: 128,
  base_camp_worker_max_num: 15,
  drop_item_alive_max_hours: 1,
  b_auto_reset_guild_no_online_players: false,
  auto_reset_guild_time_no_online_players: 72,
  guild_player_max_num: 20,
  pal_egg_default_hatching_time: 72,
  work_speed_rate: 1,
  b_is_multiplay: false,
  b_is_pvp: false,
  b_can_pickup_other_guild_death_penalty_drop: false,
  b_enable_non_login_penalty: true,
  b_enable_fast_travel: true,
  b_is_start_location_select_by_map: true,
  b_exist_player_after_logout: false,
  b_enable_defense_other_guild_player: false,
  coop_player_max_num: 4,
  server_player_max_num: 32,
  server_name: "Default Palworld Server",
  server_description: "",
  admin_password: "",
  server_password: "",
  public_port: 8211,
  public_ip: "",
  rcon_enabled: false,
  rcon_port: 25575,
  region: "",
  b_use_auth: true,
  ban_list_url: "https://api.palworldgame.com/api/banlist.txt",
  restapi_enabled: false,
  restapi_port: 8212,
  b_show_player_list: false,
  allow_connect_platform: "Steam",
  b_is_use_backup_save_data: true,
  log_format_type: "Text"
})

const onSubmit = () => {
  setGameConfigApi(form)
    .then(() => {
      ElMessage("hello")
    })
    .catch((err) => {
      console.log(err)
    })
}

// const onReset = () => {
//   // 重置时，重新向后台请求配置，覆盖当前网页配置
//   ElMessage({
//     message: "点击了重置按钮",
//     type: "success"
//   })
// }

const getGameConfig = () => {
  // 获取后台配置
  getGameConfigApi()
    .then((res) => {
      console.log(res)
      form.difficulty = res.data.difficulty
      form.day_time_speed_rate = res.data.day_time_speed_rate
      form.night_time_speed_rate = res.data.night_time_speed_rate
      form.exp_rate = res.data.exp_rate
      form.pal_capture_rate = res.data.pal_capture_rate
      form.pal_spawn_num_rate = res.data.pal_spawn_num_rate
      form.pal_damage_rate_attack = res.data.pal_damage_rate_attack
      form.pal_damage_rate_defense = res.data.pal_damage_rate_defense
      form.player_damage_rate_attack = res.data.player_damage_rate_attack
      form.player_damage_rate_defense = res.data.player_damage_rate_defense
      form.player_stomach_decreace_rate = res.data.player_stomach_decreace_rate
      form.player_stamina_decreace_rate = res.data.player_stamina_decreace_rate
      form.player_auto_hp_regene_rate = res.data.player_auto_hp_regene_rate
      form.player_auto_hp_regene_rate_in_sleep = res.data.player_auto_hp_regene_rate_in_sleep
      form.pal_stomach_decreace_rate = res.data.pal_stomach_decreace_rate
      form.pal_stamina_decreace_rate = res.data.pal_stamina_decreace_rate
      form.pal_auto_hp_regene_rate = res.data.pal_auto_hp_regene_rate
      form.pal_auto_hp_regene_rate_in_sleep = res.data.pal_auto_hp_regene_rate_in_sleep
      form.build_object_damage_rate = res.data.build_object_damage_rate
      form.build_object_deterioration_damage_rate = res.data.build_object_deterioration_damage_rate
      form.collection_drop_rate = res.data.collection_drop_rate
      form.collection_object_hp_rate = res.data.collection_object_hp_rate
      form.collection_object_respawn_speed_rate = res.data.collection_object_respawn_speed_rate
      form.enemy_drop_item_rate = res.data.enemy_drop_item_rate
      form.death_penalty = res.data.death_penalty
      form.b_enable_player_to_player_damage = res.data.b_enable_player_to_player_damage
      form.b_enable_friendly_fire = res.data.b_enable_friendly_fire
      form.b_enable_invader_enemy = res.data.b_enable_invader_enemy
      form.b_active_unko = res.data.b_active_unko
      form.b_enable_aim_assist_pad = res.data.b_enable_aim_assist_pad
      form.b_enable_aim_assist_keyboard = res.data.b_enable_aim_assist_keyboard
      form.drop_item_max_num = res.data.drop_item_max_num
      form.drop_item_max_num_unko = res.data.drop_item_max_num_unko
      form.base_camp_max_num = res.data.base_camp_max_num
      form.base_camp_worker_max_num = res.data.base_camp_worker_max_num
      form.drop_item_alive_max_hours = res.data.drop_item_alive_max_hours
      form.b_auto_reset_guild_no_online_players = res.data.b_auto_reset_guild_no_online_players
      form.auto_reset_guild_time_no_online_players = res.data.auto_reset_guild_time_no_online_players
      form.guild_player_max_num = res.data.guild_player_max_num
      form.pal_egg_default_hatching_time = res.data.pal_egg_default_hatching_time
      form.work_speed_rate = res.data.work_speed_rate
      form.b_is_multiplay = res.data.b_is_multiplay
      form.b_is_pvp = res.data.b_is_pvp
      form.b_can_pickup_other_guild_death_penalty_drop = res.data.b_can_pickup_other_guild_death_penalty_drop
      form.b_enable_non_login_penalty = res.data.b_enable_non_login_penalty
      form.b_enable_fast_travel = res.data.b_enable_fast_travel
      form.b_is_start_location_select_by_map = res.data.b_is_start_location_select_by_map
      form.b_exist_player_after_logout = res.data.b_exist_player_after_logout
      form.b_enable_defense_other_guild_player = res.data.b_enable_defense_other_guild_player
      form.coop_player_max_num = res.data.coop_player_max_num
      form.server_player_max_num = res.data.server_player_max_num
      form.server_name = res.data.server_name
      form.server_description = res.data.server_description
      form.admin_password = res.data.admin_password
      form.server_password = res.data.server_password
      form.public_port = res.data.public_port
      form.public_ip = res.data.public_ip
      form.rcon_enabled = res.data.rcon_enabled
      form.rcon_port = res.data.rcon_port
      form.region = res.data.region
      form.b_use_auth = res.data.b_use_auth
      form.ban_list_url = res.data.ban_list_url
      form.restapi_enabled = res.data.restapi_enabled
      form.restapi_port = res.data.restapi_port
      form.b_show_player_list = res.data.b_show_player_list
      form.allow_connect_platform = res.data.allow_connect_platform
      form.b_is_use_backup_save_data = res.data.b_is_use_backup_save_data
      form.log_format_type = res.data.log_format_type
    })
    .catch((err) => {
      console.log(err)
    })
}

// 加载页面时 自动获取一次配置
// getGameConfig()
</script>

<template>
  <div>
    <el-form label-position="right" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="服务器名称">
        <el-input v-model="form.server_name" />
      </el-form-item>
      <el-form-item label="服务器描述">
        <el-input v-model="form.server_description" />
      </el-form-item>
      <el-form-item label="管理员密码">
        <el-input v-model="form.admin_password" />
      </el-form-item>
      <el-form-item label="服务器密码">
        <el-input v-model="form.server_password" />
      </el-form-item>
      <el-form-item label="公共端口">
        <el-input v-model="form.public_port" />
      </el-form-item>
      <el-form-item label="公共IP">
        <el-input v-model="form.public_ip" />
      </el-form-item>
      <el-form-item label="服务器难度">
        <el-input v-model="form.difficulty" />
      </el-form-item>
      <el-form-item label="RCON">
        <el-switch v-model="form.rcon_enabled" />
      </el-form-item>
      <el-form-item label="RCON端口">
        <el-input v-model="form.rcon_port" />
      </el-form-item>
      <el-form-item label="地区">
        <el-input v-model="form.region" />
      </el-form-item>
      <el-form-item label="身份验证">
        <el-switch v-model="form.b_use_auth" />
      </el-form-item>
      <el-form-item label="黑名单">
        <el-input v-model="form.ban_list_url" />
      </el-form-item>
      <el-form-item label="RESTAPI">
        <el-switch v-model="form.restapi_enabled" />
      </el-form-item>
      <el-form-item label="RESTAPI端口">
        <el-input v-model="form.restapi_port" />
      </el-form-item>
      <el-form-item label="显示玩家列表">
        <el-switch v-model="form.b_show_player_list" />
      </el-form-item>
      <el-form-item label="允许连接平台">
        <el-input v-model="form.allow_connect_platform" />
      </el-form-item>
      <el-form-item label="备份数据">
        <el-switch v-model="form.b_is_use_backup_save_data" />
      </el-form-item>
      <el-form-item label="日志格式类型">
        <el-input v-model="form.log_format_type" />
      </el-form-item>

      <el-form-item label="合作玩家最大数量">
        <el-slider v-model="form.coop_player_max_num" :max="16" show-input />
      </el-form-item>
      <el-form-item label="服务器玩家最大数量">
        <el-slider v-model="form.server_player_max_num" :max="128" show-input />
      </el-form-item>
      <el-form-item label="白天流逝速度">
        <el-slider v-model="form.day_time_speed_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="夜晚流逝速度">
        <el-slider v-model="form.night_time_speed_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="经验倍率">
        <el-slider v-model="form.exp_rate" :step="0.1" :max="10" show-input />
      </el-form-item>
      <el-form-item label="帕鲁捕获率">
        <el-slider v-model="form.pal_capture_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="帕鲁出现数量倍率">
        <el-slider v-model="form.pal_spawn_num_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="帕鲁攻击伤害倍率">
        <el-slider v-model="form.pal_damage_rate_attack" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="帕鲁承受伤害倍率">
        <el-slider v-model="form.pal_damage_rate_defense" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家攻击伤害倍率">
        <el-slider v-model="form.player_damage_rate_attack" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家承受伤害倍率">
        <el-slider v-model="form.player_damage_rate_defense" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家饱食度降低倍率">
        <el-slider v-model="form.player_stomach_decreace_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家耐力降低倍率">
        <el-slider v-model="form.player_stamina_decreace_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家生命值自然回复倍率">
        <el-slider v-model="form.player_auto_hp_regene_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家睡眠时生命值自然回复倍率">
        <el-slider v-model="form.player_auto_hp_regene_rate_in_sleep" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="帕鲁饱食度降低倍率">
        <el-slider v-model="form.pal_stomach_decreace_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="帕鲁耐力降低倍率">
        <el-slider v-model="form.pal_stamina_decreace_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="帕鲁生命值自然回复倍率">
        <el-slider v-model="form.pal_auto_hp_regene_rate" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="帕鲁睡眠时生命值自然回复倍率">
        <el-slider v-model="form.pal_auto_hp_regene_rate_in_sleep" :step="0.1" :max="5" show-input />
      </el-form-item>
      <el-form-item label="对建筑物伤害倍率">
        <el-slider v-model="form.build_object_damage_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="建筑物劣化速度倍率">
        <el-slider v-model="form.build_object_deterioration_damage_rate" :step="0.05" :max="10" show-input />
      </el-form-item>
      <el-form-item label="道具采集量倍率">
        <el-slider v-model="form.collection_drop_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="可采集物品生命值倍率">
        <el-slider v-model="form.collection_object_hp_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="可采集物品刷新间隔">
        <el-slider v-model="form.collection_object_respawn_speed_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="道具掉落倍率">
        <el-slider v-model="form.enemy_drop_item_rate" :step="0.5" :max="10" show-input />
      </el-form-item>
      <el-form-item label="世界内掉落物上限">
        <el-slider v-model="form.drop_item_max_num" :max="5000" show-input />
      </el-form-item>
      <el-form-item label="基地最大数量">
        <el-slider v-model="form.base_camp_max_num" :max="5000" show-input />
      </el-form-item>
      <el-form-item label="可分派至据点工作的帕鲁上限">
        <el-slider v-model="form.base_camp_worker_max_num" :max="20" show-input />
      </el-form-item>
      <el-form-item label="掉落物品存在时间上限(小时)">
        <el-slider v-model="form.drop_item_alive_max_hours" :max="20" show-input />
      </el-form-item>
      <el-form-item label="工会人数上限">
        <el-slider v-model="form.guild_player_max_num" :max="40" show-input />
      </el-form-item>
      <el-form-item label="帕鲁蛋孵化时间(小时)">
        <el-slider v-model="form.guild_player_max_num" :step="0.05" :max="240" show-input />
      </el-form-item>
      <el-form-item label="工作速度">
        <el-slider v-model="form.work_speed_rate" :step="0.05" :max="200" show-input />
      </el-form-item>

      <el-form-item label="死亡惩罚">
        <el-input v-model="form.death_penalty" />
      </el-form-item>
      <el-form-item label="世界内掉落物上限(UNKO)">
        <el-slider v-model="form.drop_item_max_num_unko" :max="5000" show-input />
      </el-form-item>
      <el-form-item label="自动重置工会没有在线的玩家时间">
        <el-slider v-model="form.auto_reset_guild_time_no_online_players" :max="100" show-input />
      </el-form-item>
      <el-form-item label="玩家间伤害">
        <el-switch v-model="form.b_enable_player_to_player_damage" />
      </el-form-item>
      <el-form-item label="友军活力">
        <el-switch v-model="form.b_enable_friendly_fire" />
      </el-form-item>
      <el-form-item label="是否发生袭击事件">
        <el-switch v-model="form.b_enable_invader_enemy" />
      </el-form-item>
      <el-form-item label="主动UNKO">
        <el-switch v-model="form.b_active_unko" />
      </el-form-item>
      <el-form-item label="辅助瞄准">
        <el-switch v-model="form.b_enable_aim_assist_pad" />
      </el-form-item>
      <el-form-item label="键盘辅助瞄准">
        <el-switch v-model="form.b_enable_aim_assist_keyboard" />
      </el-form-item>
      <el-form-item label="自动重置工会没有在线玩家">
        <el-switch v-model="form.b_auto_reset_guild_no_online_players" />
      </el-form-item>
      <el-form-item label="多重播放">
        <el-switch v-model="form.b_is_multiplay" />
      </el-form-item>
      <el-form-item label="PVP">
        <el-switch v-model="form.b_is_pvp" />
      </el-form-item>
      <el-form-item label="捡其他公会死亡掉落的物品">
        <el-switch v-model="form.b_can_pickup_other_guild_death_penalty_drop" />
      </el-form-item>
      <el-form-item label="非登录惩罚">
        <el-switch v-model="form.b_enable_non_login_penalty" />
      </el-form-item>
      <el-form-item label="实现快速旅行">
        <el-switch v-model="form.b_enable_fast_travel" />
      </el-form-item>
      <el-form-item label="开始时从地图选择位置">
        <el-switch v-model="form.b_is_start_location_select_by_map" />
      </el-form-item>
      <el-form-item label="玩家退出后依旧存在">
        <el-switch v-model="form.b_exist_player_after_logout" />
      </el-form-item>
      <el-form-item label="防御其他公会玩家">
        <el-switch v-model="form.b_enable_defense_other_guild_player" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存并应用</el-button>
        <!--        <el-button @click="onReset">重置</el-button>-->
        <el-button @click="getGameConfig">获取配置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
