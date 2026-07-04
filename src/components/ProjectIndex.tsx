import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

export function ProjectIndex(){
  return <section className="index-section" id="index">
    <div className="index-heading"><span className="eyebrow">Project Index</span><h2>All work</h2><p>Research / Software / Hardware / Design</p></div>
    <div className="index-grid">{projects.map((project,index)=><a href={`#${project.featured?project.id:'impact'}`} className="index-row" key={project.id}>
      <span className="index-number">{String(index+1).padStart(2,'0')}</span><div><h3>{project.title}</h3><p>{project.type}</p></div><div className="index-tags">{project.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div><ArrowUpRight/>
    </a>)}</div>
  </section>
}
