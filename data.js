/* =========================================================
   EDIT EVERYTHING HERE. No other file needs to change.
   Dates: "YYYY-MM"  |  Ongoing: end: "present"  |  No image: image: ""
   ========================================================= */
const SITE = {
  profile: {
    name: "Nuttachai Keeratithon",
    shortName: "fewergvg",
    eyebrow: "Portfolio · 2026",
    role: "FCMS Student · fewergvg",
    bio: "Nuttachai Keeratithon is an incoming Computer & Mathematical Sciences student at The Hong Kong Polytechnic University and a multi-award-winning robotics engineer, innovator, and AI researcher. Specializing in embedded systems, computer vision, and biomedical AI, he has earned top international and national honors across robotics, innovation, and research platforms.",
    photo: "id.jpg",     // leave "" to show initials instead
    location: "Kowloon, Hong Kong",
    badges: ["Open to internships", "Available for collaboration"],
    contactNote: "Reach out for internships, team projects, or speaking invitations.",
    links: [
      { label: "Email",    url: "fewergvg.keeratithon@connect.polyu.hk" },
      { label: "GitHub",   url: "https://github.com/fewergvg" },
      { label: "LinkedIn", url: "https://linkedin.com/in/fewergvg" },
      { label: "Résumé",   url: "assets/resume.pdf" }
    ]
  },

  // "auto:<category>" counts matching items automatically.
  stats: [
    { value: "auto:competition", label: "Competitions" },
    { value: "auto:project",     label: "Projects" },
    { value: 8,                  label: "Awards Won" },
    { value: 4,                  label: "Years Leading" }
  ],

  // Category keys → display names. Add your own freely.
  categories: {
    competition: "Competitions",
    project:     "Projects",
    leadership:  "Leadership",
    certificate: "Certificates",
    experience:  "Experience"
  },

  skills: [
  { name: "Embedded C / C++", level: 70 },
  { name: "Python & Data", level: 85 },
  { name: "CAD / Fusion 360", level: 90 },
  { name: "Team Leadership", level: 88 },
  { name: "ROS 2 & Autonomous Navigation", level: 80 },
  { name: "Computer Vision / YOLO", level: 82 },
  { name: "3D Modeling & Printing", level: 95 },
  { name: "UI/UX & App Dev (Swift/SwiftUI)", level: 72 },
  { name: "PCB Design & Electronics", level: 70 },
  { name: "3D Game Dev (Blender & C#)", level: 55 }
  ],
  /* ---------- ITEMS: copy one block, change the values ---------- */
  items: [
    {
      id: "2022 MakeX Robotics Competition",
      category: "competition",
      title: "2022 MakeX Robotics Competition International Invitation Tournament Thailand",
      org: "Thailand Robotics Association",
      role: "Team Captain & Engineer",
      date: "2022-11",
      end: null,
      location: "Bangkok",
      award: "World-Champion - MakeX Challenger (Senior)",
      featured: true,
      image: "MX.png",
      summary: "Led team 'HelloWorld' to victory as World Champions competing against international teams from 8 countries.",
      description: [
        "I completed in the MakeX Robotics Competition: International Invitation Tournament (World Championship), organized by Imagineering MakeX Thailand in cooperation with the Faculty of Engineering, KMITL. As part of team 'HelloWorld,' we emerged as champions, competing against teams from eight countries, including Thailand, China-Taiwan, Mexico, the Philippines, UAE, Egypt, and India.",
        "I contributed to the mechanics and programming, and through rigorous practice and problem-solving, our team discovered a time-saving trick during the match, which ultimately secured our victory.",
        "This experience underscored the importance of teamwork, innovation, and persistence."
      ],
      tags: ["Shooting System", "ROBOT Control", "Team Leadership", "CAD", "Robotics"],
      links: [
        { label: "Result Announcement", url: "https://example.com" },
        { label: "Technical Report",    url: "https://example.com" }
      ]
    },
    {
    "id": "genius-olympiad-2024",
    "category": "competition",
    "title": "GENIUS Olympiad 2024",
    "org": "Terra Science and Education / RIT",
    "role": "Project Lead",
    "date": "2024-06",
    "end": null,
    "location": "New York, USA",
    "award": "Silver Medal (Science Project)",
    "featured": true,
    "image": "GO.png",
    "summary": "Awarded Silver Medal in the Science Project category at the international GENIUS Olympiad held at Rochester Institute of Technology.",
    "description": [
      "Presented research project at the international GENIUS Olympiad high school competition hosted by Rochester Institute of Technology (RIT).",
      "Earned Silver Medal recognition in the Science Project category among global participants."
    ],
    "tags": ["Science", "Research", "Innovation", "International Competition"],
    "links": []
  },
  {
    "id": "nasa-space-apps",
    "category": "competition",
    "title": "NASA International Space Apps Challenge",
    "org": "NASA",
    "role": "Developer / Hardware Engineer",
    "date": "2023-10",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Galactic Problem Solver Award",
    "featured": true,
    "image": "NS.png",
    "summary": "Received the Galactic Problem Solver Award for developing innovative solution addressing complex space challenges.",
    "description": [
      "Participated in the NASA International Space Apps Challenge hackathon solving real-world global and space problems.",
      "Awarded the Galactic Problem Solver Award for exemplary solution design and technical execution."
    ],
    "tags": ["Hackathon", "Space Tech", "Problem Solving", "Prototyping"],
    "links": []
  },
  {
    "id": "kibo-rpc-2022",
    "category": "competition",
    "title": "3rd Kibo Robot Programming Challenge",
    "org": "JAXA / GISTDA",
    "role": "Programmer",
    "date": "2022-07",
    "end": null,
    "location": "Online",
    "award": "Top 20 Finalist (Thailand)",
    "featured": false,
    "image": "KB.png",
    "summary": "Programmed Astrobee autonomous robots inside the International Space Station (ISS) simulator, reaching Top 20 in Thailand.",
    "description": [
      "Designed and optimized autonomous navigation algorithms for JAXA's Astrobee robots operating in space environments.",
      "Achieved Top 20 Finalist placement in the national preliminary round."
    ],
    "tags": ["ROS", "Python", "Space Robotics", "Algorithm"],
    "links": []
  },
  {
    "id": "school-satellite-2023",
    "category": "project",
    "title": "School Satellite Competition 2023",
    "org": "GISTDA",
    "role": "Systems Engineer",
    "date": "2023-08",
    "end": null,
    "location": "Chonburi, Thailand",
    "award": "Participant",
    "featured": false,
    "image": "SS.png",
    "summary": "Designed and built a CanSat / Mini-Satellite prototype for atmospheric data collection and payload recovery.",
    "description": [
      "Participated in the national School Satellite competition organized by Geo-Informatics and Space Technology Development Agency (GISTDA).",
      "Engineered onboard electronics, sensor integration, and telecommunication systems for payload deployment."
    ],
    "tags": ["Aerospace", "CanSat", "Sensors", "Telemetry", "Embedded Systems"],
    "links": []
  },
  {
    "id": "inewgen-2024",
    "category": "project",
    "title": "I-New-Gen Award 2024",
    "org": "National Research Council of Thailand (NRCT)",
    "role": "Hardware Innovator",
    "date": "2024-02",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "National Finalist / Showcase",
    "featured": false,
    "image": "ING.png",
    "summary": "Showcased technology innovation at Thailand Inventor's Day organized by NRCT.",
    "description": [
      "Developed and submitted prototype technology for the Thailand Youth Innovation Award (I-New-Gen Award 2024).",
      "Exhibited project capabilities to technical panels and the general public during Thailand Inventors' Day."
    ],
    "tags": ["Innovation", "Prototyping", "Hardware", "NRCT"],
    "links": []
  },
  {
    "id": "actec-leadership",
    "category": "leadership",
    "title": "ACT Technology Club (ACTEC)",
    "org": "Assumption College Thonburi",
    "role": "Co-Founder & Head of Electronics & Mechanics",
    "date": "2023-05",
    "end": "2024-03",
    "location": "Bangkok, Thailand",
    "award": "Co-Founder Leadership",
    "featured": true,
    "image": "AT.png",
    "summary": "Co-founded school tech club, managed mechanical/electronic divisions, and mentored junior members in robotics.",
    "description": [
      "Co-founded the ACT Technology Club (ACTEC) to foster student engagement in robotics, embedded systems, and maker projects.",
      "Led the Electronics and Mechanics department, designing hands-on curriculum and preparing teams for national competitions."
    ],
    "tags": ["Leadership", "Mentorship", "Electronics", "Mechanics", "Club Management"],
    "links": []
  },
  {
    "id": "thailand-ros-2024",
    "category": "certificate",
    "title": "Thailand Open ROS 2024 Workshop",
    "org": "Thai Robotics Society / Co-Organizers",
    "role": "Attendee",
    "date": "2024-12",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Completion",
    "featured": false,
    "image": "RW.png",
    "summary": "Completed intensive technical training on ROS 2 middleware for advanced autonomous robotics application.",
    "description": [
      "Attended full-course technical workshop covering ROS 2 nodes, publisher-subscriber architectures, TF2 transforms, and Nav2 navigation stacks."
    ],
    "tags": ["ROS 2", "Robotics Software", "Linux", "Navigation"],
    "links": []
  },
  {
    "id": "ai-builders-2023",
    "category": "certificate",
    "title": "AI Builders 2023 Program",
    "org": "AI Builders Thailand",
    "role": "Student Developer",
    "date": "2023-04",
    "end": "2023-07",
    "location": "Online",
    "award": "Certificate of Completion",
    "featured": false,
    "image": "AB.png",
    "summary": "Completed hands-on mentorship program in Machine Learning and Computer Vision models.",
    "description": [
      "Learned foundational machine learning methodologies, data pipeline design, and deep learning model training.",
      "Developed practical AI projects under guidance from industry mentors."
    ],
    "tags": ["Machine Learning", "Python", "Computer Vision", "AI"],
    "links": []
  },
  {
    "id": "samsung-sft-2024",
    "category": "certificate",
    "title": "Samsung Solve for Tomorrow 2024 Workshop",
    "org": "Samsung Thailand",
    "role": "Participant",
    "date": "2024-08",
    "end": null,
    "location": "Online",
    "award": "Certificate of Participation",
    "featured": false,
    "image": "sft.png",
    "summary": "Completed Design Thinking and STEM Innovation training under Samsung Solve for Tomorrow.",
    "description": [
      "Participated in workshops focused on applying STEM technology to solve community and social challenges."
    ],
    "tags": ["Design Thinking", "STEM", "Social Innovation"],
    "links": []
  },
  {
    "id": "young-ios-dev-2023",
    "category": "experience",
    "title": "Young iOS Developer Camp 2023",
    "org": "Tech Community / Educational Partners",
    "role": "Camp Attendee",
    "date": "2023-10",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Completed",
    "featured": false,
    "image": "IC.png",
    "summary": "Gained experience in iOS app development using Swift and SwiftUI frameworks.",
    "description": [
      "Participated in hands-on application design training using Swift, SwiftUI, and Xcode development environment."
    ],
    "tags": ["Swift", "SwiftUI", "iOS", "Mobile App"],
    "links": []
  },
  {
    "id": "steam4innovators-nia",
    "category": "competition",
    "title": "STEAM 4 Innovators Learning Field",
    "org": "National Innovation Agency (NIA)",
    "role": "Project Presenter",
    "date": "2024",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Bronze Medal (รางวัลเหรียญทองแดง)",
    "featured": false,
    "image": "S4.png",
    "summary": "Awarded Bronze Medal for presenting innovative project under the STEAM 4 Innovators program.",
    "description": [
      "Participated in the STEAM 4 Innovators project showcase organized by National Innovation Agency (NIA).",
      "Secured Bronze Medal award after presenting pitch and functional prototype to evaluation panels."
    ],
    "tags": ["STEAM", "NIA", "Innovation", "Bronze Medal"],
    "links": []
  },
  {
    "id": "thailand-innovation-award-2024",
    "category": "competition",
    "title": "Thailand Innovation Award 2024 (TIA)",
    "org": "National Innovation Agency (NIA)",
    "role": "Innovator",
    "date": "2024",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Finalist",
    "featured": true,
    "image": "TIA.png",
    "summary": "Selected as a Finalist in the prestigious Thailand Innovation Award 2024 organized by NIA.",
    "description": [
      "Advanced to the final round of Thailand Innovation Award 2024 (TIA).",
      "Presented technological prototype and pitch deck to expert national innovation committees."
    ],
    "tags": ["TIA2024", "NIA", "Finalist", "Innovation"],
    "links": []
  },
  {
    "id": "dru-project-competition",
    "category": "competition",
    "title": "Dhonburi Rajabhat University Project Competition",
    "org": "Dhonburi Rajabhat University (DRU)",
    "role": "Project Lead",
    "date": "2024",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Honorable Mention - Gold Level (รางวัลชมเชย ผลงานระดับทอง)",
    "featured": false,
    "image": "DRU.png",
    "summary": "Achieved Gold-Level Honorable Mention award in university project contest.",
    "description": [
      "Submitted technical project to the research and project competition held by Dhonburi Rajabhat University.",
      "Evaluated at Gold Level quality and granted Honorable Mention recognition."
    ],
    "tags": ["DRU", "Project Competition", "Gold Level"],
    "links": []
  },
  {
    "id": "teenovator-nia",
    "category": "competition",
    "title": "Teenovator Competition",
    "org": "National Innovation Agency (NIA)",
    "role": "Innovator",
    "date": "2024",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Gold Medal (เหรียญทอง)",
    "featured": true,
    "image": "TN.png",
    "summary": "Won the Gold Medal award in the Teenovator innovation competition organized by NIA.",
    "description": [
      "Developed and presented youth innovation project focused on technological solutions for real-world impact.",
      "Awarded Gold Medal recognition by the National Innovation Agency (NIA)."
    ],
    "tags": ["Teenovator", "NIA", "Innovation", "Gold Medal"],
    "links": []
  },
  {
    "id": "aihc-2024-poster",
    "category": "project",
    "title": "AI in Health Conference 2024 (AIHC)",
    "org": "The Ken Kennedy Institute, Rice University",
    "role": "Poster Presenter / Researcher",
    "date": "2024-09",
    "end": null,
    "location": "Houston, Texas, USA",
    "award": "Selected Poster Presentation",
    "featured": true,
    "image": "AIHC.png",
    "summary": "Selected to present research poster at the AI in Health Conference 2024 hosted by Rice University in Houston.",
    "description": [
      "Selected to showcase research poster at the 2024 AI in Health Conference (AIHC) organized by The Ken Kennedy Institute at Rice University.",
      "Traveled to Houston, Texas, to present biomedical AI research to international academics, clinicians, and researchers."
    ],
    "tags": ["AI in Health", "Rice University", "Houston", "Poster Presentation", "Healthcare AI"],
    "links": []
  },
  {
    "id": "ku-ic-conference-2024",
    "category": "project",
    "title": "6th Kasetsart University Sriracha Campus International Conference (KU-IC)",
    "org": "Kasetsart University Sriracha Campus",
    "role": "Author & Poster Presenter",
    "date": "2024-08",
    "end": null,
    "location": "Chonburi, Thailand",
    "award": "Published Paper & Selected Poster Presentation",
    "featured": true,
    "image": "KU.png",
    "summary": "Selected for poster presentation and published research paper in international conference proceedings.",
    "description": [
      "Submitted peer-reviewed research paper to The 6th Kasetsart University Sriracha Campus International Conference (KU-IC).",
      "Selected to present poster onsite and successfully published research work in official conference proceedings."
    ],
    "tags": ["KU-IC", "Research Paper", "Published", "Poster Presentation", "Academic Conference"],
    "links": []
  },
  {
    "id": "arduino-education-day-2023",
    "category": "certificate",
    "title": "Arduino Education Day Thailand 2023",
    "org": "Arduino Education Thailand",
    "role": "Attendee",
    "date": "2023",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Attendance",
    "featured": false,
    "image": "AD.png",
    "summary": "Attended official Arduino Education Day workshop on modern embedded technologies and microcontrollers.",
    "description": [
      "Participated in hands-on technical sessions covering latest Arduino hardware boards, IoT systems, and educational tools."
    ],
    "tags": ["Arduino", "Embedded Systems", "Microcontrollers", "Certificate"],
    "links": []
  },
  {
    "id": "mut-rmrc-robocup-2022",
    "category": "certificate",
    "title": "MUT RMRC RoboCup Thailand 2022",
    "org": "Mahanakorn University of Technology",
    "role": "Robotics Competitor",
    "date": "2022",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Participation",
    "featured": false,
    "image": "RBC.png",
    "summary": "Participated in rescue robotics challenge hosted by Mahanakorn University of Technology.",
    "description": [
      "Designed and operated rescue robot hardware to navigate terrain obstacles and complete task challenges under MUT RoboCup criteria."
    ],
    "tags": ["Rescue Robot", "MUT", "RoboCup", "Certificate"],
    "links": []
  },
  {
    "id": "tpa-robot-contest",
    "category": "certificate",
    "title": "TPA Robot Contest Thailand",
    "org": "Technology Promotion Association (Thailand-Japan)",
    "role": "Robotics Competitor",
    "date": "2023",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Participation",
    "featured": false,
    "image": "TPA.png",
    "summary": "Competed in official TPA Robot competition organized by Technology Promotion Association (Thailand-Japan).",
    "description": [
      "Engineered custom mobile robot mechanisms and control loops according to annual TPA competition rules."
    ],
    "tags": ["TPA Robot", "Thailand-Japan", "Robotics", "Certificate"],
    "links": []
  },
  {
    "id": "wro-thailand",
    "category": "certificate",
    "title": "World Robot Olympiad (WRO) Thailand",
    "org": "Gammaco (Thailand) Co., Ltd.",
    "role": "Competitor",
    "date": "2023",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Participation",
    "featured": false,
    "image": "WRO.png",
    "summary": "Participated in World Robot Olympiad Thailand organized by Gammaco.",
    "description": [
      "Built and programmed autonomous robotic systems to perform specialized mission tasks under WRO game specifications."
    ],
    "tags": ["WRO", "Gammaco", "Autonomous Robotics", "Certificate"],
    "links": []
  },
  {
    "id": "ac-space-camp-2023",
    "category": "experience",
    "title": "AC Space Camp 2023",
    "org": "Assumption College",
    "role": "Camp Participant",
    "date": "2023",
    "end": null,
    "location": "Thailand",
    "award": "Completed Program",
    "featured": false,
    "image": "AC.png",
    "summary": "Participated in immersive space technology and aerospace engineering program.",
    "description": [
      "Engaged in hands-on aerospace workshops, rocketry fundamentals, and satellite mission simulation activities."
    ],
    "tags": ["Space Tech", "Aerospace", "Space Camp", "STEM"],
    "links": []
  },
  {
    "id": "nectec-nstda-smc-ptt-experience",
    "category": "experience",
    "title": "NECTEC, NSTDA & SMC-PTT Industrial Collaboration Program",
    "org": "NECTEC / NSTDA / SMC-PTT",
    "role": "Student Trainee / Visitor",
    "date": "2024",
    "end": null,
    "location": "Pathum Thani / Rayong, Thailand",
    "award": "Experience",
    "featured": false,
    "image": "NN.png",
    "summary": "Gained experience with national research labs and smart manufacturing centers under NECTEC, NSTDA, and SMC-PTT.",
    "description": [
      "Explored industrial automation, IoT sensor networks, and advanced research facilities under NECTEC NSTDA and Sustainable Manufacturing Center (SMC-PTT)."
    ],
    "tags": ["NECTEC", "NSTDA", "SMC", "PTT", "Industry 4.0", "Automation"],
    "links": []
  },
  {
    "id": "act-robot-club-leadership",
    "category": "leadership",
    "title": "ACT Robot Club / ACT Technology Club (ACTEC)",
    "org": "Assumption College Thonburi",
    "role": "Club Leader & Head of Electronics & Mechanics",
    "date": "2022-05",
    "end": "2024-03",
    "location": "Bangkok, Thailand",
    "award": "Club Leadership",
    "featured": true,
    "image": "ARC.png",
    "summary": "Led the school robotics and technology club, managing engineering operations, workshops, and competition prep.",
    "description": [
      "Served as Club Leader for the ACT Robot Club / ACTEC, overseeing club development, student recruitment, and technical projects.",
      "Managed the mechanical, electrical, and hardware systems design for various school robotics teams competing in national and international events.",
      "Mentored junior members in microcontroller programming, sensor integration, CAD modeling, and rapid prototyping."
    ],
    "tags": ["Leadership", "Robotics", "Club Management", "Electronics", "Mechanics", "Mentorship"],
    "links": []
  },
  {
    "id": "larngear-23",
    "category": "experience",
    "title": "Larngear Camp 23 (ค่ายลานเกียร์ครั้งที่ 23)",
    "org": "Faculty of Engineering, Chulalongkorn University",
    "role": "Camp Participant",
    "date": "2024-07",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Completed Program",
    "featured": false,
    "image": "LG.png",
    "summary": "Participated in the 23rd Larngear Camp exploring various engineering disciplines and hands-on technology workshops.",
    "description": [
      "Selected to join Larngear Camp 23 organized by the Faculty of Engineering, Chulalongkorn University.",
      "Engaged in hands-on engineering workshops, interactive problem-solving challenges, and specialized track exploration."
    ],
    "tags": ["Chulalongkorn University", "Engineering", "Larngear", "Camp", "STEM"],
    "links": []
  },
  {
    "id": "mahidol-bigdata-workshop-2023",
    "category": "certificate",
    "title": "Mahidol BigData and Computer Programming Workshop",
    "org": "Faculty of Science & Centre of Excellence in Mathematics, Mahidol University",
    "role": "Workshop Participant",
    "date": "2023-03",
    "end": "2023-10",
    "location": "Nakhon Pathom, Thailand",
    "award": "Certificate of Completion",
    "featured": false,
    "image": "MW.png",
    "summary": "Completed hands-on data analytics and programming workshop taught by Mahidol University faculty.",
    "description": [
      "Attended BigData and Computer Programming workshops organized by Mahidol University's Faculty of Science and Centre of Excellence in Mathematics.",
      "Gained practical data analysis skills using Python, R, and Excel, covering graph plotting, predictive analysis, basic statistics, and linear regression."
    ],
    "tags": ["BigData", "Python", "R", "Data Analysis", "Linear Regression", "Mahidol University"],
    "links": []
  },
  {
    "id": "rsu-rookie-game-dev-2-blender",
    "category": "certificate",
    "title": "RSU Rookie Game Dev #2 - Introduction to 3D Modeling in Blender",
    "org": "Rangsit University (มหาวิทยาลัยรังสิต)",
    "role": "Trainee",
    "date": "2023",
    "end": null,
    "location": "Pathum Thani, Thailand",
    "award": "Certificate of Completion",
    "featured": false,
    "image": "RSU.png",
    "summary": "Completed training in 3D modeling fundamentals using Blender under the RSU Rookie Game Dev Season 2 project.",
    "description": [
      "Participated in the game development training program organized by the College of Digital Innovation Technology, Rangsit University.",
      "Learned foundational 3D modeling techniques and asset creation using Blender."
    ],
    "tags": ["Blender", "3D Modeling", "Game Development", "Rangsit University"],
    "links": []
  },
  {
    "id": "rsu-rookie-game-dev-2-csharp",
    "category": "certificate",
    "title": "RSU Rookie Game Dev #2 - Introduction to C# Programming",
    "org": "Rangsit University (มหาวิทยาลัยรังสิต)",
    "role": "Trainee",
    "date": "2023",
    "end": null,
    "location": "Pathum Thani, Thailand",
    "award": "Certificate of Completion",
    "featured": false,
    "image": "RSU.png",
    "summary": "Completed training in C# programming fundamentals for game development under the RSU Rookie Game Dev Season 2 project.",
    "description": [
      "Participated in the game development training program organized by the College of Digital Innovation Technology, Rangsit University.",
      "Gained core skills in C# programming concepts applied to game logic and mechanics."
    ],
    "tags": ["C#", "Programming", "Game Development", "Rangsit University"],
    "links": []
  },
  {
    "id": "shopee-code-league-2022",
    "category": "certificate",
    "title": "Shopee Code League 2022",
    "org": "Shopee / SeaMoney (Sea Group)",
    "role": "Competitor",
    "date": "2022-03",
    "end": null,
    "location": "Online",
    "award": "Certificate of Participation",
    "featured": false,
    "image": "assets/work/shopee-code-league.png",
    "summary": "Participated in the regional competitive programming competition organized by Shopee and Sea Group.",
    "description": [
      "Participated in Shopee Code League 2022 held from 14 March to 26 March 2022.",
      "Tackled algorithmic and data science challenges under real-time competitive programming environments."
    ],
    "tags": ["Shopee", "Competitive Programming", "Algorithms", "Data Science", "Certificate"],
    "links": []
  },
  {
    "id": "siriraj-hackathon-2023",
    "category": "certificate",
    "title": "Siriraj Hackathon 2023",
    "org": "Faculty of Medicine Siriraj Hospital, Mahidol University",
    "role": "Competitor / Proposal Developer",
    "date": "2023",
    "end": null,
    "location": "Bangkok, Thailand",
    "award": "Certificate of Appreciation",
    "featured": false,
    "image": "SH.png",
    "summary": "Participated in the proposal submission round of Siriraj Hackathon 2023 focusing on healthcare innovation.",
    "description": [
      "Participated in the Siriraj Hackathon 2023 proposal submission round under the theme 'Leveraging Healthcare Innovation to Build a Better Well-Being Society'.",
      "Developed healthcare innovation concepts presented to Faculty of Medicine Siriraj Hospital, Mahidol University."
    ],
    "tags": ["Siriraj Hackathon", "Healthcare Innovation", "Mahidol University", "Certificate"],
    "links": []
  }
    
    
  ]
};
