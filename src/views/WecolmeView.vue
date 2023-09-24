<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import TheButton from '@/components/TheButton.vue';
import UserService from '@/modules/User/services/UserService';

const isModalOpen = ref(false)

async function loadData() {
  try {
    const response = await UserService.list()
    console.log(response.data);
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  loadData()
})
</script>
<template>
  <div>
    <TheButton @onClick="isModalOpen = true">Criar usuário</TheButton>
  </div>

  <TheModal :show="isModalOpen" @close="isModalOpen = false" />
</template>

<style scoped>
div {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
