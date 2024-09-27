import logo from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProject({onSelect, projects}) {
    const showString = projects.length > 0

    return(
        <main className="main-window">
            <img src={logo} alt="logo" />
            <h2>WELCOME TO PROJECT-TASK APP</h2>
            {showString ? <h5>Please select a project from the sidebar or create a new project</h5> : <h5>At the moment there is no project created.</h5>}
            <Button onSelect={onSelect}>Create Project</Button>
        </main>
    )
}