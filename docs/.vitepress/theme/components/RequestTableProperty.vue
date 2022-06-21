<template>
  <div class="property">
    <div class="property__key">
      <b style="margin-right: 6px">{{ key }}</b>

      <span v-if="required" class="badge badge-warning">required</span>
      <span v-if="optional" class="badge badge-primary">optional</span>
    </div>

    <div class="property__type">type: {{ type }}</div>


    <div v-if="enums" class="property__enums">
      <div>Допустимые значения:</div>
      <code v-for="item in enums" style="margin-right: 6px">"{{ item }}"</code>
    </div>

    <div class="property__example" v-if="example">
      Пример:

      <span v-if="type === 'String'">
        "{{ example }}"
      </span>

      <span v-else>{{ example }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  const { property } = defineProps({
    property: {
      type: Object
    }
  })

  const {
    key,
    required,
    optional,
    type,
    enums,
    example
  } = property
</script>

<style lang="scss">
  .property {
    &__type, &__enums, &__example {
      font-size: 12px;
    }

    &__example {
      color: var(--vp-c-text-2);
    }
  }
</style>