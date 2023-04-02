import React from 'react'
import Main from './components/Main'

export default function Login(props){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Log in!</h1>
            </div>
            <div className="h-20">
              <img src="/images/handy-browser-window-with-sunglasses.png" height="150" width="150"/>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {props.messages.errors ?
                props.messages.errors.map((el, i) =>
                  <div key={i} className="alert alert-danger">{el.msg}</div>
                ) : null
              }
              {props.messages.info ?
                props.messages.info.map((el, i) =>
                  <div key={i} className="alert alert-danger">{el.msg}</div>
                ) : null
              }
              <form action="/login" method="POST">
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
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Log in"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}