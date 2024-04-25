<script setup lang="ts">
import { reactive } from "vue"
import { ElMessage } from "element-plus"
import { getGameConfigApi } from "@/api/game"

const form = reactive({
  difficulty: "None",
  day_time_speed_rate: 1.123456,
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
  b_is_pv_p: false,
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
  ElMessage({
    message: "点击了保存并应用按钮",
    type: "success"
  })
}
const onSave = () => {
  ElMessage({
    message: "点击了保存按钮",
    type: "success"
  })
}

const onReset = () => {
  // 重置时，重新向后台请求配置，覆盖当前网页配置
  ElMessage({
    message: "点击了重置按钮",
    type: "success"
  })
}

const getGameConfig = () => {
  // 获取后台配置
  getGameConfigApi()
    .then((res) => {
      console.log(res)
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
    <!--    配置文件 对照-->
    <!--    从后台获取当前配置，修改后返回后台 -->
    <!--    Difficulty: "None", DayTimeSpeedRate: 1.000000, NightTimeSpeedRate: 1.000000, ExpRate: 1.000000, PalCaptureRate: 1.000000,
	PalSpawnNumRate: 1.000000, PalDamageRateAttack: 1.000000, PalDamageRateDefense: 1.000000, PlayerDamageRateAttack: 1.000000,
	PlayerDamageRateDefense: 1.000000, PlayerStomachDecreaceRate: 1.000000, PlayerStaminaDecreaceRate: 1.000000,
	PlayerAutoHPRegeneRate: 1.000000, PlayerAutoHpRegeneRateInSleep: 1.000000, PalStomachDecreaceRate: 1.000000,
	PalStaminaDecreaceRate: 1.000000, PalAutoHPRegeneRate: 1.000000, PalAutoHpRegeneRateInSleep: 1.000000,
	BuildObjectDamageRate: 1.000000, BuildObjectDeteriorationDamageRate: 1.000000, CollectionDropRate: 1.000000,
	CollectionObjectHpRate: 1.000000, CollectionObjectRespawnSpeedRate: 1.000000, EnemyDropItemRate: 1.000000,
	DeathPenalty: "All", BEnablePlayerToPlayerDamage: false, BEnableFriendlyFire: false, BEnableInvaderEnemy: true,
	BActiveUNKO: false, BEnableAimAssistPad: true, BEnableAimAssistKeyboard: false, DropItemMaxNum: 3000,
	DropItemMaxNum_UNKO: 100, BaseCampMaxNum: 128, BaseCampWorkerMaxNum: 15, DropItemAliveMaxHours: 1.000000,
	BAutoResetGuildNoOnlinePlayers: false, AutoResetGuildTimeNoOnlinePlayers: 72.000000, GuildPlayerMaxNum: 20,
	PalEggDefaultHatchingTime: 72.000000, WorkSpeedRate: 1.000000, BIsMultiplay: false, BIsPvP: false,
	BCanPickupOtherGuildDeathPenaltyDrop: false, BEnableNonLoginPenalty: true, BEnableFastTravel: true,
	BIsStartLocationSelectByMap: true, BExistPlayerAfterLogout: false, BEnableDefenseOtherGuildPlayer: false,
	CoopPlayerMaxNum: 4, ServerPlayerMaxNum: 32, ServerName: "Default Palworld Server", ServerDescription: "",
	AdminPassword: "", ServerPassword: "", PublicPort: 8211, PublicIP: "", RCONEnabled: false, RCONPort: 25575, Region: "",
	BUseAuth: true, BanListURL: "https://api.palworldgame.com/api/banlist.txt", RESTAPIEnabled: false, RESTAPIPort: 8212,
	BShowPlayerList: false, AllowConnectPlatform: "Steam", BIsUseBackupSaveData: true, LogFormatType: "Text",-->
    <el-form label-position="right" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="服务器名称">
        <el-input v-model="form.server_name" />
      </el-form-item>
      <el-form-item label="经验倍率">
        <el-slider v-model="form.exp_rate" :step="0.05" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家间伤害">
        <el-switch v-model="form.player_damage_rate_attack" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button type="primary" @click="onSubmit">保存并应用</el-button>
        <el-button @click="onReset">重置</el-button>
        <el-button @click="getGameConfig">获取配置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
