<template>
  <ys-dialog
    :visible="visible"
    status-icon
    :title="title"
    @no="handleNo"
    @ok="handleOk"
  >
    <el-form
      ref="regRef"
      :model="regForm"
      :label-width="labelWidth"
      :rules="rules"
    >
      <el-form-item label="注册表名称">
        <el-input disabled v-model="regForm.regName" />
      </el-form-item>
      <el-form-item label="应用路径" prop="regClienPath">
        <el-input
          v-model="regForm.regClienPath"
          placeholder="C:\xxx\xxx\xxx.exe"
        />
      </el-form-item>
    </el-form>
  </ys-dialog>
</template>

<script setup lang="ts">
import { downloadStartClientReg } from '@/utils';
import type { FormInstance } from 'element-plus';
import { computed, onMounted, reactive, ref } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: true
  },
  appName: {
    type: String,
    required: true
  }
});

const title = ref('下载注册列表');
const regRef = ref<FormInstance>();
const visible = computed({
  get() {
    return props.visible;
  },
  set(val: boolean) {
    emit('no', val);
  }
});

const rules = reactive({
  regClienPath: [
    { required: true, message: '请输入本地应用路径名称', trigger: 'blur' }
  ]
});

const labelWidth = 90;
const regForm = reactive({
  regName: 'MWORKDS',
  regClienPath: ''
});

const resetRefForm = () => {
  regForm.regClienPath = '';
};

onMounted(() => {
  regForm.regName = props.appName;
});

const emit = defineEmits(['no']);
const handleNo = () => {
  emit('no');
  resetRefForm();
};

const handleOk = () => {
  regRef.value.validate(valid => {
    if (valid) {
      downloadStartClientReg(regForm.regName, regForm.regClienPath);
      handleNo();
    }
  });
};
</script>
<style scoped></style>
