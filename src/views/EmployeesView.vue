<script setup lang="ts">
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const pageTitle = ref('Сотрудники')
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->
  </DefaultLayout>
</template>
