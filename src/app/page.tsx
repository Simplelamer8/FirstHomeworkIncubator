import React from 'react';
import Card from "@/components/Card";
import Image from "next/image";
import { data } from './userData/data';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      {
        data.map((elem:any) => (
          <Card {...elem}/>
        ))
      }
    </main>
  );
}
