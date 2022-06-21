<template>
  <template v-for="item in data" :key="item.key">
    <tr>
      <td
          style="white-space: nowrap"
          :style="tdStyles"
          :class="{ 'is-child': isChildren }"
          :data-spacing="deepLevel"
      >
        <request-table-property :property="item" />
      </td>
      <td>{{ item.description }}</td>
    </tr>

    <template v-if="item.children">
      <request-table-row :data="item.children" :deep-level="deepLevel + 1" is-children />
    </template>
  </template>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import RequestTableProperty from './RequestTableProperty.vue'

  const { data, deepLevel, isChildren } = defineProps({
    data: {
      type: Object
    },

    isChildren: {
      type: Boolean
    },

    deepLevel: {
      type: Number,
      default: 1
    }
  })

  const tdStyles = isChildren ? {
    paddingLeft: 22 * deepLevel + 'px'
  } : {}
</script>