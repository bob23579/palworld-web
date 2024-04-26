<script setup lang="ts">
import { reactive } from "vue"
import { ElMessage } from "element-plus"
import router from "@/router"

const form = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: ""
})
const onSubmit = () => {
  // check new password
  if (form.newPassword !== form.confirmPassword) {
    ElMessage.error("新旧密码不同")
    return
  }
  // submit password
  ElMessage("提交密码")
}
const onReset = () => {
  form.oldPassword = ""
  form.newPassword = ""
  form.confirmPassword = ""
}
const returnHome = () => {
  router.push("/")
}
</script>

<template>
  <div class="user-router">
    <!--个人信息页面 展示用户名 修改密码框-->
    <el-text>用户名： </el-text>
    <el-form>
      <el-form-item label="旧密码">
        <el-input type="password" v-model="form.oldPassword" />
      </el-form-item>
      <el-form-item label="新密码">
        <el-input type="password" v-model="form.newPassword" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.confirmPassword" />
      </el-form-item>

      <el-button @click="onSubmit">提交</el-button>
      <el-button @click="onReset">清空</el-button>
    </el-form>
    <el-button @click="returnHome">返回主页</el-button>
  </div>
</template>

<style scoped lang="scss">
.user-router {
  height: 100%;
  width: 100%;
}
</style>
