export default function NewProject({onCancel}) {
    return(
        <main className="main-window">
            <h2>CREATE YOUR PROJECT</h2>
            <div>
                <button onClick={onCancel} className="button-1">Cancel</button>
                <button className="button-1">Save</button>
            </div>
            <div>
                <label htmlFor="">TITLE</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">DESCRIPTION</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">DATE</label>
                <input type="text" />
            </div>
        </main>
    )
}