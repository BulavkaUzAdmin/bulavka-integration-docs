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
        <button class="request-block__copy-btn">Скопировать</button>
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
      title="Path params"
    />

    <request-table
        v-if="request.queryParams"
        :data="request.queryParams"
        title="Query params"
    />
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, getCurrentInstance } from 'vue'
  import RequestMethod from './RequestMethod.vue'
  import RequestTable from "./RequestTable.vue";

  const { name } = defineProps({
    name: {
      type: String
    }
  })

  const { appContext } = getCurrentInstance()
  const request = appContext.config.globalProperties.$apiEndpoints[name]

  const requestMethod = request.method
  const requestUrl = 'test.api.bulavka.uz/bulavka-rpc/' + request.path
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
      user-select: none;
      white-space: nowrap;
    }

    &__copy-btn {
      border-bottom: 1px dashed #ccc;
      transition: 200ms ease;
      color: #999;

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