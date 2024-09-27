import Button from './Button.jsx'

export default function Sidebar({onSelect, projects, clickProject}) {
    
    return(
        <aside id="sidebar">
            <h2>Your Projects</h2>
            <Button onSelect={onSelect}>+ Add New</Button>
            <div className='sidebar-list'>
                <ul>
                    {projects.map(project => 
                        <li key={project.id}>
                            <button onClick={() => clickProject(project.id)} >{project.title}</button>
                        </li>
                    )}
                </ul>
            </div>
        </aside>
    )
}