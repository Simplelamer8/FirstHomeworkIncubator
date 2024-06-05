import React from 'react';
import { data } from '@/app/userData/data';

export default function blogID({params}:any) {
  return (
    <div className='flex min-h-[50%] flex-col justify-between p-24 absolute z-1 bg-red-600 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      blog: {params.blogID}
      <h1>{data[params.blogID - 1].title}</h1>
      <p>{data[params.blogID - 1].description}</p>
      <p className='text-right'>{data[params.blogID - 1].author}</p>
      <p className='text-right'>{data[params.blogID - 1].date}</p>
    </div>
  )
}
/*
Application idea:
JournalAI
It is an application where user inputs its daily experience and AI helps to learn new things from the experience and provides advice 
1) psychological suppport
2) Ideas to improve productivity
3) Optimize certain daily routines
4) Helps new users to properly journal and get profit

Problem:
It is hard to determine how to exactly journal in order to benefit from the practice 
It takes time and sometimes it is hard to determine the relationship between the knowledge that you have and how to apply it in your life. 


Looking for ideas:
Look for the top applications on Play Market/Appstore in each fields of human life
*/