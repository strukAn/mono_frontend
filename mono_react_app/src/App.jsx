import { useState } from 'react'
import EmployeeTable from './components/EmployeeTable'
import EmployeeForm from './components/EmployeeForm'
import axios from 'axios'

function App() {
    const [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employees")) ?? []
    );

    const [editingId, setEditingId] = useState(0);

    const updateEmployees = (newEmployees) => {
        setEmployees(newEmployees);
        localStorage.setItem("employees", JSON.stringify(newEmployees));
    }

    const deleteEmployee = (id) => {
        const updated = employees.filter(employee => Number(employee.id) !== Number(id));
        updateEmployees(updated);
    }

    const editEmployee = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        const submit = document.getElementById("submit");

        const employees = JSON.parse(localStorage.getItem("employees"));
        const employee = employees.find(el => Number(el.id) === Number(editingId));

        employee.firstName = fName.value;
        employee.lastName = lName.value;
        employee.store = store.value;
        employee.startedOn = started.value;

        fName.value = "";
        lName.value = "";
        store.value = "";
        started.value = "";

        localStorage.setItem("employees", JSON.stringify(employees))
        setEditingId(0);

        form.classList.add("hidden");

        updateEmployees(employees);
    }

    const addEmployee = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        
        const employee = {
            id: (employees.at(employees.length - 1)?.id ?? 0) + 1,
            firstName: fName.value,
            lastName: lName.value,
            store: store.value,
            startedOn: started.value
        };  

        form.classList.add("hidden");
        
        updateEmployees([...employees, employee]);
    }

  return (
    <>
    <EmployeeTable
      employees={employees}
      deleteEmployee={deleteEmployee}
      editingId={editingId}
      setEditingId={setEditingId}
    />
    <hr/>
    <EmployeeForm 
      editEmployee={editEmployee}
      addEmployee={addEmployee}
      editingId={editingId}
    />
    </>
  )
}

export default App
