import Image from 'next/image'
import React from 'react'
import spinner from '@/assets/svgs/spinner.svg'

const Loading = () => {
  return (
    <div>
      <Image src={spinner} alt="spinner" width={32} height={32} />
      loading...
      
    </div>

  )
}

export default Loading