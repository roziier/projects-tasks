import {forwardRef} from 'react'

const Input = forwardRef(function Input({label, type, textarea}, ref) {
    return(
        <div className="input-group">
            <label className="label">{label}</label>
            {textarea ? <textarea ref={ref} className="input"></textarea> : <input ref={ref} className="input" type={type}/>}
        </div>
    )
})

export default Input