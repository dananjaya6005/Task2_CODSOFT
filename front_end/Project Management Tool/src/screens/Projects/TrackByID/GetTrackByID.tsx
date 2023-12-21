import React from 'react'
import { useParams } from 'react-router'

export default function GetTrackByID() {

    const {id} = useParams();

  return (
    <>
    <div className='h-screen bg-blue-300' >
    <div>GetTrackByID : {id}</div>
    </div>
    </>
    
  )
}
