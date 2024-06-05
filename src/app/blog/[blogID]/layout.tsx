import React from 'react'
import { data } from '@/app/userData/data';
import Card from "@/components/Card";

export default function blogIDLayout({children}:any) {
  return (
    <div className='relative flex min-h-screen flex-col justify-between p-24'>
        {children}    
        {
        data.map((elem:any) => (
          <Card {...elem}/>
        ))
      }
    </div>
  )
}
