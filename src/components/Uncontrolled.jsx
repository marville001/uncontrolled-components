import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(emailRef.current.value + " - " + passRef.current.value);
  };
  return (
    <form className="mt-5 col-6" onSubmit={handleSubmit} autoComplete={false}>
      <h4>Un Controlled</h4>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input defaultValue="mwas@gmail.com" type="email" className="form-control" ref={emailRef} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" ref={passRef} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Uncontrolled;
