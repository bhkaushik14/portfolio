import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featuredProjects } from '../data/projects'
import { ProjectPanel } from './ProjectPanel'
import { ProjectVisual } from './StationVisual'

export function ScrollExperience({ progress }: {progress: React.MutableRefObject<number>}) {
  const [active,setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if (!root.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx=gsap.context(()=>{
      gsap.utils.toArray<HTMLElement>('.project-section').forEach((section)=>{
        gsap.fromTo(section.querySelector('.project-panel'),{y:70,opacity:.15},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:section,start:'top 72%',end:'top 34%',scrub:1}})
        gsap.fromTo(section.querySelector('.station-visual'),{scale:.78,rotationY:18,opacity:.25},{scale:1,rotationY:0,opacity:1,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 80%',end:'top 30%',scrub:1.2}})
      })
    },root)
    return()=>ctx.revert()
  },[])
  useEffect(()=>{
    const onScroll=()=>{
      const max=document.documentElement.scrollHeight-innerHeight
      progress.current=max?scrollY/max:0
      const sections=[...(root.current?.querySelectorAll<HTMLElement>('.project-section')||[])]
      let nearest=0, dist=Infinity
      sections.forEach((s,i)=>{const d=Math.abs(s.getBoundingClientRect().top-innerHeight*.35);if(d<dist){dist=d;nearest=i}})
      setActive(nearest)
    }
    onScroll();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)
  },[progress])
  return <>
    <nav className="station-nav" aria-label="Featured project navigation">
      {featuredProjects.map((p,i)=><a href={`#${p.id}`} className={active===i?'active':''} key={p.id} aria-label={p.title}><i/><span>{p.title}</span></a>)}
    </nav>
    <div ref={root} className="projects">
      {featuredProjects.map((p,i)=><section className="project-section" id={p.id} key={p.id}>
        <div className="project-visual-wrap"><ProjectVisual project={p}/></div>
        <ProjectPanel project={p} index={i}/>
      </section>)}
    </div>
  </>
}
