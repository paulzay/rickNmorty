import React from 'react'
import Card from '../Card/Card'
import { Location } from '@/app/types';
function List({ locations }: Location[]) {

  return (
    <div className='grid grid-cols-1 p-5 bg-white'>
      {locations.map((location: any) => (
        <Card key={location.id} name={location.name} residents={location.residents} type={location.type} />
      ))}
    </div>
  )
}

export default List