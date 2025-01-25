import React from 'react'

function HeadingDescription({title, description}) {
  return (
    <div>
      <h2 className='font-bold text-3xl text-lightsand-700'>{title}</h2>
      <p className='text-lg text-lightsand-600 mt-2 font-bold'>{description}</p>
    </div>
  )
}

export default HeadingDescription
