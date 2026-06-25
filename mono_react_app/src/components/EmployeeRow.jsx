function EmployeeRow({ employees, employee, deleteEmployee, editingId, setEditingId }) {
    const openEditForm = (id) => {
        const form = document.getElementById("form");
        const submit = document.getElementById("submit");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        const employee = employees.find(el => Number(id) === Number(id));

        fName.value = employee.firstName;
        lName.value = employee.lastName;
        store.value = employee.store;
        started.value = employee.startedOn;
        setEditingId(Number(id));

        form.classList.remove("hidden");
    }

    return (
        <>
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.store}</td>
            <td>{employee.startedOn.split("-").reverse().join(".")}</td>
            <td>
                <input type="button" value="Edit" name="edit" onClick={() => openEditForm(employee.id)}/>
                <input type="button" value="Delete" name="delete" onClick={() => deleteEmployee(employee.id)}/>
            </td>
        </tr>
        </>
    )
}

export default EmployeeRow;