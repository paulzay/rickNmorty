import React, { useEffect } from 'react'
import Card from '../Card/Card'
import { Location, ResidentType } from '@/app/types';

interface ListProps {
  locations: Location[];
  query: string;
}

function List({ locations, query }: ListProps) {

  useEffect(() => {
  }, [query])

  return (
    <div className='grid grid-cols-1 p-5 bg-white'>
      {locations.filter((location: Location) => {
        if (query === '') {
          return location;
        } {
          return location;
        }
      }).map((location: any, idx: number) => (
        <Card key={location.name} name={location.name} residents={location.residents} type={location.type} />
      ))}
    </div>
  )
}

export default List