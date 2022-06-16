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
    background-color: #d5f7cd;
    color: #5fa749;
  }

  .request-method_post {
    background-color: #fdf0b3;
    color: #a18e33;
  }

  .request-method_put {
    background-color: #89b3ff;
    color: #396ecd;
  }

  .request-method_delete {
    background-color: #fbc6c6;
    color: #f17070;
  }
</style>