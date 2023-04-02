import React from 'react'
import Main from './components/Main'

export default function PainLevel(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">What is the highest pain level of this attack?</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-pain-level" method="POST">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">10 (hurts worst)</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="10"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">9</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="9"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">8 (severe)</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="8"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">7</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="7"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">6</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="6"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">5 (moderate)</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="5"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">4</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="4"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">3</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="3"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">2 (mild)</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="2"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">1</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="1"/>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">0 (no pain)</span>
                    <input className="checkbox" type="checkbox" name="painLevel" value="0"/>
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