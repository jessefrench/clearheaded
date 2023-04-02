import React from 'react'
import Main from './components/Main'

export default function PainLocation(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Where did the pain start?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-pain-location" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Front-left of head</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Front-left of head"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Front-right of head</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Front-right of head"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Back-left of head</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Back-left of head"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Back-right of head</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Back-right of head"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left base of skull</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left base of skull"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right base of skull</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right base of skull"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left side of neck</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left side of neck"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right side of neck</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right side of neck"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left eye</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left eye"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right eye</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right eye"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Between the eyes</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Between the eyes"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left ear</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left ear"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right ear</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right ear"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left cheekbone</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left cheekbone"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right cheekbone</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right cheekbone"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Left jawbone</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Left jawbone"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Right jawbone</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Right jawbone"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Teeth</span>
                    <input className="checkbox" type="checkbox" name="painLocation" value="Teeth"/>
                  </label>
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