<template>
  <el-dialog
    :model-value="props.visible"
    :width="props.width"
    :show-close="props.showClose"
    :destroy-on-close="props.destroyOnClose"
    :draggable="props.draggable"
    :top="props.top"
    class="ys-dialog"
    :append-to-body="props.appendToBody"
    :close-on-click-modal="props.closeOnClickModal"
  >
    <div>
      <slot />
    </div>
    <template #header>
      <slot name="header">
        <div class="ys-dialog-header">
          <span> {{ props.title }}</span>
          <svg-icon
            name="close"
            className="close-icon"
            @click="handleBeforeClose"
          />
        </div>
      </slot>
    </template>
    <template #footer>
      <slot name="footer">
        <div class="ys-dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleOk">确定</el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean;
  title: string;
  center: boolean;
  width: string;
  destroyOnClose: boolean;
  draggable: boolean;
  top: string;
  appendToBody: boolean;
  closeOnClickModal: boolean;
  beforeClose: boolean;
  showClose: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  center: false,
  width: '40%',
  destroyOnClose: true,
  draggable: true,
  top: '15vh',
  appendToBody: true,
  closeOnClickModal: false,
  showClose: false
});

const emit = defineEmits(['no', 'ok', 'before-close']);

const handleClose = () => {
  emit('no');
};
const handleOk = () => {
  emit('ok');
};

const handleBeforeClose = () => {
  if (props.beforeClose) {
    return emit('before-close');
  }
  return emit('no');
};
</script>

<style scoped lang="scss">
.close-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover {
    color: #2153f3;
  }
}
.ys-dialog {
}

.ys-dialog-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(51, 51, 51, 1);
  font-weight: 400;
}
.ys-dialog-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="scss">
.ys-dialog {
  border: 1px solid #d9d9d9;
  box-shadow: 5px 4px 15px rgba(153, 153, 153, 0.3);
  border-radius: 6px;
  padding: 0 16px 16px 16px;

  .ys-dialog__header {
    height: 68px;
    padding: 0;
  }
}
</style>
