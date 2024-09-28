export default function Tasks({projectTasks, onDelete}) {
    const showTasks = projectTasks.length > 0

    return(
        <div className="tasks-box">
            {!showTasks ? 
                <h6>No tasks available for this project</h6> :
                <div className="section">
                    {projectTasks.map(task => 
                        <li key={task.id}>
                            <span>{task.task_title}</span>
                            <button onClick={() => onDelete(task.id)}>Clear</button>
                        </li>
                    )}
                </div>
            }
            
        </div>
    )
}