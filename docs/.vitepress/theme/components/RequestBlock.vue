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

    <request-table :data="request.body" />

<!--    <div>-->
<!--      <div class="request-body">-->
<!--        <h6>Request body &nbsp; <code>application/json</code></h6>-->
<!--        <table>-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th style="text-align: left;">Свойство</th>-->
<!--            <th>Тип</th>-->
<!--            <th style="text-align: left;">Описание</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->

<!--          <template v-for="item in request.body" :key="item.key">-->
<!--            <tr :class="{ 'has-children': item.children }">-->
<!--              <td style="white-space: nowrap"><b>{{ item.key }}</b></td>-->
<!--              <td style="font-size: 12px; text-align: center"><code>{{ item.type }}</code></td>-->
<!--              <td>{{ item.description }}</td>-->
<!--            </tr>-->

<!--            <template v-if="item.children">-->
<!--              <tr v-for="childItem in item.children" class="has-children">-->
<!--                <td style="white-space: nowrap">&nbsp; &nbsp; <b>> {{ childItem.key }}</b></td>-->
<!--                <td style="font-size: 12px; text-align: center"><code>{{ childItem.type }}</code></td>-->
<!--                <td>{{ childItem.description }}</td>-->
<!--              </tr>-->
<!--            </template>-->
<!--          </template>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->

<!--      <div style="text-align: center; font-size: 14px; border-bottom: 1px dashed #e8e8e8; cursor: pointer">-->
<!--        Раскрыть-->
<!--      </div>-->
<!--    </div>-->
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
  const requestUrl = 'https://test.api.bulavka.uz/bulavka-rpc/' + request.path
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