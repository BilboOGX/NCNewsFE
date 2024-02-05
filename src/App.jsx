import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '../Components/Navbar/navbar'
import ArticleList from '../Components/All Articles/AllArticles'
import { Header } from '../Components/Header/header'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <ArticleList/>
      
    </>
  )
}

export default App
