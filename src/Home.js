import React from 'react'
import { useHistory } from 'react-router-dom'
import './All.css'

const Home = () => {
    const history = useHistory();
  return (
   <div className="wrap-2">
    <div className="container">
        <div className="row">
            <div>
                <p>new arraivals</p>
                <h2><span>best price</span> this year</h2>
                <p className="para">Limited offers very affordable price <br /> on walking and exercises</p>
                <button onClick={()=>history.push('/Product')} >Shop Now</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Home;