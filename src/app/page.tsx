'use client'


import {useEffect} from "react";
import {testConnection} from "@/utils/connectionFirebase";
import {createTestDoc} from "@/utils/createTestdoc";

export default function Home() {

  useEffect(()=> {
    testConnection().then(r => console.log(r));
  }, [])

  useEffect(()=> {
    createTestDoc();;
  }, [])


 
  return (
      <h1>Vasco</h1>
  );
}
