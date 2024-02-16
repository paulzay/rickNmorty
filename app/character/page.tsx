"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LOAD_CHARACTER } from "@/app/api/GraphQl/Queries";
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';

function Character() {
  const searchParams = useSearchParams();
  const [note, setNote] = useState('');

  const { data, loading } = useQuery(LOAD_CHARACTER, {
    variables: { id: searchParams.get('id') }
  });

  useEffect(() => {
  }, [data]);

  return (
    <div className='bg-'>
      {loading ? <p>Loading...</p> :
        <div className=''>
          <p>{data.character.name}</p>
          <Image src={data?.character.image} alt="l" width={300} height={300} />
          <textarea placeholder='Enter note' value={note} onChange={(e) => setNote(e.target.value)}
            className='text-black' />
          <button className=''>Save Note</button>
        </div>
      }
    </div>
  )
}

export default Character