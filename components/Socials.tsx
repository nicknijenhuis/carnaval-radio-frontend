import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const socialsData = [
  {
    iconImg: "/icons/facebook.png",
    iconName: "Facebook"
  },
  {
    iconImg: "/icons/instagram.png",
    iconName: "Facebook"
  },
  {
    iconImg: "/icons/twitter.png",
    iconName: "Facebook"
  },
  {
    iconImg: "/icons/youtube.png",
    iconName: "Facebook"
  },
]

const Socials = () => {
  return (
    <div className='pl-4'>
      <h2>Follow Us On</h2>
      <div className='flex space-x-5'>
        {socialsData.map((icon, i) => (
          <Link href="/" key={i}>
            <Image src={icon.iconImg} alt={icon.iconName} width={30} height={30} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Socials