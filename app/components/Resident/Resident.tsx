import React from 'react'
import Image from 'next/image';
import { ResidentType } from '@/app/types';
import { useRouter } from 'next/navigation';

function Resident({ name, image, status, id }: ResidentType) {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center pb-5 cursor-pointer' onClick={() => router.push(`/${name}/id${id}`)}>
      <Image src={image} alt={''} width={100} height={100} />
      <p>{name}</p>
      <p>{status}</p>
    </div>
  )
}

export default Resident