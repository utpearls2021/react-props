import { useState } from "react";
import Backdrop from "../common/Backdrop";
import Modal from "../common/Modal";

function Todo() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHaldler(){
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card card-default">
      <h2>Title</h2>
      <div className='actions'>
        <button className='btn' onClick={() => deleteHaldler()}>Delete</button>
      </div>

      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
    </div>
  )
}

export default Todo;