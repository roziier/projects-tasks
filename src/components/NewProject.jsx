import Input from './Input.jsx'
export default function NewProject({onCancel}) {
    return(
        <main className="main-window">
            <h2>CREATE YOUR PROJECT</h2>
            <div className='form-actions'>
                <button onClick={onCancel} className="button-1">Cancel</button>
                <button className="button-1">Save</button>
            </div>
            <div className='form'>
                <Input label="TITLE" type="text"/>
                <Input label="DESCRIPTION" textarea/>
                <Input label="DATE" type="date"/>
            </div>
        </main>
    )
}