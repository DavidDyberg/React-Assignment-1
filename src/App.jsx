import { useState } from 'react'
import David from './assets/IMG_1640-mindre.jpg'
import moon from './assets/Moon idea of personal project.png'
import spacecolors from './assets/space-colors.jpg'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')
  
  return (
    <>
    <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`}>
      <h1>About me</h1>
      <img className='Image-1' src={David} alt="" />
      <p>Hello! My name is David Dyberg. I am 21 years old and live in Stockholm. I am currently studying as a Frontend/App-developer at Changemaker Educations AB located in Stockholm. So far I have learned the bacics of HTML, CSS, Javascript and jQuery. This is something that I have found very interesting and I want to deep even further into theese programming languages and learn even more! </p>
    </article>

    <article className={`active ${getActiveClassName(activeArticle, 'Seacond Article')}`}>
    <h1>My first personal project</h1>
    <p>For my first personal project I am going to recreate a design. I have chosen to recreate something related to space, as I find images of space mesmerising, and the name of the project is “Into Space”. The image that I have chosen depicts the moon and can be seen below. I chose this idea because I think that space is really interesting and that the beautiful images of space are worthy of recreation.</p>
    <img src={moon} alt="" />
  </article>

  <article className={`active ${getActiveClassName(activeArticle, 'Third Article')}`}>
    <h1>Design style</h1>
    <p>I want to apply style and colors that represents space. I want to use a combination between dark and bright colors to implent the right feeling that you are in space.</p>
    <img className='Image-3' src={spacecolors} alt="" />
  </article>

  <div className='buttons'>
    <button onClick={() => {
      setActiveArticle('First Article')
      }}>First article</button>

    <button onClick={() => {
      setActiveArticle('Seacond Article')
      }}>Seacond article</button>
  
    <button onClick={() => {
      setActiveArticle('Third Article')
      }}>Third article</button>
    </div>
  
  </>
  )
}
export default App
