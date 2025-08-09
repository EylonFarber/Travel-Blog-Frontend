import React from "react";
import { useNavigate } from "react-router";
import Button from "./Button";

export default function ActionModal({modalText}) {
 const navigate = useNavigate()
   function modalHandler() {
    navigate("/");
  }
    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Success</h3>
          <p className="py-4">{modalText}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Button
                btnText={"Ok"}
                clickHandler={modalHandler}
                color={"info"}
              />
            </form>
          </div>
        </div>
      </dialog>
  );
}
