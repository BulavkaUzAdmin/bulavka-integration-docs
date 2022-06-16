<template>
  <div class="request-table" :class="isCollapsable ? { 'is-open': isOpen } : {}">
    <h6>{{ title }} &nbsp; <code v-if="postfix">{{ postfix }}</code></h6>
    <table>
      <thead>
      <tr>
        <th style="text-align: left;">Свойство</th>
        <th>Тип</th>
        <th style="text-align: left;">Описание</th>
      </tr>
      </thead>
      <tbody>

      <template v-for="item in data" :key="item.key">
        <tr :class="{ 'has-children': item.children }">
          <td style="white-space: nowrap"><b>{{ item.key }}</b></td>
          <td style="font-size: 12px; text-align: center"><code>{{ item.type }}</code></td>
          <td>{{ item.description }}</td>
        </tr>

        <template v-if="item.children">
          <tr v-for="childItem in item.children" class="has-children">
            <td style="white-space: nowrap">&nbsp; &nbsp; <b>> {{ childItem.key }}</b></td>
            <td style="font-size: 12px; text-align: center"><code>{{ childItem.type }}</code></td>
            <td>{{ childItem.description }}</td>
          </tr>
        </template>
      </template>
      </tbody>
    </table>

    <a v-if="isCollapsable" @click="isOpen = !isOpen" class="request-table__collapse-btn">
      {{ isOpen ? 'Скрыть' : 'Развернуть' }}
    </a>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, ref } from 'vue'

  const { data, title, postfix } = defineProps({
    data: {
      type: Array
    },

    title: {
      type: String
    },

    postfix: String
  })

  const isOpen = ref(false)
  const isCollapsable = data.length > 7
</script>

<style lang="scss">
  .request-table {
    table {
      max-height: 400px;
      overflow: hidden;
      position: relative;

      transition: 500ms ease;

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 500ms ease;
        pointer-events: none;
      }
    }


    &:not(.is-open) table {
      &::after {
        background: linear-gradient(transparent 100px, white);
        pointer-events: auto;
      }
    }

    &.is-open table {
      max-height: 3000px;
    }

    &__collapse-btn {
      display: block;
      text-align: center;
      font-size: 14px;
      border-top: 1px dashed #e8e8e8;
      padding-top: 6px;
      user-select: none;

      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
  }
</style>