import React from 'react'
import Image from 'next/image';
import { ResidentType } from '@/app/types';
import { useRouter } from 'next/navigation';

function Resident({ name, image, status, id }: ResidentType) {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center pb-5 cursor-pointer' onClick={() => router.push(`/character?id=${id}`)}>
      <Image src={image} alt={''} width={250} height={250} />
      <p>{name}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default Resident