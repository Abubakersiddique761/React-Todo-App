import React, { useState } from 'react'
import { TextField, Text, PrimaryButton, DatePicker } from '@fluentui/react'

const AddTodo = () => {

    const [task, setTask] = useState("")
    const [date, setDate] = useState("")

    let handleTaskChange = (event) => {
        setTask(event.target.value)
    }

    let handleTimeChange = (value) => {
        setDate(value)
    }

    let addNewTodo = () => {
        
    }

    return (
        <div className='addTodoSection'>
            <Text variant="xxLarge" block className='heading'>An Todo App</Text>
            <TextField label="Task:" onChange={(event) => handleTaskChange(event)} className="task_inp" autoComplete='off' autoCorrect='on' underlined autoFocus />
            <DatePicker className='time_inp' onSelectDate={(value) => handleTimeChange(value)}  placeholder="Select a date..." ariaLabel="Select a date"/>
            <PrimaryButton text="Add" allowDisabledFocus onClick={addNewTodo}/>
        </div>
    )
}

export default AddTodo