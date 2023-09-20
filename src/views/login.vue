<template>
    <div class="box">
        <div class="box1">
            <h1>UNI-ADMIN</h1>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue"
import { loginApi } from '../api/index'
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'

const router = useRouter()
const ruleFormRef = ref()
const ruleForm = ref({
    username: '',
    password: ''
})
// const checkAge = ((chall:any)=>{
//     if(/^{a-zA-Z}{5,20}/.test(ruleForm.value.username)){
//         chall()
//     }else{
//         return new (error('用户名是有a-z A-Z 组成的'))
//     }
// })
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 20, message: '用户名是5到20位的', trigger: 'blur' },
        // [{ validator: checkAge, trigger: 'blur' }]
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '密码是5到10位的', trigger: 'blur' },
    ],

})
const submitForm = (ruleFormRef: any) => {
    ruleFormRef.validate(async (valid: any) => {
        if (valid) {
            let res = await loginApi(ruleForm.value).then()
            console.log(res);
            localStorage.setItem('token', res.data.token)
            router.push('/')
            ElMessage({
                message: '登录成功',
                type: 'success',
            })
        } else {
            ElMessage({
                message: '登录失败'
            })
        }
    })
}

</script>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 100vh;
    padding-top: 100px;
}

.box1 {
    width: 500px;
    height: 250px;
    border: 1px solid #ccc;
    margin: auto;

    h1 {
        color: #757779;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }

    .el-form {
        padding: 20px;
    }
}
</style>