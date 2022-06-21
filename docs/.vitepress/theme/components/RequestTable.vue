<template>
  <div class="request-table" :class="isCollapsable ? { 'collapsed': !isOpen } : {}">
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
          <td style="white-space: nowrap">
            <b style="margin-right: 5px;">{{ item.key }}</b>

            <span v-if="item.required" class="badge badge-warning">required</span>
            <span v-if="item.optional" class="badge badge-primary">optional</span>
          </td>
          <td style="font-size: 12px; text-align: center"><code>{{ item.type }}</code></td>
          <td>{{ item.description }}</td>
        </tr>

        <template v-if="item.children">
          <tr v-for="childItem in item.children" class="has-children">
            <td style="white-space: nowrap">&nbsp; &nbsp;
              <b style="margin-right: 5px;">> {{ childItem.key }}</b>

              <span v-if="childItem.required" class="badge badge-warning">required</span>
              <span v-if="childItem.optional" class="badge badge-primary">optional</span>
            </td>
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
  :root {
    --table-overflow-color: white;
  }

  html.dark {
    --table-overflow-color: black;
  }

  .badge {
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    position: relative;
    top: -4px;
  }

  .badge-primary {
    background: var(--vp-c-green-dimm-1);
    color: var(--vp-c-text-1);
  }

  .badge-warning {
    background: var(--vp-c-yellow-dimm-1);
    color: var(blue);
  }

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


    &.collapsed table {
      &::after {
        background: linear-gradient(transparent 100px, var(--vp-c-bg));
        pointer-events: auto;
      }
    }

    &:not(.collapsed) table {
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