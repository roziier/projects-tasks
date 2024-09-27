import {useState} from 'react'

const NewTesk = function NewTask({onAdd}) {
    const [taskInput, setTaskInput] = useState("")

    function handleChange(event) {
        setTaskInput(event.target.value)
    }

    function handleClick() {
        onAdd(taskInput)
        setTaskInput("")
    }

    return(
        <div className="new-task">
            <input value={taskInput} onChange={handleChange} className="input" type="text" />
            <button onClick={handleClick}>Add task</button>
        </div>
    )
}

export default NewTesk