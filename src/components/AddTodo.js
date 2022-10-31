import React, { useState } from 'react'
import { TextField, Text, PrimaryButton, DatePicker, Checkbox, MessageBar, MessageBarType } from '@fluentui/react'
import { useBoolean } from '@fluentui/react-hooks';

// if ( todos.length === 0 ) {
//     localStorage.setItem("todos", todos);
// }
const AddTodo = () => {

    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [allTodo, setAllTodo] = useState([])
    const [showStatus, { toggle: toggleShowStatus }] = useBoolean(false);
    const [showError, { toggle: toggleShowError }] = useBoolean(false);

    let handleTaskChange = (event) => {
        setTask(event.target.value)
    }

    let handleTimeChange = (value) => {
        setDate(value)
    }


    let addNewTodo = (event) => {
        event.preventDefault();
        if (date !== "" & task !== "") {
            setAllTodo((arr) => [...arr, { "key": allTodo.length + 1, "task": task, "date": String(date) }])
            // localStorage.setItem("todos", allTodo)
        } else {
            toggleShowError(true)
            setTimeout(() => {
                toggleShowError(false)
            }, 1500);
        }
    }

    let taskFinished = (event, key) => {
        toggleShowStatus(true)
        setTimeout(() => {
            toggleShowStatus(false)
        }, 1000);
        const newAllTodo = allTodo.filter((_, i) => i !== key);
        setAllTodo(newAllTodo);
        // localStorage.setItem("todos", allTodo)
    }

    return (
        <>
            <div className='addTodoSection'>
                <Text variant="xxLarge" block className='heading'>An Todo App</Text>
                <TextField label="Task:" onChange={(event) => handleTaskChange(event)} className="task_inp" autoComplete='off' autoCorrect='on' underlined autoFocus />
                <DatePicker className='time_inp' onSelectDate={(value) => handleTimeChange(value)} placeholder="Select a date..." ariaLabel="Select a date" />
                <PrimaryButton text="Add" allowDisabledFocus onClick={(event) => addNewTodo(event)} />
            </div>

            <div className='todos'>
                {showError && (
                    <MessageBar role="alert" messageBarType={MessageBarType.warning}>Please fill all the Fields.</MessageBar>
                )}
                <table>
                    <thead>
                        <th>Tasks</th>
                        {/* <th>Date</th> */}
                    </thead>
                    <tbody>
                        {
                            allTodo.length !== 0
                                ?
                                allTodo.map((data, index) => (
                                    <tr key={data.key} className="todo" id={data.key}>
                                        <td className='id'><Checkbox label={data.task + ' - ' + data.date} onChange={(event) => taskFinished(event, index)} /></td>
                                    </tr>
                                )).reverse()
                                :
                                <Text variant="medium" block className='emptyMsg'>You have no Tasks to do !!!</Text>
                        }
                    </tbody>
                    {showStatus && (
                        <MessageBar role="status" messageBarType={MessageBarType.success}>A Task is Finished.</MessageBar>
                    )}
                </table>
            </div>

        </>
    )
}

export default AddTodo