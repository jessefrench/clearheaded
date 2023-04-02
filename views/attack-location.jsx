import React from 'react'
import Main from './components/Main'

export default function AttackLocation(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Where were you when the headache started?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-attack-location" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Home</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="Home"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Work</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="Work"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">School</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="School"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">In transit / commuting</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="In transit / commuting"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Bed (at home)</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="Bed (at home)"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Out</span>
                    <input className="checkbox" type="checkbox" name="attackLocation" value="Out"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add location*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="attackLocation" id="userInput" disabled="disabled" placeholder="Location"/>
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