export default function AlertButton({text, message}) {
    function handlerClick() {
        alert(message)
    }

    return (
        <button onClick={handlerClick}>{text}</button>
    )
}