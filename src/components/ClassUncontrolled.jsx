import React, { Component, createRef } from 'react'

export default class ClassUncontrolled extends Component {

    constructor(){
        super()

        this.emailRef = createRef()
        this.passRef = createRef()
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.emailRef.current.value);
        console.log(this.passRef.current.value);
    }
    render() {
        return (
            <form className="mt-5 col-6" onSubmit={this.handleSubmit} autoComplete={false}>
      <h4>Class Un Controlled</h4>
      <div className="mb-3 mt-3">
        <label className="form-label">Email address</label>
        <input 
        type="email" className="form-control" ref={this.emailRef} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" ref={this.passRef} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
        )
    }
}
