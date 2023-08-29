<script setup>
import {useStore} from "vuex";
import {employeeLabels} from "@/store/employeeLabels";
import {useRouter} from "vue-router";
const store = useStore()
const router = useRouter()
const remove = (id) => {
  store.commit('removeEmployee', id)
}
const edit = (id) => {
  router.push( { path: '/edit/' + id})
}

const employeeList = store.getters.employeeList
</script>

<template>
<table>
  <tr>
    <th v-for="employeeLabel in employeeLabels" :key="employeeLabel.key">
      {{ employeeLabel.label }}
    </th>
  </tr>
  <tr v-for="(employee, index) in employeeList" :key="index">
    <td v-for="employeeLabel in employeeLabels" :key="employeeLabel.key" >
      {{employee[employeeLabel.key]}}
    </td>
    <td>
      <button @click="() =>  edit(employee.id)"> редактировать </button>
      <button @click="() => remove(employee.id)"> удалить </button>
    </td>
  </tr>
</table>
</template>

<style scoped>

</style>