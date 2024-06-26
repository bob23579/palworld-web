export interface GameConfigRequestData {
  difficulty: string
  day_time_speed_rate: number
  night_time_speed_rate: number
  exp_rate: number
  pal_capture_rate: number
  pal_spawn_num_rate: number
  pal_damage_rate_attack: number
  pal_damage_rate_defense: number
  player_damage_rate_attack: number
  player_damage_rate_defense: number
  player_stomach_decreace_rate: number
  player_stamina_decreace_rate: number
  player_auto_hp_regene_rate: number
  player_auto_hp_regene_rate_in_sleep: number
  pal_stomach_decreace_rate: number
  pal_stamina_decreace_rate: number
  pal_auto_hp_regene_rate: number
  pal_auto_hp_regene_rate_in_sleep: number
  build_object_damage_rate: number
  build_object_deterioration_damage_rate: number
  collection_drop_rate: number
  collection_object_hp_rate: number
  collection_object_respawn_speed_rate: number
  enemy_drop_item_rate: number
  death_penalty: string
  b_enable_player_to_player_damage: boolean
  b_enable_friendly_fire: boolean
  b_enable_invader_enemy: boolean
  b_active_unko: boolean
  b_enable_aim_assist_pad: boolean
  b_enable_aim_assist_keyboard: boolean
  drop_item_max_num: number
  drop_item_max_num_unko: number
  base_camp_max_num: number
  base_camp_worker_max_num: number
  drop_item_alive_max_hours: number
  b_auto_reset_guild_no_online_players: boolean
  auto_reset_guild_time_no_online_players: number
  guild_player_max_num: number
  pal_egg_default_hatching_time: number
  work_speed_rate: number
  b_is_multiplay: boolean
  b_is_pvp: boolean
  b_can_pickup_other_guild_death_penalty_drop: boolean
  b_enable_non_login_penalty: boolean
  b_enable_fast_travel: boolean
  b_is_start_location_select_by_map: boolean
  b_exist_player_after_logout: boolean
  b_enable_defense_other_guild_player: boolean
  coop_player_max_num: number
  server_player_max_num: number
  server_name: string
  server_description: string
  admin_password: string
  server_password: string
  public_port: number
  public_ip: string
  rcon_enabled: boolean
  rcon_port: number
  region: string
  b_use_auth: boolean
  ban_list_url: string
  restapi_enabled: boolean
  restapi_port: number
  b_show_player_list: boolean
  allow_connect_platform: string
  b_is_use_backup_save_data: boolean
  log_format_type: string
}

export type GameConfigResponseData = ApiResponseData<{
  difficulty: string
  day_time_speed_rate: number
  night_time_speed_rate: number
  exp_rate: number
  pal_capture_rate: number
  pal_spawn_num_rate: number
  pal_damage_rate_attack: number
  pal_damage_rate_defense: number
  player_damage_rate_attack: number
  player_damage_rate_defense: number
  player_stomach_decreace_rate: number
  player_stamina_decreace_rate: number
  player_auto_hp_regene_rate: number
  player_auto_hp_regene_rate_in_sleep: number
  pal_stomach_decreace_rate: number
  pal_stamina_decreace_rate: number
  pal_auto_hp_regene_rate: number
  pal_auto_hp_regene_rate_in_sleep: number
  build_object_damage_rate: number
  build_object_deterioration_damage_rate: number
  collection_drop_rate: number
  collection_object_hp_rate: number
  collection_object_respawn_speed_rate: number
  enemy_drop_item_rate: number
  death_penalty: string
  b_enable_player_to_player_damage: boolean
  b_enable_friendly_fire: boolean
  b_enable_invader_enemy: boolean
  b_active_unko: boolean
  b_enable_aim_assist_pad: boolean
  b_enable_aim_assist_keyboard: boolean
  drop_item_max_num: number
  drop_item_max_num_unko: number
  base_camp_max_num: number
  base_camp_worker_max_num: number
  drop_item_alive_max_hours: number
  b_auto_reset_guild_no_online_players: boolean
  auto_reset_guild_time_no_online_players: number
  guild_player_max_num: number
  pal_egg_default_hatching_time: number
  work_speed_rate: number
  b_is_multiplay: boolean
  b_is_pvp: boolean
  b_can_pickup_other_guild_death_penalty_drop: boolean
  b_enable_non_login_penalty: boolean
  b_enable_fast_travel: boolean
  b_is_start_location_select_by_map: boolean
  b_exist_player_after_logout: boolean
  b_enable_defense_other_guild_player: boolean
  coop_player_max_num: number
  server_player_max_num: number
  server_name: string
  server_description: string
  admin_password: string
  server_password: string
  public_port: number
  public_ip: string
  rcon_enabled: boolean
  rcon_port: number
  region: string
  b_use_auth: boolean
  ban_list_url: string
  restapi_enabled: boolean
  restapi_port: number
  b_show_player_list: boolean
  allow_connect_platform: string
  b_is_use_backup_save_data: boolean
  log_format_type: string
}>
