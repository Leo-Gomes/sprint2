import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
    return (
        <>
            <div className='h-screen flex flex-col'>
                <Header/>
                <main className='h-full bg-[#f9f8fe]'>
                    <Outlet />
                </main>
                <Footer/>

            </div>
        </>
    )
}
