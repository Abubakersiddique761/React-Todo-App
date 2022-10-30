import React, { useEffect, useState } from 'react'
import { TextField, Text, PrimaryButton, DatePicker, Checkbox } from '@fluentui/react'

let todos = [
    {
        "key": 1,
        "task": "New Task 2",
        "date": "12/12/12"
    },
    {
        "key": 2,
        "task": "New Task 2",
        "date": "11/11/11"
    },
    {
        "key": 3,
        "task": "New Task 3",
        "date": "10/10/10"
    },
]

const AddTodo = () => {

    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [allTodo, setAllTodo] = useState(todos)

    let handleTaskChange = (event) => {
        setTask(event.target.value)
    }

    let handleTimeChange = (value) => {
        setDate(value)
    }


    let addNewTodo = () => {
        if (date !== "" & task !== "") {

            setAllTodo((arr) => [...arr, { "key": allTodo.length + 1, "task": task, "date": String(date) }])
            console.log(allTodo.length)
            console.log(allTodo)

        } else {
            console.log("Empty Task")
        }
    }

    // useEffect(() => {

    // })

    return (
        <>
            <div className='addTodoSection'>
                <Text variant="xxLarge" block className='heading'>An Todo App</Text>
                <TextField label="Task:" onChange={(event) => handleTaskChange(event)} className="task_inp" autoComplete='off' autoCorrect='on' underlined autoFocus />
                <DatePicker className='time_inp' onSelectDate={(value) => handleTimeChange(value)} placeholder="Select a date..." ariaLabel="Select a date" />
                <PrimaryButton text="Add" allowDisabledFocus onClick={addNewTodo} />
            </div>

            <div className='todos'>
                <table>
                    <thead>
                        <th colspan="2">Tasks</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {allTodo.map((data) => (
                            <tr key={data.key} className="todo">
                                <td className='id'><Checkbox /></td>
                                <td className='task'>{data.task}</td>
                                <td className='date'>{data.date}</td>
                            </tr>
                        )).reverse()}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default AddTodo