<script lang="ts" setup>
import { ElMessage } from "element-plus"
import { getGameStatusApi, restartGameApi, startGameApi, stopGameApi, updateGameApi } from "@/api/dashboard"
import { ref } from "vue"
import { GameStatusEnum } from "@/api/dashboard/types/dashboard"

const checkButtonOnClick = () => {
  const status = ref(4)
  getGameStatusApi()
    .then((res) => {
      status.value = res.data.status
      ElMessage({
        message: "点击了检测按钮" + GameStatusEnum[status.value],
        type: "success"
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
const startButtonOnClick = () => {
  startGameApi()
    .then((res) => {
      const code = res.data.code
      const message: string = res.data.message
      if (code === 0) {
        ElMessage({
          message: "游戏启动成功 ",
          type: "success"
        })
      } else {
        ElMessage({
          message: `游戏启动失败 ! code : ${code}  message : ${message}`,
          type: "error"
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
const stopButtonOnClick = () => {
  stopGameApi()
    .then((res) => {
      const code = res.data.code
      const message: string = res.data.message
      if (code === 0) {
        ElMessage({
          message: "游戏停止成功 ",
          type: "success"
        })
      } else {
        ElMessage({
          message: `游戏停止失败 ! code : ${code}  message : ${message}`,
          type: "error"
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
const restartButtonOnClick = () => {
  restartGameApi()
    .then((res) => {
      const code = res.data.code
      const message: string = res.data.message
      if (code === 0) {
        ElMessage({
          message: "游戏启动成功 ",
          type: "success"
        })
      } else {
        ElMessage({
          message: `游戏启动失败 ! code : ${code}  message : ${message}`,
          type: "error"
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
const updateButtonOnClick = () => {
  updateGameApi()
    .then((res) => {
      const code = res.data.code
      const message: string = res.data.message
      if (code === 0) {
        ElMessage({
          message: "游戏更新成功 ",
          type: "success"
        })
      } else {
        ElMessage({
          message: `游戏更新失败! code : ${code}  message : ${message}`,
          type: "error"
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <!--  显示cpu 内存等状态 -->
  <!--  显示pal游戏状态 -->
  <!--  开启 重启 关闭 更新 按钮 -->
  <div>
    <el-button type="primary" @click="checkButtonOnClick">检测状态</el-button>
    <el-button type="primary" @click="startButtonOnClick">开启</el-button>
    <el-button type="primary" @click="stopButtonOnClick">关闭</el-button>
    <el-button type="primary" @click="restartButtonOnClick">重启</el-button>
    <el-button type="primary" @click="updateButtonOnClick">更新</el-button>
  </div>
</template>
