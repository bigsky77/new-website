import Head from 'next/head';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import FloatingEmojis from './FloatingEmojis';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .bg-dark-cyan {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
      <div className="h-screen bg-dark-cyan relative">
        <div className="absolute inset-0 flex justify-center">
          <div className="absolute md:top-64 top-64">
            <h1 className="text-center font-neue text-6xl md:text-9xl text-magentaVibrant">BigSky</h1>
            <br></br>
            <br></br>
            <h1 className="text-center font-neue text-6xl md:text-9xl text-magentaVibrant">🤖</h1>
            <div className="font-italics pt-8 text-2xl md:text-6xl text-goldVibrant">
               Attention is all you need
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
