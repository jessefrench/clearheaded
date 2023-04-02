import React from 'react'
import Main from './components/Main'

export default function AttackType(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">What are the attack type(s)?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-attack-type" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Don't know yet</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Don't know yet"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Migraine</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Migraine"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Tension</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Tension"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Cluster</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Cluster"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Postdrome</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Postdrome"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Prodrome</span>
                    <input className="checkbox" type="checkbox" name="attackType" value="Prodrome"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add attack type*</span>
                    <input className="checkbox" type="checkbox" id="checker" />
                  </label>
                  <input className="input input-bordered" type="text" name="attackType" id="userInput" disabled="disabled" placeholder="Attack type"/>
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