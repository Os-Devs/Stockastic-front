<template>
    <div class="dropdown" @click.stop="toggleDropdown">
      <button class="dropdown-toggle">
        <img src="https://cdn-icons-png.flaticon.com/512/4305/4305482.png" alt="Icon" class="w-8" />
      </button>
      <ul v-if="isOpen" class="dropdown-list">
        <li v-for="(item, index) in props.items" :key="index" @click="handleItemClick(item)" :class="{ 'with-line': index !== 0 }">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';

  
  const props = defineProps(['items']);
  
  const isOpen = ref(false);
  const selectedItem = ref(null);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const handleItemClick = (item: any) => {
    selectedItem.value = item;
    isOpen.value = false;
  };
  
  </script>
  
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 8px 0;
  margin: 0;
  z-index: 1;
  width: 400px;
}

.dropdown-list li {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f1f1f1;
}

.with-line {
  border-top: 1px solid #ddd;
}

</style>
  