import NewTask from './NewTask.jsx'


export default function ProjectView({project, onAdd, tasks, onDelete, onRemove}) {
    return(
        <main className="project-view">
            <div className="header">
                <h2>{project.title}</h2>
                <button className="button-1" onClick={onRemove}>Delete</button>
            </div>
            <section>
                <h4>{project.date}</h4>
                <p>{project.description}</p>
            </section>
            <NewTask onAdd={onAdd} tasks={tasks} onDelete={onDelete}/>
        </main>
    )
}