import React from 'react'
import Main from './components/Main'

export default function Summaries(props){

  let selectedSummary = props.selectedSummary || {}
  let summaryId = props.summaryId || {}

  return (
    <Main>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden text-3xl font-bold fixed top-0 left-0 z-50">&equiv;</label>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <ul id="summary-list" className="list-none">
                <li> <strong>Attack date:</strong> {selectedSummary[0].date} </li>
                <li> <strong>Attack time:</strong> {selectedSummary[0].startTime} - {selectedSummary[0].endTime} </li>
                <li> <strong>Attack type:</strong> {selectedSummary[0].type} </li>
                <li> <strong>Pain level:</strong> {selectedSummary[0].level} </li>
                <li> <strong>Attack location:</strong> {selectedSummary[0].attackLocation} </li>
                <li> <strong>Symptoms:</strong> {selectedSummary[0].symptoms} </li>
                <li> <strong>Triggers:</strong> {selectedSummary[0].triggers} </li>
                <li> <strong>Aura:</strong> {selectedSummary[0].aura} </li>
                <li> <strong>Medication:</strong> {selectedSummary[0].medication} </li>
                <li> <strong>Relief methods:</strong> {selectedSummary[0].relief} </li>
                <li> <strong>Activities affected:</strong> {selectedSummary[0].activities} </li>
                <li> <strong>Pain location:</strong> {selectedSummary[0].painLocation} </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul id="summary-dates" className="menu p-4 w-80 bg-base-100 text-base-content">
            <h1 className="text-5xl font-bold leading-loose">Summaries</h1>
            {selectedSummary.map((summary, index) => (
              <li key={index}>
                <a href={`/summaries/${summary.id}`} 
                  className='summary-link'
                  data-id={summaryId}>
                  {summary.date}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  )
}