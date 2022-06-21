<template>
  <div class="request-table" :class="isCollapsable ? { 'collapsed': !isOpen } : {}">
    <h6>{{ title }} &nbsp; <code v-if="postfix">{{ postfix }}</code></h6>
    <table>
      <thead>
      <tr>
        <th style="text-align: left;">Свойство</th>
        <th style="text-align: left;">Описание</th>
      </tr>
      </thead>
      <tbody>
        <request-table-row :data="data" />
      </tbody>
    </table>

    <a v-if="isCollapsable" @click="isOpen = !isOpen" class="request-table__collapse-btn">
      {{ isOpen ? 'Скрыть' : 'Развернуть' }}
    </a>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, ref } from 'vue'
  import RequestTableRow from './RequestTableRow.vue'

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

  let isCollapsable = false

  if (data.length > 7) {
    isCollapsable = true
  } else {
    data.forEach(item => {
      if (item.children && item.children.length > 7) {
        isCollapsable = true
      }
    })
  }
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
      max-height: 10000px;
    }

    &__enum {
      font-size: 12px;
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