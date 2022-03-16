import React from 'react';
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="intro w-full">
                <div className="container mx-auto">
                    <div className="intro__inner text-center mt-40">
                        <h1 className="text-6xl">Home</h1>
                        <a href="https://github.com/HellenWeb/react-laravel"><button className="mt-4 p-2 pl-5 mr-2 pr-5 bg-gray-500 text-gray-100 text-sm rounded-lg focus:border-4 border-gray-300">Repository</button></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
