import React from "react";

function LoginForm() {
  return (
    <>
      <div className="container text-center p-5 bg-white rounded w-auto">
        <img src="/images/8ballfire.png" className="w-25" alt="" />
        <h1>Welcome Back!</h1>
        <small>Please enter your details</small>
        <form className="p-3" action="">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="btn btn-dark mt-3">Login</button>
        </form>
        <small>Forgot Password ? <span className="fw-bold">IDC DICKHEAD</span></small>
      </div>
    </>
  );
}

export default LoginForm;
