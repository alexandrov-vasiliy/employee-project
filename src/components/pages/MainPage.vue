<script setup>
import EmployeeCreateForm from "@/components/EmployeeForm.vue";
import EmployeeTable from "@/components/EmployeeTable.vue";
import {uid} from "@/uid";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const employeeModel = {
  fio: '',
  organization: '',
  division: '',
  position: '',
}

const addEmployee = (employee) => {
  employee.id = uid()
  store.commit('addEmployee', employee)
  router.push({path: `/edit/${employee.id}`})
}

</script>

<template>
<div>
  <h1>Главная страница</h1>
  <h2>Колличество сотрудников: {{ store.getters.employeeCount }}</h2>
  <employee-create-form :initial-model="employeeModel"
                        :submit-fn="addEmployee"
                        v-slot="{employeeModelSlot}"
  >
    <button @click=" () => addEmployee(employeeModelSlot)">Добавить сотрудника</button>
  </employee-create-form>
  <employee-table></employee-table>
</div>
</template>

<style scoped>

</style>