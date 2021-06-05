<template>
  <div class="container h-screen overflow-hidden">
    <div class="transition-all duration-500" :style="translate">
      <div class="w-1/2 mx-auto animate-wiggle space-y-10">
        <div
          v-for="item in items"
          @click="active = item"
          @wheel.prevent="check"
          :key="item"
          class="
            transform
            h-[calc(50vh-32px)]
            w-full
            transition-all
            duration-500
            -skew-x-6
            relative
          "
          :class="{
            'z-30 scale-110': active === item,
            'translate-x-1/4': active > item,
            '-translate-x-1/4': active < item,
          }"
        >
          <img
            src="showcase.jpg"
            alt="Show Case"
            class="object-cover w-full h-full"
          />
          <div
            class="
              absolute
              z-20
              inset-[-1rem]
              border-[2rem] border-blue-50
              animate-wiggle
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue";

const active = ref(1);

const props = defineProps({
  items: Array,
});

const circular = (value, max, min = 1) => {
  return Math.min(Math.max(value, min), max);
};

var timerId;
const debounceFunction = (func, delay) => {
  clearTimeout(timerId);

  timerId = setTimeout(() => {
    func();
  }, delay);
};

const translate = computed(() => {
  return `transform: translateY(${(active.value - 1) * -50 + 25 }vh)`;
});
const check = (event) => {
  debounceFunction(() => {
    active.value =
      event.deltaY < 0
        ? circular(active.value - 1, props.items.length)
        : circular(active.value + 1, props.items.length);
    console.log(event.wheelDelta);
  }, 100);
};
</script>