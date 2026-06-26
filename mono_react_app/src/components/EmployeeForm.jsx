import { unstable_batchedUpdates } from 'react-dom';

function SubmitAction({ editingId, editEmployee, addEmployee }) {
    return editingId ?
        <input type="button" value="Submit" onClick={editEmployee}/>
        : <input type="button" value="Submit" onClick={addEmployee}/>
}

function EmployeeForm({ editEmployee, addEmployee, editingId, setEditingId }) {
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

        setEditingId;
        form.classList.add("hidden");
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
                    <SubmitAction
                        editingId={editingId}
                        editEmployee={editEmployee}
                        addEmployee={addEmployee}
                    />
                    <input type="button" value="Cancel" id="submit" onClick={cancelForm}/>
                </span>
            </form>
        </div>
        </>
    )
}

export default EmployeeForm;