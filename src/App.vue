<template>
  <div class="bg-blue-50">
    <ShowCase :items="items"/>
  </div>
</template>

<script setup>
import './assets/index.css'
import ShowCase from './components/ShowCase.vue'
import {ref} from 'vue';

const items = ref([1,2,3,4,5])
</script>
