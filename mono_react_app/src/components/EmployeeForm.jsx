function EmployeeForm() {
    const addEmployee = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        
        const employees = JSON.parse(localStorage.getItem("employees")) ?? [];

        const employee = {
            id: (employees.at(employees.length - 1)?.id ?? 0) + 1,
            firstName: fName.value,
            lastName: lName.value,
            store: store.value,
            startedOn: started.value
        };

        employees.push(employee);

        localStorage.setItem("employees", JSON.stringify(employees))
        form.classList.add("hidden");
    }

    const cancelForm = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        const submit = document.getElementById("submit");

        fName.value = "";
        lName.value = "";
        store.value = "";
        started.value = "";

        submit.removeAttribute("data-employeeId");
        form.classList.add("hidden");
    }

    const editEmployee = () => {
        const form = document.getElementById("form");
        const fName = document.getElementById("firstname");
        const lName = document.getElementById("lastname");
        const store = document.getElementById("store");
        const started = document.getElementById("started");
        const submit = document.getElementById("submit");

        const id = Number(submit.dataset.id);
        const employees = JSON.parse(localStorage.getItem("employees"));
        const employee = employees.find(el => el.id === id);

        employee.firstName = fName.value;
        employee.lastName = lName.value;
        employee.store = store.value;
        employee.startedOn = started.value;

        fName.value = "";
        lName.value = "";
        store.value = "";
        started.value = "";

        localStorage.setItem("employees", JSON.stringify(employees))
        submit.removeAttribute("data-id");

        form.classList.remove("hidden");
    }

    const submitAction = () => {
        const submit = document.getElementById("submit");
        submit.dataset.id ? editEmployee() : addEmployee();

        window.location.reload();
    }

    return (
        <>
        <div>
            <form className="hidden" id="form">
                <label htmlFor="firstname">First Name:</label><br/>
                <input type="text" id="firstname" name="firstname" /><br/><br/>

                <label htmlFor="lastname">Last Name:</label><br/>
                <input type="text" id="lastname" name="lastname" /><br/><br/>

                <label htmlFor="store">Store:</label><br/>
                <input type="text" id="store" name="store" /><br/><br/>

                <label htmlFor="started">Started On:</label><br/>
                <input type="date" id="started" name="started" /><br/><br/>

                <span>
                    <input type="button" value="Submit" onClick={submitAction} />
                    <input type="button" value="Cancel" id="submit" onClick={cancelForm}/>
                </span>
            </form>
        </div>
        </>
    )
}

export default EmployeeForm;