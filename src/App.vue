<template>
  <router-view></router-view>
</template>

<script setup>
import {useStore} from "vuex";
import {watch} from "vue";
import {EMPLOYEE_LIST_KEY} from "@/localStorage";

const store = useStore()
const employeeList = store.getters.employeeList

watch(employeeList, (value) => {
  localStorage.setItem(EMPLOYEE_LIST_KEY, JSON.stringify(value))
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
