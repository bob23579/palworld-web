<script setup lang="ts">
import { reactive } from "vue"
import { ElMessage } from "element-plus"

const form = reactive({
  name: "",
  date1: 1,
  date2: false
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
  ElMessage({
    message: "点击了重启按钮",
    type: "success"
  })
}
</script>

<template>
  <div>
    <el-form label-position="right" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="服务器名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="经验倍率">
        <el-slider v-model="form.date1" :step="0.05" :max="5" show-input />
      </el-form-item>
      <el-form-item label="玩家间伤害">
        <el-switch v-model="form.date2" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button type="primary" @click="onSubmit">保存并应用</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss"></style>
