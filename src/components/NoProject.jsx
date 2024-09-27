import logo from '../assets/no-projects.png'
import Button from './Button.jsx'

export default function NoProject() {
    return(
        <main className="main-window">
            <img src={logo} alt="logo" />
            <h2>WELCOME TO PROJECT-TASK APP</h2>
            <h5>At the moment there is no project created.</h5>
            <Button>Create Project</Button>
        </main>
    )
}