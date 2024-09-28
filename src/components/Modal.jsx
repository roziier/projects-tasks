import { useRef, useImperativeHandle, forwardRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({...props}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return(
        createPortal(
        <dialog ref={dialog}>
            <h1>YOU CANNOT LEAVE EMPTY FIELDS</h1>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
        , document.getElementById("modal-root"))
    )
})

export default Modal