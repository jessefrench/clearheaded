import React from 'react'
import Main from './components/Main'

export default function Triggers(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="sticky text-center lg:text-left">
            <h1 className="text-5xl font-bold">Can you select every potential trigger coming to your mind?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-triggers" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No idea</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="No idea"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Stress</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Stress"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Lack of sleep</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Lack of sleep"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Woke up late</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Woke up late"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Interrupted sleep</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Interrupted sleep"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Depressed mood</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Depressed mood"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Anxiety</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Anxiety"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Skipped meal</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Skipped meal"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Very variable weather</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Very variable weather"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Storm</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Storm"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Humidity above 80%</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Humidity above 80%"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Neck pain</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Neck pain"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Alcohol</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Alcohol"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Bright sun</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Bright sun"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Caffeine</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Caffeine"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Dehydration</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Dehydration"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Processed food</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Processed food"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Allergy reaction</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Allergy reaction"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Odd / strong smell</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Odd / strong smell"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Rebound headache</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Rebound headache"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Aged cheese</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Aged cheese"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Chocolate</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Chocolate"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Skipped beta blockers</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Skipped beta blockers"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Skipped magnesium</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Skipped magnesium"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Late in taking preventative</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Late in taking preventative"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Missed daily preventative</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Missed daily preventative"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Loud noises</span>
                    <input className="checkbox" type="checkbox" name="attackTriggers" value="Loud noises"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add trigger*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="attackTriggers" id="userInput" disabled="disabled" placeholder="Trigger"/>
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