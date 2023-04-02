import React from 'react'
import Main from './components/Main'

export default function Symptoms(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="sticky text-center lg:text-left">
            <h1 className="text-5xl font-bold">Are you experiencing any of these symptoms?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-symptoms" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">None</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="None"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Pounding pain</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Pounding pain"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Pulsating pain</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Pulsating pain"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Throbbing pain</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Throbbing pain"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Worse pain if moving</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Worse pain if moving"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Nausea</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Nausea"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Vomiting</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Vomiting"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Sensitivity to light</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Sensitivity to light"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Sensitivity to noise</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Sensitivity to noise"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Neck pain</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Neck pain"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Giddiness</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Giddiness"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Nasal congestion</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Nasal congestion"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Insomsia</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Insomsia"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Depressed mood</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Depressed mood"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Anxiety</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Anxiety"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Sensitivity to smell</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Sensitivity to smell"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Heat</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Heat"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Ringing in ears / Tinnitus</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Ringing in ears / Tinnitus"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Fatigue</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Fatigue"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Blurred vision</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Blurred vision"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Moody</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Moody"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Diarrhea</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Dirrhea"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Confusion / light headed</span>
                    <input className="checkbox" type="checkbox" name="attackSymptoms" value="Confusion / light headed"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add symptom*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="attackSymptoms" id="userInput" disabled="disabled" placeholder="Symptom"/>
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