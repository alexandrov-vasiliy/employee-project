import {createStore} from 'vuex'
import {EMPLOYEE_LIST_KEY} from "@/localStorage";

const getEmployeeById = (state, id) => state.employeeList.find((employee) => employee.id === id)
export const employeeStore = createStore({
    state: {
        employeeList: JSON.parse(localStorage.getItem(EMPLOYEE_LIST_KEY)) ?? []
    },
    getters: {
        employeeList: (state) => state.employeeList,
        employeeCount: (state) => state.employeeList.length,
        employeeById: (state ) => (id) => {
           return getEmployeeById(state, id)
        }
    },
    mutations: {
        addEmployee(state, employee) {
            state.employeeList.push({...employee})
        },
        removeEmployee(state, id) {
            const editedEmployee = getEmployeeById(state, id)
            const employeeIndex = state.employeeList.indexOf(editedEmployee)

            state.employeeList.splice(employeeIndex, 1)
        },
        editEmployee(state, {id, newEmployee}) {
            const editedEmployee = getEmployeeById(state, id)
            const employeeIndex = state.employeeList.indexOf(editedEmployee)
            state.employeeList[employeeIndex] = newEmployee
        }
    }
})