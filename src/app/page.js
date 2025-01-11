import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen fle justify-center items-center bg-gradient-to-r from-green-400 to-blue-500'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-4xl text-white font-bold mb-4'>
          Browse our blog collection
        </h2>
        <Link
          className='bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded'
          href='/blogs'
        >
          Explore Blogs
        </Link>
      </div>
    </div>
  )
}
