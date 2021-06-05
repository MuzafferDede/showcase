<template>
  <div class="bg-white">
    <ShowCase :items="items"/>
  </div>
</template>

<script setup>
import './assets/index.css'

import ShowCase from './components/ShowCase.vue'

import {ref} from 'vue';

const items = ref([
  {
    id: 1,
    label: 'This',
  },
  {
    id: 2,
    label: 'is',
  },
    {
    id: 3,
    label: 'so',
  },
    {
    id: 4,
    label: 'cooo...',
  },
    {
    id: 5,
    label: '..oool!',
  },  
])
</script>
