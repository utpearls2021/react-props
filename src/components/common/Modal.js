export default function Modal(props) {

  function onCancelHandler() {
    props.onCancel()
  }

  function onConfirmHandler() {
    props.onConfirm()
  }
  return (
    <div className="modal">
      <p>Are you sure !</p>
      <button onClick={onCancelHandler} className="btn btn--alt">Cancel</button>
      <button onClick={onConfirmHandler} className="btn">Confirm</button>
    </div>
  )
}