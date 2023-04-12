import React from 'react'
import Main from './components/Main'

export default function Home(props){
  return (
    <Main>

      {/* CONTAINER */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" lg:text-left">

            {/* GREETING */}
            <h1 className="text-5xl font-bold">
              {props.user.userName}, you've had {props.left} headache{props.left === 1 ? '' : 's'} so far.
            </h1>
            <p className="py-6">Record an attack or quickly add a headache to track.</p>
            <div className="flex w-full">
              <div className="h-20 flex-grow place-items-center">
                <a href="/attack"><button className="btn btn-primary">Record attack</button></a>
              </div>

              {/* RENDER GIF */}
              {props.headaches ?
                props.headaches.map((el, i) =>
                <div key={i} className="h-20">
                  {i === 0 && <img src="/images/handy-machine-learning.gif" height="100" width="100"/>}
                </div>
                ) : null
              }
            </div>

            {/* HEADACHE LIST */}
            <ul className="task-list">
              {props.headaches.map((el, i) => (
                <div className="container" key={i}>
                  <li className="headacheItem task-list-item draggable" draggable="true" data-id={el._id}>
                    <span className={`${el.completed === true ? 'completed' : 'not'}`}>{el.headache}</span>
                    {el.date !== "Invalid Date" && (
                      <span className="dateStyle">headache on {el.date}</span>
                    )}
                    <span
                      className={`fa-solid fa-circle-exclamation ${el.important === true ? 'important' : ''}`}
                      title="Mark important / unimportant">
                    </span>
                    <span className='del fa fa-trash delete-btn' title="Delete"></span>
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* INPUT FORM */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="/home/createHeadache" method='POST' className="add-task">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quick-add headache</span>
                  </label>
                  <input type="text" name='headacheItem' placeholder="headache type" className="task-input input input-bordered"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input type="date" name="headacheDate" className="input-date input input-bordered"/>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary btn-outline" value="Add"/>
                </div>
              </form>
              <form action="/summaries" method="GET">
                <div className="form-control mt-6">
                  <label className="label">
                    <span className="label-text">View previous records</span>
                  </label>
                  <input type="submit" className="btn btn-primary btn-outline" value="View"/>
                </div>
              </form>
              <div className="logout"><a href="/logout">Log out</a></div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}