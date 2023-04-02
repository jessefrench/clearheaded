import React from 'react'
import Main from './components/Main'

export default function Medication(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Did you take any medication?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-medication" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No medication</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="No medication"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Nurtec 75mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Nurtec 75mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Zomig 5mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Zomig 5mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Relpax 20mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Relpax 20mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Maxalt 5mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Maxalt 5mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Paracetamol 500mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Paracetamol 500mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Topiramate 25mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Topiramate 25mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Ibuprofen 200mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Ibuprofen 200mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Aimovig 70ml</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Aimovig 70ml"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Ubrelvy 50mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Ubrelvy 50mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Venlafaxine 150mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Venlafaxine 150mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Sumatriptan 100mg</span>
                    <input className="checkbox" type="checkbox" name="attackMedication" value="Sumatriptan 100mg"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add medication*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="attackMedication" id="userInput" disabled="disabled" placeholder="Medication"/>
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