import React from 'react';

const Modal = () => {
  return (
    <dialog id="form_modal" className="modal">
      <div className="modal-box p-8">
        <form>
          <fieldset className="fieldset">
            <h1 className="text-2xl font-bold text-center">Try Now</h1>

            <label className="label">Name</label>
            <input type="text" name='name' className="input w-full" placeholder="Name" />

            <label className="label">Email</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" />

            <button className="btn btn-accent text-base-100 mt-4">Try Now</button>
          </fieldset>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;