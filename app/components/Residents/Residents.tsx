import React from 'react'
import { ResidentsType } from '@/app/types';
import Resident from '../Resident/Resident';

function Residents({ residents }: ResidentsType) {

  return (
    <div className='grid grid-cols-6 pt-5'>
      {residents.map((resident, idx) => (
        <Resident name={resident.name} image={resident.image} status={resident.status} key={resident.id} />
      ))}
    </div>
  )
}

export default Residents