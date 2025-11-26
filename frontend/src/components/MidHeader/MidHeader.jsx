import React, { useState } from 'react'
import './MidHeader.css'

const MidHeader = () => {

    const [menu,setMenu] = useState(" ");

  return (
    <div className='explore-services' id='explore-services'>
    <h1>Offered services</h1>
    <p className='explore-services-text'>Go through our services to check what you want us to offer you or to see what you are in need of.</p>
    <div className="explore-services-list">
              <ul className="explore-services2">
                <a href='#service-display' onClick={()=>setMenu("Software Development")} className={menu==="Software Development"?"active":""}>Software Development</a> <br />
                <a href='#networks-display' onClick={()=>setMenu("Networks Solutions")} className={menu==="Networks Solutions"?"active":""}>Networks Solutions</a> <br />
                <a href='#cloud-display' onClick={()=>setMenu("Cloud Solutions")} className={menu==="Cloud Solutions"?"active":""}>Cloud Solutions</a> <br />
                <a href='#system-display' onClick={()=>setMenu("System Implementation")} className={menu==="System Implementation"?"active":""}>System Implementation</a> <br />
                <a href='#alarm-display' onClick={()=>setMenu("Alarm Solutions")} className={menu==="Alarm Solutions"?"active":""}>Alarm Solutions</a>
              </ul>
    </div>
      <hr />
    </div>
  )
}

export default MidHeader
