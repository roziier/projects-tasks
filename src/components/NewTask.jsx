import {useState} from 'react'
import Tasks from './Tasks.jsx'

const NewTesk = function NewTask({onAdd, tasks, onDelete}) {
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
            <div className='action'>
                <input value={taskInput} onChange={handleChange} className="input" type="text" />
                <button onClick={handleClick}>Add task</button>
            </div>
            <Tasks projectTasks={tasks} onDelete={onDelete}/>
        </div>
    )
}

export default NewTesk