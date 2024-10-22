import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { siteConfig } from '@/constant/config';

const Home = () => {
  const { push: navigate } = useRouter();

  const navigateTo = (screen) => {
    navigate(`/${screen}`);
  };

  return (
    <>
    <Head>
        <title>Home - {siteConfig.title}</title>
        <meta name="description" content="Home trilis app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container bg-yellow-50 h-screen flex flex-col justify-center items-center">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="image mb-5"
          width="80px"
        />
        <h1 className="text-xl mb-10 font-bold">TRIPAN | LISTUNGIN</h1>

        <div className="flex flex-col">
          <div className="m-auto">
          <button
            className="bg-yellow-500 py-3 px-6 rounded-full mb-3"
            onClick={() => navigateTo('board-game')}
          >
            <span className="text-white text-lg font-semibold">Papan Tulis</span>
          </button>
          </div>

          <div className="m-auto">
          <button
            className="bg-yellow-500 py-3 px-6 rounded-full mb-3"
            onClick={() => navigateTo('arithmetic')}
            >
            <span className="text-white text-lg font-semibold">Berhitung</span>
          </button>
            </div>

          <div className="m-auto">
          <button
            className="bg-yellow-500 py-3 px-6 rounded-full mb-3"
            onClick={() => navigateTo('educative-game')}
            >
            <span className="text-white text-lg font-semibold">Edukatif Game</span>
          </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
