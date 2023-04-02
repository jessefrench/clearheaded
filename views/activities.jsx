import React from 'react'
import Main from './components/Main'

export default function Activities(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">How did it affect your activities?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-activities" method="POST" onSubmit="disableEmptyInputs()">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Not affected</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Not affected"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Missed work</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Missed work"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Slower at work</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Slower at work"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Missed school</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Missed school"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Slower at school</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Slower at school"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Missed social activity</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Missed social activity"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Missed family time</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Missed family time"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Could not fall asleep</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Could not fall asleep"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Woke up during sleep</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Woke up during sleep"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No screen / phone</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="No screen / phone"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Hard to concentrate</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Hard to concentrate"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Others</span>
                    <input className="checkbox" type="checkbox" name="activitiesAffected" value="Others"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">*Add affected activity*</span>
                    <input className="checkbox" type="checkbox" id="checker"/>
                  </label>
                  <input className="input input-bordered" type="text" name="activitiesAffected" id="userInput" disabled="disabled" placeholder="Activity"/>
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