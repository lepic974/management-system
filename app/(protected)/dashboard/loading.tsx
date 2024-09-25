import Image from 'next/image'
import React from 'react'
import spinner from '@/assets/svgs/spinner.svg'

const Loading = () => {
  return (
		<div className="flex flex-row w-full h-full justify-center items-center">
			<Image src={spinner} alt="spinner" width={48} height={48} />
			<span className='text-2xl font-semibold'>Chargement en cours...</span>
		</div>
	)
}

export default Loading