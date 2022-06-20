<template>
  <div class="request-method" :class="classNames">
    {{ type }}
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const { type } = defineProps({
    type: String
  })

  const classNames = 'request-method_' + type
</script>

<style>
  .request-method {
    padding: 2px 14px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .request-method_get {
    background-color: var(--vp-c-green-dimm-1);
    color: var(--vp-c-text-1);
  }

  .request-method_post {
    background-color: var(--vp-custom-block-warning-border);
    color: var(--vp-custom-block-warning-text);
  }

  .request-method_put {
    background-color: #89b3ff;
    color: #396ecd;
  }

  .request-method_delete {
    background-color: var(--vp-custom-block-danger-border);
    color: var(--vp-custom-block-danger-text);
  }
</style>