
<template>
  <button @click="$emit('onClick')"
    style="height: 40px; width: 150px; background-color: transparent; border-radius: 18px; border: white 0.5px solid; color: white; font-size: 16px; font-family: Verdana, Geneva, Tahoma, sans-serif">
    <slot>Button</slot>
  </button>
</template>