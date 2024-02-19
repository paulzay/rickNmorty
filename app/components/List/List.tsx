import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Location, ResidentType } from '@/app/types';

interface ListProps {
  locations: Location[];
  query: string;
}

function List({ locations, query }: ListProps) {
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(locations);

  useEffect(() => {
    const filterLocations = () => {
      setFilteredLocations(
        locations.filter(location => {
          const nameMatches = location.name.toLowerCase().includes(query.toLowerCase());
          const characterMatches = location.residents.some(
            resident => resident.name.toLowerCase().includes(query.toLowerCase())
          );

          const episodeMatches = location.residents.some(
            resident => resident.episode.some(episode => episode.name.toLowerCase().includes(query.toLowerCase()))
          );

          return nameMatches || characterMatches || episodeMatches;
        })
      );
    };
    filterLocations();
  }, [locations, query]);

  return (
    <div className='grid grid-cols-1 p-5 bg-white'>
      {filteredLocations
        .map((location: any, idx: number) => (
          <Card key={location.name} name={location.name} residents={location.residents} type={location.type} />
        ))}
    </div>
  )
}

export default List