import React from 'react'
import Main from './components/Main'

export default function Relief(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">What relief methods have you tried?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-relief" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No relief</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="No relief"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Dark room rest</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Dark room rest"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Sleep</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Sleep"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Yoga / meditate</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Yoga / meditate"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Stay indoor</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Stay indoor"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Ice packs</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Ice packs"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Food</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Food"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Caffeine</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Caffeine"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Hot shower</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Hot shower"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Cold shower</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Cold shower"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Drink water</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Drink water"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Heat pad</span>
                    <input className="checkbox" type="checkbox" name="reliefMethod" value="Heat pad"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add relief method*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="reliefMethod" id="userInput" disabled="disabled" placeholder="Relief"/>
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