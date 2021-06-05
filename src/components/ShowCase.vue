<template>
  <div class="container h-screen overflow-hidden">
    <div class="transition-all duration-500" :style="translate">
      <div class="w-2/3 lg:w-1/2 mx-auto animate-wiggle space-y-10">
        <div
          tabindex="0"
          v-for="item in items"
          @click="select(item.id)"
          @wheel.prevent="scroll"
          @keyup.down.right.stop="change(1)"
          @keyup.up.left.stop="change(-1)"
          :key="item"
          ref="showCase"
          class="
            transform
            h-[calc(50vh-40px)]
            w-full
            transition-all
            duration-500
            relative
          "
          :class="{
            'z-30 scale-110': active === item.id,
            '-skew-x-6': selected !== item.id,
            'opacity-0': selected && selected !== item.id,
            'translate-x-1/3': active > item.id,
            '-translate-x-1/3': active < item.id,
          }"
        >
          <div
            :class="classes[item.id]"
            class="
              flex
              items-center
              justify-center
              h-full
              w-full
              text-6xl
              font-bold
              text-white
            "
          >
            {{ item.label }}
          </div>
          <div
          :title="item.label"
            class="
              absolute
              z-20
              inset-[-1rem]
              border-[2rem] border-blue-50
              rounded-lg
              animate-wiggle
              cursor-pointer
            "
            :class="{ 'ring-red-400 ring-8': active === item.id }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, computed, onMounted } from "vue";

const active = ref(1);
const selected = ref(null);
const height = ref(100);
const showCase = ref(null);

onMounted(() => {
  height.value = showCase.value.offsetHeight;
});

const props = defineProps({
  items: Array,
});

const circular = (value, max, min = 1) => {
  return Math.min(Math.max(value, min), max);
};

let timer, busy;

const debounce = (callback, delay) => {
  if (!busy) {
    callback();
    busy = true;
    return;
  }
  clearTimeout(timer);

  timer = setTimeout(() => {
    busy = false;
  }, delay);
};

const translate = computed(() => {
  return `transform: translateY(${(active.value - 1) * -50 + 25}vh)`;
});

const classes = computed(() => {
  return {
    1: "bg-red-500",
    2: "bg-indigo-500",
    3: "bg-yellow-500",
    4: "bg-green-500",
    5: "bg-blue-500",
  };
});

const scroll = (event) => {
  debounce(() => {
    change(Math.sign(event.deltaY));
  }, 50);
};

const change = (value) => {
  if (!selected.value) {
    active.value = circular(active.value + value, props.items.length);
  }
};

const select = (id) => {
  selected.value = selected.value ? null : id;
  active.value = id;
};
</script>