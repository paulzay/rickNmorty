"use client"

import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';
import { LOAD_CHARACTER } from "@/app/api/GraphQl/Queries";
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

function Character() {
  const searchParams = useSearchParams();
  const [note, setNote] = useState('');
  const [addNote, setAddNote] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const { data, loading } = useQuery(LOAD_CHARACTER, {
    variables: { id: searchParams.get('id') }
  });

  useEffect(() => {
    setDisabled(note.length === 0)
  }, [note]);

  useEffect(() => {
    const n = localStorage.getItem(searchParams.get('id') as string);
    if (n !== null) {
      setNote(n)
    }
  }, [searchParams]);

  function handleSave() {
    localStorage.setItem(searchParams.get('id') as string, note);
    setNote('');
    window.location.reload()
  }

  return (
    <div className='bg-white text-black h-screen'>
      {loading ? <p>Loading...</p> :
        <div className='flex flex-col items-center p-5'>
          <div>
            <p className='text-center p-2'>{data.character.name}</p>
            <Image src={data?.character.image} alt="l" width={500} height={500} className='mt-2 mb-2' />
            {
              !addNote && <button className='bg-orange-400 p-4 rounded-sm' onClick={() => setAddNote(true)} >Add Note</button>
            }
          </div>
          {
            addNote && <div className='flex flex-col'>
              <textarea placeholder='Enter note' value={note} onChange={(e) => setNote(e.target.value)}
                className='text-black border-black border border-solid border-2 p-2' />
              <button className='bg-orange-500 p-4 rounded-sm mt-2' onClick={handleSave} disabled={disabled}>Save Note</button>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default function CharacterPage() {
  return (
    <Suspense>
      <Character />
    </Suspense>)
}