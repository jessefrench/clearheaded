import React from 'react'
import Main from './components/Main'

export default function Signup(props){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up!</h1>
            </div>
            <div className="h-20">
              <img src="/images/handy-gray-pencil.png" height="100" width="100"/>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {props.messages.errors ?
                props.messages.errors.map((el, i) =>
                  <div key={i} classNameName="alert alert-danger">{el.msg}</div>
                ) : null
              }
              {props.messages.info ?
                props.messages.info.map((el, i) =>
                  <div key={i} className="alert alert-danger">{el.msg}</div>
                ) : null
              }
              <form action="/signup" method="POST">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User name</span>
                  </label>
                  <input type="text" name="userName" placeholder="user name" className="input input-bordered"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered"/>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Sign up"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}