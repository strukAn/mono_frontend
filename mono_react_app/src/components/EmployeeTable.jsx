import { useState, useEffect, useRef } from 'react';
import EmployeeRow from './EmployeeRow';

function EmployeeTable({ employees, deleteEmployee, editingId, setEditingId }) {
    const employeeCount = useRef(null)
    useEffect(() => {
        employeeCount.textContent = `Employee count: ${employees.length}`;
    }, [employees])

    const openAddForm = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");

        fName.value = "";
        lName.value = "";
        store.value = "";
        started.value = "";

        form.classList.remove("hidden");
    }

    return (
        <div id="EmployeeTableContainer">
            <h1>Employees</h1>
            <p id="count" ref={employeeCount}>Employee count: {employees.length}</p>
            <span>
                <table id="EmployeeTable">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Store Name</th>
                            <th>Started On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <EmployeeRow 
                                key={employee.id}
                                employees={employees}
                                employee={employee}
                                deleteEmployee={deleteEmployee}
                                editingId={editingId}
                                setEditingId={setEditingId}
                            />
                        ))}
                    </tbody>
                </table>
            </span>
                <span>
                    <input type="button" value="Add" onClick={openAddForm} />
                </span>
        </div>
    )
}

export default EmployeeTable;