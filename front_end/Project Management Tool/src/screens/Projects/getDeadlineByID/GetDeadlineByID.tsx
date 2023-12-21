import React from 'react'
import { useParams } from 'react-router'

export default function GetDeadlineByID() {
    const {id} = useParams();

  return (
    <>
    <div className='min-h-screen bg-red-600'>
        <div>Deadline by id : {id}</div>
    </div>
    </>
  )
}
