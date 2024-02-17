import React from 'react'
import { ResidentType } from '@/app/types';
import Residents from '../Residents/Residents';

interface CardProps {
  name: string;
  residents: ResidentType[];
  type: string;
}

function Card({ name, type, residents }: CardProps) {

  return (
    <div className='bg-slate-50 text-black p-1 m-1 text-center mb-5 pt-5 pb-5'>
      <p>Location: {name}</p>
      <p>Type: {type}</p>
      <Residents residents={residents} />
    </div>
  )
}

export default Card