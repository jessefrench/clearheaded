import React from 'react'
import Main from './components/Main'

export default function Summaries(props){
  return (
    <Main>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden text-3xl font-bold fixed top-0 left-0 z-50">&equiv;</label>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              {props.summaryItems.map((items, id) => (
                <ul key={id} id="summaryList" className="list-none">
                  <li> <strong>Attack time:</strong> {items.date} {items.startTime}-{items.endTime} </li>
                  <li> <strong>Attack type:</strong> {items.type} </li>
                  <li> <strong>Pain level:</strong> {items.level} </li>
                  <li> <strong>Attack location:</strong> {items.attackLocation} </li>
                  <li> <strong>Symptoms:</strong> {items.symptoms} </li>
                  <li> <strong>Triggers:</strong> {items.triggers} </li>
                  <li> <strong>Aura:</strong> {items.aura} </li>
                  <li> <strong>Medication:</strong> {items.medication} </li>
                  <li> <strong>Relief methods:</strong> {items.relief} </li>
                  <li> <strong>Activities affected:</strong> {items.activities} </li>
                  <li> <strong>Pain location:</strong> {items.painLocation} </li>
                </ul>
              ))}
            </div>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <h1 className="text-5xl font-bold leading-loose">Summaries</h1>
            {props.summaryDates.map((records, i) => (
              <li key={i}><a className='summary-link' id={records.id} onClick={`handleClick()`}>{records.date}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  )
}