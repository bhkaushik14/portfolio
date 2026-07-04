import type { Project } from '../data/projects'

export function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return <article className="project-panel" style={{'--accent': project.accent} as React.CSSProperties}>
    <div className="panel-beam" />
    <div className="project-primary">
      <div className="panel-header">
        <span className="project-number">{String(index + 1).padStart(2,'0')}</span>
        <span className="eyebrow">{project.type}</span>
      </div>
      <h2>{project.title}</h2>
      <p className="project-description">{project.summary}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
    <div className="breakdown">
      <div><span>Problem</span><p>{project.problem}</p></div>
      <div><span>Technical Contribution</span><p>{project.contribution}</p></div>
      <div><span>Key Challenge / Learning</span><p>{project.learning}</p></div>
    </div>
  </article>
}
