<template>
  <div>
    <div class="request-block">
      <div class="request-block__left">
        <request-method :type="requestMethod"/>

        <div class="request-block__url">
          {{ requestUrl }}
        </div>
      </div>

      <div class="request-block__actions">
        <button @click="copyUrl" class="request-block__copy-btn" :class="{ copied: copyText === 'Copied' }">
          {{ copyText }}
        </button>
      </div>
    </div>

    <request-table
      v-if="request.body"
      :data="request.body"
      title="Request body"
      postfix="application/json"
    />

    <request-table
      v-if="request.pathParams"
      :data="request.pathParams"
      title="URL Segments"
    />

    <request-table
        v-if="request.queryParams"
        :data="request.queryParams"
        title="Query Parameters"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref, computed, defineProps, getCurrentInstance } from 'vue'
  import RequestMethod from './RequestMethod.vue'
  import RequestTable from "./RequestTable.vue";

  const { name } = defineProps({
    name: {
      type: String
    }
  })

  const copyText: Ref = ref('Copy')

  const { appContext } = getCurrentInstance()
  const request = appContext.config.globalProperties.$apiEndpoints[name]

  const requestMethod = request.method
  const requestUrl = 'test.api.bulavka.uz/bulavka-rpc/' + request.path

  function copyUrl() {
    navigator.clipboard.writeText(requestUrl)
        .then(() => {
          copyText.value = 'Copied'

          setTimeout(() => {
            copyText.value = 'Copy'
          }, 5000)
        })
        .catch(() => {
          copyText.value = 'Error'
        })
  }
</script>

<style lang="scss">
  table {
    font-size: 14px;
  }

  .request-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 20px;
    padding-bottom: 20px;

    &__left {
      display: flex;
      align-items: center;
    }

    &__url {
      margin-left: 20px;
      font-size: 14px;
      font-weight: 500;
      user-select: none;
      white-space: nowrap;

      &:hover {
        cursor: pointer;
      }
    }

    &__copy-btn {
      border-bottom: 1px dashed #ccc;
      transition: 200ms ease;
      color: #999;

      &.copied {
        color: #5fa749;
        pointer-events: none;
        border-bottom-color: #5fa749;
      }

      &:hover {
        color: #333;
        border-color: #333;
      }
    }

    .request-method {
      width: 80px;
      text-align: center;
      user-select: none;
    }
  }
</style>