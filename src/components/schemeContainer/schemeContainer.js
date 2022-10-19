import React, { useEffect } from 'react'
import './schemeContainer.css'

export default function SchemeContainer({ title, info, image, brief }) {
   return (
      <div className="card">
         <img src={image} alt="Avatar" style={{ width: "80%", borderRadius: ' 8px', marginTop: '20px' }} />
         <div className="container">
            <h4><span className='discrib' >Scheme Name-</span> <b className='title'>{title}</b></h4>
            <p className='brief'><span className='discrib'>By-</span>{brief}</p>
            <p className='info'>{info}</p>
         </div>
      </div>
   );
}
