import React, { Component } from 'react'

import githublogoPicture from './images/githublogo.png'
import daftpunkcatPicture from './images/daftpunkcat.gif'
import nyantocatPicture from './images/nyantocat.gif'
import strongbadtocatPicture from './images/strongbadtocat.png'
import linktocatPicture from './images/linktocat.jpg'
import murakamicatPicture from './images/murakamicat.png'
import eclipsecatPicture from './images/eclipsecat.jpg'
import Octocat from './components/Octocat'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main>
        <nav class="navBar">
          <section class="navLeft">
            <div class="logo">
              <a href="">
                <img
                  id="githubLogo"
                  alt="GitHub Logo"
                  src={githublogoPicture}
                />
              </a>
            </div>
            <div class="octodexButton">
              <a href="https://octodex.github.com/">Octodex</a>
            </div>
            <div class="homeButton">
              <a href="https://octodex.github.com/">Home</a>
            </div>
            <div class="faqButton">
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </div>
          </section>
          <section class="navRight">
            <div class="twitterButton">
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </div>
            <div class="githubButton">
              <a href="https://www.github.com">Back to Github.com</a>
            </div>
          </section>
        </nav>

        <ul class="octoList">
          <Octocat
            image={daftpunkcatPicture}
            name="#101: "
            tagdescription="Daftpunktocat-Guy"
          />
          <Octocat
            image={nyantocatPicture}
            name="#47: "
            tagdescription="Nyantocat"
          />
          <Octocat
            image={strongbadtocatPicture}
            name="#70: "
            tagdescription="Strongbadtocat"
          />
          <Octocat
            image={linktocatPicture}
            name="#60: "
            tagdescription="Linktocat"
          />
          <Octocat
            image={murakamicatPicture}
            name="#83: "
            tagdescription="Murakamicat"
          />
          <Octocat
            image={eclipsecatPicture}
            name="#30: "
            tagdescription="Total Eclipse of the Octocat"
          />
        </ul>
        <br></br>
        <hr />
        <br></br>
        <Footer bottomtext="© 2013 – 2019 GitHub, Inc. All rights reserved." />
        <br></br>
      </main>
    </>
  )
}

export default App
