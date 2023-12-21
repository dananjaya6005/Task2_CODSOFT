import React from 'react'
import { useParams } from 'react-router-dom'

export default function GetTaskbyID() {
    const {id} = useParams();
    
  return (

    <div className='min-h-screen bg-emerald-700  '>
        <div>getTaskbyID{id}</div>
    </div>

    
  )
}
