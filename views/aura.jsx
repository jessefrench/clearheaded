import React from 'react'
import Main from './components/Main'

export default function Aura(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Did you sense it coming?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-aura" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="No"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Weakness</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Weakness"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Fatigue / achiness</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Fatigue / achiness"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Visual disturbance</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Visual disturbance"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Tingling in head</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Tingling in head"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Tingling in neck</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Tingling in neck"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Tingling near eye(s)</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Tingling near eye(s)"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Yawning</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Yawning"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Muscle stiffness</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Muscle stiffness"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Irritability</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Irritability"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Headache</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Headache"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Aura only</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Aura only"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Prodrome only</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Prodrome only"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Unusually energetic</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Unusually energetic"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Unusually depressed</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Unusually depressed"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Anxiety</span>
                    <input className="checkbox" type="checkbox" name="attackAura" value="Anxiety"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add aura*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="attackAura" id="userInput" disabled="disabled" placeholder="Aura"/>
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