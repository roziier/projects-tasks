export default function Button({children, onSelect}) {
    return(
        <button onClick={onSelect} className="button-1">{children}</button>
    )
}