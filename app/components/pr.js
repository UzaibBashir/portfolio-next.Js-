import React from 'react'
import photo from "../img/bg.png";
import Image from 'next/image';

const pr = () => {
  return (
    <div>
      <Image src={photo} alt="logo" width={400} height={400}/>
    </div>
  )
}

export default pr
