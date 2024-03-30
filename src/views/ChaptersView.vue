<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const pageTitle = ref('Главы')
</script>

<template>
  <DefaultLayout>
    <div class="mx-auto max-w-7xl">
      <!-- Breadcrumb Start -->
      <BreadcrumbDefault  :pageTitle="pageTitle" />
      <!-- Breadcrumb End -->
    </div>
  </DefaultLayout>
</template>
