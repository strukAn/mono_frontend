function EmployeeRow({ employee }) {
    const openEditForm = (id) => {
        const form = document.getElementById("form");
        const submit = document.getElementById("submit");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");

        const employees = JSON.parse(localStorage.getItem("employees"));
        const employee = employees.find(el => el.id === id);

        fName.value = employee.firstName;
        lName.value = employee.lastName;
        store.value = employee.store;
        started.value = employee.startedOn;

        submit.dataset.id = id;

        form.classList.remove("hidden");
    }

    const deleteEmployee = (id) => {
        let employees = JSON.parse(localStorage.getItem("employees"));
        employees = employees.filter(el => el.id !== id);

        localStorage.setItem("employees", JSON.stringify(employees));

        window.location.reload();
    }

    return (
        <>
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.store}</td>
            <td>{employee.startedOn.split("-").reverse().join(".")}</td>
            <td>
                <input type="button" value="Edit" name="edit" onClick={() => openEditForm(employee.id)} data-id={employee.id}/>
                <input type="button" value="Delete" name="delete" onClick={() => deleteEmployee(employee.id)} data-id={employee.id}/>
            </td>
        </tr>
        </>
    )
}

export default EmployeeRow;