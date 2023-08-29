<script setup>

import EmployeeCreateForm from "@/components/EmployeeForm.vue";
import {useRoute, useRouter} from "vue-router";
import {uid} from "@/uid";
import {useStore} from "vuex";

const store = useStore()
const route = useRoute()
const router = useRouter()
const id = route.params.id

const employeeModel = store.getters.employeeById(id)

const editEmployee = (employee) => {
  store.commit('editEmployee',{ id, newEmployee: employee })
  router.push({ path: '/'})
}
</script>

<template>
  <h1>Страница редактирования</h1>
  <employee-create-form :initial-model="employeeModel"
                        v-slot="{employeeModelSlot}"
  >
    <button @click=" () => editEmployee(employeeModelSlot)">Сохранить сотрудника</button>
  </employee-create-form>
</template>

<style scoped>

</style>