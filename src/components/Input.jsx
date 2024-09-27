export default function Input({label, type, textarea}) {
    return(
        <div className="input-group">
            <label className="label">{label}</label>
            {textarea ? <textarea className="input"></textarea> : <input className="input" type={type}/>}
        </div>
    )
}