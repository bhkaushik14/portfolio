import { impactProjects } from '../data/projects'

export function ImpactSection(){
  return <section className="impact-section" id="impact">
    <div className="section-heading">
      <span className="eyebrow">Human-Centered Impact</span>
      <h2>Technical work is strongest<br/>when it stays close to people.</h2>
      <p>Across accessibility, language, teaching, community leadership, and public health, I’m interested in how thoughtful implementation can reduce friction in daily life.</p>
    </div>
    <div className="impact-grid">
      {impactProjects.map((project,index)=><article className="impact-card" key={project.id} style={{'--accent':project.accent} as React.CSSProperties}>
        <span className="impact-number">0{index+1}</span><span className="impact-type">{project.type}</span>
        <h3>{project.title}</h3><p>{project.summary}</p>
        <div className="impact-line"><i/><span>{project.learning}</span></div>
      </article>)}
    </div>
  </section>
}
