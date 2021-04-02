<template>
  <div v-if="show" class="dimmed" @click.self="$emit('update:show', false)">
    <transition name="modal" appear>
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="btn btn-primary btn-sm" disabled>수정</button>
                <button class="btn btn-primary btn-sm" @click="$emit('update:show', false)">
                  닫기
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PrettyModal',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.dimmed {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(114, 114, 114, 0.3);
  width: 100%;
  height: 100%;
}
</style>
