'use client'


import {useEffect} from "react";
import {testConnection} from "@/utils/connectionFirebase";

export default function Home() {

  useEffect(()=> {
    testConnection().then(r => console.log(r));
  }, [])

  return (
      <h1>Vasco</h1>
  );
}
