import React from "react"
import { connect } from "react-redux"

function Landing() {
  return (
    <section className="hero is-light is-fullheight" >
      <div className="hero-body">
        <div className="container has-text-centered">
        <div className="landing-con">  
            <h1>Welcome!</h1>
            <p>Need something fixed? Have the skills to fix something? Want to help someone in your community?</p>
            <br></br>
            <p>Swopsies is a free to use website for people looking to trade goods and services without the price tag!</p>
            <br></br>
            <h2>Register. Post. Trade.</h2>
            <p>It's that simple!</p>
          </div>
          <div className="row">
            <div className="col">
              <img className="image-shadow" src="https://images.pexels.com/photos/5255612/pexels-photo-5255612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="lady walking dog" />
            </div>
            <div className="col">  
              <img className="image-shadow" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="close up photo of bowl of yummy cherry tomatoes being exchanged between two pairs of hands" />
            </div>
            <div className="col">  
              <img className="image-shadow" src="https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="close up photo of man wearing hat that says 'Love your neighbour'" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default connect()(Landing)