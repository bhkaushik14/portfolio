import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUp, Github } from 'lucide-react'
import { Scene } from './components/Scene'
import { ScrollExperience } from './components/ScrollExperience'
import { ImpactSection } from './components/ImpactSection'
import { ProjectIndex } from './components/ProjectIndex'

export default function App(){
  const progress=useRef(0); const [loaded,setLoaded]=useState(false)
  useEffect(()=>{const t=setTimeout(()=>setLoaded(true),700);return()=>clearTimeout(t)},[])
  return <main>
    <div className={`loader ${loaded?'loaded':''}`}><div className="loader-mark"><span>BK</span><i/>PORTFOLIO / 2026</div><div className="load-line"><i/></div><small>LOADING SELECTED WORK</small></div>
    <Scene progress={progress}/>
    <header className="topbar"><a className="brand" href="#top">PORTFOLIO <span>/ BK</span></a></header>
    <section className="hero" id="top">
      <div className="hero-grid"/>
      <div className="hero-kicker"><span>PORTFOLIO / 2026</span><span>UIUC × HACKMIT</span></div>
      <div className="hero-copy">
        <p className="eyebrow">ENGINEERING · MACHINE LEARNING · HUMAN-CENTERED SOFTWARE</p>
        <h1><span>Bhavya</span> Kaushik</h1>
        <p className="hero-line">Technical projects across machine learning, accessibility, education, hardware prototyping, and interactive software.</p>
        <p className="hero-sub">Incoming UIUC freshman focused on research-driven prototypes, practical software, and human-centered technical systems.</p>
        <div className="hero-actions"><a className="button primary" href="#featured">Explore Portfolio <ArrowDown/></a><a className="button secondary" href="https://github.com/bhkaushik14" target="_blank" rel="noreferrer"><Github/> GitHub</a></div>
      </div>
      <a className="scroll-cue" href="#featured"><span>EXPLORE SELECTED WORK</span><ArrowDown/></a>
    </section>
    <section className="manifesto" id="featured"><p>Selected work</p><h2>Ideas, tested<br/><span>through building.</span></h2><p className="manifesto-copy">My work moves across Python, Java, JavaScript, CSS, C#, and C++. It ranges from executable evaluation and API edge cases to physical prototypes and interactive gameplay.</p></section>
    <ScrollExperience progress={progress}/>
    <ImpactSection/>
    <ProjectIndex/>
    <footer><div className="footer-status">HACKMIT 2026</div><h2>Interested in building at the intersection of <span>machine learning, software, accessibility,</span> and physical prototyping.</h2><p>I’m excited to contribute technical range, structured problem solving, and a human-centered perspective to a fast, collaborative team.</p><a className="footer-email" href="mailto:bhkaushik14@gmail.com">Email: bhkaushik14@gmail.com</a><a className="back-top" href="#top">Back to top <ArrowUp/></a><small>BHAVYA KAUSHIK · TECHNICAL PORTFOLIO · 2026</small></footer>
  </main>
}
