import Input from './Input.jsx'
import Modal from './Modal.jsx'
import {useRef} from 'react'

export default function NewProject({onCancel, onAdd}) {
    
    const textInput = useRef()
    const descInput = useRef()
    const dateInput = useRef()

    const dialog = useRef()

    function handleSaveProjectInput() {
        const savedText = textInput.current.value
        const savedDesc = descInput.current.value
        const savedDate = dateInput.current.value

        if (savedText.trim() === '' || savedDesc.trim() === '' || savedDate.trim() === '') {
            dialog.current.open()
            return
        }
        
        onAdd({
            title: savedText,
            description: savedDesc,
            date: savedDate
        })
    }

    return(
        <main className="main-window">
            <Modal ref={dialog}/>
            <h2>CREATE YOUR PROJECT</h2>
            <div className='form-actions'>
                <button onClick={onCancel} className="button-1">Cancel</button>
                <button onClick={handleSaveProjectInput} className="button-1">Save</button>
            </div>
            <div className='form'>
                <Input label="TITLE" type="text" ref={textInput}/>
                <Input label="DESCRIPTION" textarea ref={descInput}/>
                <Input label="DATE" type="date" ref={dateInput}/>
            </div>
        </main>
    )
}