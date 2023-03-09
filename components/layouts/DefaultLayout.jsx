import React from 'react'
import Header from '../meta/Header'
import Footer from '../molecules/Footer'
import TopBar from '../molecules/TopBar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <TopBar />
      <main className='wrapper'>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
