<script setup>
import {reactive, ref} from "vue";
import {employeeLabels} from "@/store/employeeLabels";

const props = defineProps(['initialModel'])
const employeeLabelsRef = ref(employeeLabels)
let employeeModel = reactive({...props.initialModel})

</script>

<template>
  <form @submit.prevent>
    <label v-for="em in employeeLabelsRef" :key="em.key">
      {{ em.label }}
      <input v-model="employeeModel[em.key]" type="text">
    </label>
    <slot :employeeModelSlot="employeeModel">
    </slot>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>