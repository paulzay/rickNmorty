import React from 'react'
import { ResidentType } from '@/app/types';
import Resident from '../Resident/Resident';

interface ResidentsProps {
  residents: ResidentType[];
}
function Residents({ residents }: ResidentsProps) {

  return (
    <div className='grid grid-cols-6 pt-5'>
      {residents.map((resident) => (
        <Resident name={resident.name} image={resident.image} status={resident.status} key={resident.id} id={resident.id} episode={resident.episode} />
      ))}
    </div>
  )
}

export default Residents