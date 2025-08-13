import React from 'react'
import Button from './Button'

export default function failureModal({modalText}) {
  return (
      <dialog id="failureModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Error</h3>
          <p className="py-4">{modalText}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button
                btnText={"Ok"}
                color={"info"}
              />
            </form>
          </div>
          
        </div>
      </dialog>
        )
}
