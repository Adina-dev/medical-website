import React from 'react'
import '../Css/Appointment.css'

const Appoiment = () => {
  return (

    <div className='body'>


     <div className="card">
  <div className="card-body">
    <h1 className="card-title">Appointment Form</h1>
  </div>
  <div className="links">
            <ul>
             <li>
                <a href="#"> Home</a>
             </li>
             <li className='arrow'>
               
             </li>
             <li>
              Form
             </li>
                
            </ul>
        </div>
</div>
<div className="form-section">


<div className="main">
    
<div className="form">
        <div className="form-title">
        <h1>Make An Appointment</h1>
        {/* <div className="hr"></div> */}
       
        <p>
        Efficiently myocardinate market-driven innovation via open-source alignments. Dramatically engage porescently.
        </p>
        </div>

  


    <div className="input-group mb-3">
  <select className="form-select" id="inputGroupSelect01">
    <input type="Search" />
    <option selected>Select Department* </option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div className="input-group mb-3">
  <select className="form-select" id="inputGroupSelect02">
    <option selected>Choose Doctor by Name*</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<input className='patient' type="text" placeholder='Patient Name*' />
<div className="small-input">
    <input type="num" placeholder='Phone*' />
    <input type="Mail" placeholder='E-mail*' />
    <input type="date" placeholder='Appointment Date*' />
    <input type="time"   placeholder='Time*'/>
    <div className="input-group1" >
  <textarea className="form-control" aria-label="With textarea" placeholder='Type Appointment Note'></textarea>
</div>  
<div className="btn1">
  <button>Make An Appointment</button>
</div>
</div>


    </div>
    <div className="pic">
    <img src="Figure2.png" alt="" />
    </div>
    
</div>


</div>

    </div>
  )
}

export default Appoiment
