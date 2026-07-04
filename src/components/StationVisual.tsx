import type { Project } from '../data/projects'

const phrases: Record<Project['visual'], string[]> = {
  algebra:['x² + 4x = 12','level: intermediate','generate(5)'], research:['DATASET','PROMPT','MODEL','PYTHON','CHECK ✓'],
  bridge:['नमस्ते','→','Hello','fallback: manual'], eye:['I need help','Water please','Call my family','I am okay'],
  piano:['C','D','E','F','G','A','B'], web:['DESKTOP','TABLET','MOBILE','How can we help?'], game:['CAT','·','·','RAT'],
  teaching:['PYTHON','ƒ(x)','STEP 01','EXPLAIN → APPLY'], chess:['♞','SURVEY DATA','MEETING TIME','ACTION PLAN'],
  fbla:['INCOME +$','BUDGET 72%','GOAL ↑'], health:['WEARABLE','MEAL INPUT','DAILY LOOP','prototype only']
}

export function ProjectVisual({ project }: { project: Project }) {
  return <div className={`station-visual visual-${project.visual}`} style={{'--accent': project.accent} as React.CSSProperties} aria-hidden="true">
    <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
    <div className="visual-core"><div className="core-inner"/></div>
    <div className="visual-content">
      {phrases[project.visual].map((p,i)=><span key={p+i} style={{'--i':i} as React.CSSProperties}>{p}</span>)}
    </div>
    <div className="wave">{[1,2,3,4,5,6,7,8,9,10,11,12].map(n=><i key={n} style={{'--i':n} as React.CSSProperties}/>)}</div>
  </div>
}
