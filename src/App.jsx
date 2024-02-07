import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '../Components/Navbar/navbar'
import ArticleList from '../Components/All Articles/AllArticles'
import { Header } from '../Components/Header/header'
import HomePage from '../Components/Home/home'
import SingleArticle from '../Components/Article ID/article'
import GetComments from '../Components/Comments/comments'
import Count from '../Components/VoteCount/vote'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/home'element={<HomePage/>}/>
        <Route path='/articles' element={<ArticleList/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:article_id/comments' element={<GetComments/>}/>
      </Routes>
     
      
    </>
  )
}

export default App
