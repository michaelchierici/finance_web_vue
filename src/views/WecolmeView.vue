<script setup lang="ts">
import { ref } from 'vue'
import TheModal from '@/components/TheModal.vue'
import TheButton from '@/components/TheButton.vue';
import TheInput from '@/components/TheInput.vue'

const isModalOpen = ref(false)

</script>
<template>
  <div>
    <TheButton @onClick="isModalOpen = true">Criar usuário</TheButton>
  </div>
  <TheModal :show="isModalOpen" @close="isModalOpen = false">
    <template #header>
      Crie um usuário
    </template>
    <template #body>
      <TheInput placeholder="Nome" />
      <TheInput placeholder="Idade" />
      <TheInput placeholder="Profissão" />
    </template>
  </TheModal>
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
