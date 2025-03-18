
import { Head } from "@inertiajs/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useRef, useEffect } from "react";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function login(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-if-blue-800 to-umn-blue-800 text-if-white z-10">
        <Head title="Login Admin" />
        <LazyLoadImage className="w-56 bg-if-white px-4 py-2 rounded-lg" src={props.logo + "/Logo-WordmarkColored.png"}></LazyLoadImage>
        <h2 className="mt-12 mb-4 font-kanit text-4xl">Welcome, Admin!</h2>
        <form action="/login" method="POST" className="flex flex-col items-center justify-center text-if-black">
          <input type="hidden" name="_token" value={props.csrf} />
          <div className="mb-4">
            <input type="text" className="rounded-full" id="username" name="username" placeholder="Username"/>
          </div>
          <div className="mb-4">
              <input type="password" className="rounded-full" id="password" name="password" placeholder="Password"/>
          </div>
          <button type="submit" className="bg-if-blue-400 px-8 py-2 rounded-full">Login</button>
        </form>
      </div>
    </>
  )
}