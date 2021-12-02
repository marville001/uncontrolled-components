import React from "react";

const Controlled = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email +  " - " + password);
  };
  return (
    <form className="mt-5 col-6" onSubmit={handleSubmit} autoComplete={false}>
      <h4>Controlled</h4>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Controlled;
