import React from 'react'
import Main from './components/Main'

export default function Summary(props){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="sticky text-center lg:text-left">
            <h1 className="text-5xl font-bold">Summary</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/attack/create-summary" method="POST">
                <h3 className="text-3xl font-bold">Attack Time</h3>
                <ul className="list-disc list-inside">
                  <li>
                    {props.date}: {props.start} - {props.end}
                  </li>
                </ul>
                <h3 className="text-3xl font-bold">Attack Type(s)</h3>
                <ul className="list-disc list-inside">
                  {props.type.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Pain Level</h3>
                <ul className="list-disc list-inside">
                  <li>
                    {props.level}
                  </li>
                </ul>
                <h3 className="text-3xl font-bold">Attack Location</h3>
                <ul className="list-disc list-inside">
                  <li>
                    {props.attackLoc}
                  </li>
                </ul>
                <h3 className="text-3xl font-bold">Symptoms</h3>
                <ul className="list-disc list-inside">
                  {props.symptoms.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Triggers</h3>
                <ul className="list-disc list-inside">
                  {props.triggers.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Aura</h3>
                <ul className="list-disc list-inside">
                  {props.aura.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Medication</h3>
                <ul className="list-disc list-inside">
                  {props.medication.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Relief Methods</h3>
                <ul className="list-disc list-inside">
                  {props.relief.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Activities Affected</h3>
                <ul className="list-disc list-inside">
                  {props.activities.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-3xl font-bold">Pain Location</h3>
                <ul className="list-disc list-inside">
                  {props.painLoc.map((el, i) => (
                    <li key={i}>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
                <div className="form-control mt-6">
                  <input type="submit" value="Home" className="btn btn-primary"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}