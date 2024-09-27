import Button from './Button.jsx'

export default function Sidebar({onSelect}) {
    return(
        <aside id="sidebar">
            <h2>Your Projects</h2>
            <Button onSelect={onSelect}>+ Add New</Button>
        </aside>
    )
}