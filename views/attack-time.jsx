import React from 'react'
import Main from './components/Main'

export default function AttackTime(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Start and end time of your attack?</h1>
            <p className="py-6">Leave end time blank if attack is ongoing.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-attack-time" method="POST">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input className="input input-bordered" type="date" name="date"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Start</span>
                  </label>
                  <input className="input input-bordered" type="time" name="start"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">End</span>
                  </label>
                  <input className="input input-bordered" type="time" name="end"/>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}