export type Project = {
  id: string
  type: string
  title: string
  summary: string
  problem: string
  contribution: string
  learning: string
  tags: string[]
  featured: boolean
  impact?: boolean
  visual: 'algebra'|'research'|'bridge'|'eye'|'piano'|'web'|'game'|'teaching'|'chess'|'fbla'|'health'
  accent: string
}

// EDIT HERE: all portfolio project copy and tags live in this single file.
export const projects: Project[] = [
  { id:'algebra', type:'Personal ML Project', title:'AI for Algebra', featured:true, visual:'algebra', accent:'#8cf6ff',
    summary:'Custom algebra practice generator using algebra datasets and LLM-based generation.',
    problem:'Generic worksheets rarely match a learner’s exact level, format, or concept gap.',
    contribution:'Standardized algebra datasets, shaped prompts, and built generation flows for targeted practice problems.',
    learning:'Useful AI output requires constraints, evaluation, and well-structured inputs, not just fluent generation.',
    tags:['Python','LLMs','Algebra','Prompt Engineering','Dataset Cleaning','Education'] },
  { id:'research', type:'Research Project', title:'LLM Accuracy in Translating Algebraic Word Problems into Code', featured:true, visual:'research', accent:'#9b8cff',
    summary:'Evaluated whether language models can translate algebra word problems into executable Python.',
    problem:'LLM outputs can look correct while failing logically or computationally.',
    contribution:'Compared prompting strategies, inspected generated Python, and evaluated whether the code actually solved the equation.',
    learning:'Model evaluation needs executable verification, consistent formatting, and careful failure analysis.',
    tags:['Python','LLM Evaluation','Research','Algebra','Code Generation','Prompting'] },
  { id:'assistive', type:'Current Project', title:'Assistive Eye-Tracking Communication Tool', featured:true, impact:true, visual:'eye', accent:'#69ffbd',
    summary:'Eye-detection communication tool for people who may lose speech ability.',
    problem:'People with conditions like ALS or dementia may lose speech but still need fast, personal communication.',
    contribution:'Concept combines recorded personal voice lines, generated phrase options, and eye movement selection.',
    learning:'Assistive technology must be designed around speed, dignity, accessibility, and low-friction interaction.',
    tags:['Computer Vision','Accessibility','AI','Eye Tracking','Voice','Human-Centered Design'] },
  { id:'clearlingua', type:'Translation App', title:'ClearLingua', featured:true, impact:true, visual:'bridge', accent:'#ffbf69',
    summary:'Bilingual translation app designed to reduce language barriers for older generations and families.',
    problem:'Family communication can break down when younger generations lose fluency in a shared language.',
    contribution:'Built a simple interface, integrated Google Translate API, and handled auto-detection failures and confusing library outputs.',
    learning:'Real users expose edge cases that clean demos do not; fallback logic and error handling matter.',
    tags:['JavaScript','API Integration','Translation','Frontend','Backend','Error Handling'] },
  { id:'piano', type:'Hardware / Music Prototype', title:'DIY Piano Hardware Build', featured:true, visual:'piano', accent:'#ff7eb6',
    summary:'Functional DIY piano built for a school project instead of a standard presentation.',
    problem:'The goal was to create a physical, working instrument rather than only explain the concept.',
    contribution:'Worked on CAD planning, frame construction, mechanical layout, and control logic for playing/tuning behavior.',
    learning:'Physical prototypes require software, mechanics, constraints, and iteration to work together.',
    tags:['CAD','Hardware','Control Logic','Mechanical Design','Music','Prototyping'] },
  { id:'stimulus', type:'Internship', title:'Stimulus Tech Internship', featured:true, visual:'web', accent:'#6aa9ff',
    summary:'Built client-facing web projects for a business/tech consulting startup.',
    problem:'The startup needed usable web interfaces for client interaction and company presentation.',
    contribution:'Built two websites, including a client-question chatbot and a responsive homepage.',
    learning:'Professional web work requires responsiveness, clarity, and designing for users beyond myself.',
    tags:['Web Development','JavaScript','CSS','Responsive Design','Chatbot UI','Client Work'] },
  { id:'catvsrat', type:'Game Project', title:'CatVsRat', featured:true, visual:'game', accent:'#ffd166',
    summary:'Single-player online game developed in Godot.',
    problem:'Create an interactive game experience with clear mechanics and creative systems.',
    contribution:'Designed and implemented game logic, interaction systems, and creative gameplay elements.',
    learning:'Games taught me how code, feedback, timing, and design decisions shape user experience.',
    tags:['Godot','Game Development','C#','Game Logic','Creative Coding'] },
  { id:'fbla', type:'Competition Project', title:'FBLA Coding and Programming', featured:true, visual:'fbla', accent:'#ff906a',
    summary:'Finance-tracking UI built for a mock student and presented to a panel.',
    problem:'Students need simple ways to understand and organize personal finances.',
    contribution:'Designed a practical finance-tracking interface and explained the solution in a competition setting.',
    learning:'Strong technical work also needs clear presentation and user-centered explanation.',
    tags:['UI Design','Programming','Finance Tracker','Presentation','Competition'] },
  { id:'tutoring', type:'Community / Teaching', title:'Tutoring', featured:false, impact:true, visual:'teaching', accent:'#b8ff6a',
    summary:'One-on-one tutoring in Python, Java, math, and physics.',
    problem:'Students often struggle because concepts are presented in only one way.',
    contribution:'Personalized lessons by asking students to explain their thought process and breaking problems into manageable steps.',
    learning:'Teaching improved my patience, communication, and ability to structure complex ideas.',
    tags:['Teaching','Python','Java','Math','Physics','Communication'] },
  { id:'chess', type:'Leadership / Data Organization', title:'Chess Club Data + Leadership', featured:false, impact:true, visual:'chess', accent:'#bc9cff',
    summary:'Helped organize hundreds of student survey responses into decisions for chess club growth.',
    problem:'The club had scattered ideas but needed structure for promotion, meeting times, activities, and competitions.',
    contribution:'Organized survey data and helped translate student feedback into practical club decisions.',
    learning:'My strength as a teammate is structure: turning loose ideas into an actionable plan.',
    tags:['Leadership','Data Organization','Survey Analysis','Chess','Teamwork'] },
  { id:'public-health', type:'Future Hackathon Direction', title:'HackMIT Public Health Prototype Idea', featured:false, impact:true, visual:'health', accent:'#49e6a5',
    summary:'Prototype idea connecting clinical advice to daily behavior through wearable data and nutrition tracking.',
    problem:'Patients may receive medication but struggle with the daily lifestyle follow-through that supports treatment.',
    contribution:'Concept combines wearable sensor data with photo-based nutrition tracking to generate feedback and habit support.',
    learning:'Framed as a behavior-support prototype, not medical diagnosis or treatment, with careful attention to responsible scope.',
    tags:['Public Health','Wearables','Nutrition Tracking','Computer Vision','Behavior Change','Prototype'] }
]

export const featuredProjects = projects.filter(project => project.featured)
export const impactProjects = projects.filter(project => project.impact)
