import React from 'react'
import Main from './components/Main'

export default function Index(){
  return (
    <Main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        	<img src={'/images/handy-meditating-cloud.gif'} height="500" width="500"/>
        	<div>
        		<h1 className="text-5xl font-bold">Welcome to clearheaded.</h1>
        		<p className="py-6">Record and track your headaches to better understand them and reduce your attacks.</p>
        		<a href="/login"><button className="i-btn btn btn-primary">Log in</button></a>
        		<a href="/signup"><button className="i-btn btn btn-primary">Sign up</button></a>
        	</div>
        </div>
      </div>
    </Main>
  )
}