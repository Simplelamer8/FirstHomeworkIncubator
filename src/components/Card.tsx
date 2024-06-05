import React from 'react'

export default function Card({id, date, author, title, description}:any) {
  return (
    <a key={id} href={`/blog/${id}`} className='mb-16'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className='text-right'>{author}</p>
        <p className='text-right'>{date}</p>
    </a>
  )
}
