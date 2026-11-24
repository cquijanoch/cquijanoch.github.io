const SITE_DATA = {
  highlightAuthor: "Carlos Quijano-Chavez",

  timeline: [
    {
      period: "2023 – Present",
      role: "Ph.D. Student in Computer Science",
      org: "University of Stuttgart (VISUS)",
      location: "Stuttgart, Germany",
      category: "education",
      summary:
        "Researching Situated and Immersive Analytics in AR/VR under the supervision of Prof. Dieter Schmalstieg and Prof. Michael Sedlmair."
    },
    {
      period: "Oct 2022 – Apr 2023",
      role: "Application Developer",
      org: "IBM",
      location: "Porto Alegre, Brazil",
      category: "industry",
      summary:
        "Backend engineering and solutions architecture for high-concurrency enterprise data platforms (.NET, C#, Azure, Java, SQL Server)."
    },
    {
      period: "Sep 2020 – Oct 2022",
      role: "Software Developer",
      org: "Neogrid",
      location: "Porto Alegre, Brazil",
      category: "industry",
      summary:
        "Developed backend services and data platform components supporting high-concurrency supply-chain analytics (.NET, C#, Azure, Java)."
    },
    {
      period: "2021",
      role: "M.Sc. in Computer Science",
      org: "Federal University of Rio Grande do Sul (UFRGS)",
      location: "Porto Alegre, Brazil",
      category: "education",
      summary:
        "Focused on 3D data exploration and Immersive Analytics in virtual environments, supervised by Prof. Carla M. D. S. Freitas and Prof. Luciana Nedel."
    },
    {
      period: "Nov 2018 – Feb 2020",
      role: "Software Developer",
      org: "UFRGS – Petrobras",
      location: "Porto Alegre, Brazil",
      category: "industry",
      summary:
        "Built analytical interfaces, database migrations, and simulation integrations for the Itagen system (C++, Qt, CMake, SQLite)."
    },
    {
      period: "2016 – 2018",
      role: "Software & Web Developer",
      org: "WMPERU · UNSA · Global System · Meta Innova",
      location: "Arequipa, Peru",
      category: "industry",
      summary:
        "Full-stack and enterprise systems development across public-sector, tax, and web applications (Java/JEE, Angular, Spring/EJB, SQL)."
    },
    {
      period: "2016",
      role: "B.Sc. in Computer Science",
      org: "National University of San Agustín (UNSA)",
      location: "Arequipa, Peru",
      category: "education",
      summary: "Graduated in Computer Science."
    }
  ],

  publications: [
    {
      id: "rehab-watch-2026",
      year: 2026,
      type: "poster", // "paper" | "workshop" | "poster"
      typeLabel: "Poster",
      title: "User-Centric and World-Centric Augmented Reality Visualization to Guide Wrist Rehabilitation Exercises",
      authors: "Fairouz Grioui, Deep Gawande Gawande, Carlos Quijano-Chavez and Tanja Blascheck",
      venue: " ACM Symposium on Spatial User Interaction (ACM SUI), 2026",
      description:
        "Compares two AR visualizations against a smartwatch for guiding wrist rehabilitation exercises, finding that AR—especially the heads-up display—was more usable, helpful, and enjoyable.",
      media: "image/paper/rehab-watch-2026.gif", // Replace with your GIF or MP4 path
      tags: ["Rehabilitation", "ROM exercises", "Smartwatch", "AR"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1145/3822518.3839313" },   
        { label: "Teaser", url: "" }  
      ]
    },
    {
      id: "beyond-audio-2026",
      year: 2026,
      type: "poster", // "paper" | "workshop" | "poster"
      typeLabel: "Poster",
      title: "Beyond Audio: Visual Cues to Complement Football Commentary for Fans with Visual Impairments",
      authors: "Phillip Koch, Markus Wieland, Carlos Quijano-Chavez, and Michael Sedlmair",
      venue: "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (IEEE VRW), 2026",
      description:
        "Explores complementary visual cues in virtual and augmented reality to enhance live football commentary for spectators with visual impairments.",
      media: "image/paper/beyond_audio.gif", // Replace with your GIF or MP4 path
      tags: ["Visual Impairment", "Visual Cues", "VR / AR", "Sport Events"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/VRW70859.2026.00303" },   
        { label: "Teaser", url: "https://www.youtube.com/watch?v=HDC_4QlwWjw" }  
      ]
    },
    {
      id: "situated-brushlink-2026",
      year: 2026,
      type: "paper",
      typeLabel: "Journal / Conf. Paper",
      title: "Situated Brushing and Linking in Virtual and Augmented Reality",
      authors: "Carlos Quijano-Chavez, Benjamin Lee, Nina Doerr, Wolfgang Büschel, Michael Sedlmair, and Dieter Schmalstieg",
      venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG / IEEE VR), 2026",
      description:
        "Investigates situated brushing and linking techniques and visual highlighting strategies that connect abstract data visualizations with physical or virtual referents in VR and AR.",
      media: "image/paper/situated_brushlink.gif", // Replace with your GIF or MP4 path
      tags: ["Brushing & Linking", "Situated Visualization", "Visual Highlighting"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/TVCG.2026.3680714" },
        { label: "Presentation", url: "https://www.youtube.com/watch?v=jv8a4tl3gng" }
      ]
    },
    {
      id: "mrlingo-2025",
      year: 2025,
      type: "poster",
      typeLabel: "Poster",
      title: "MRLingo: A Mixed Reality Approach for Situated Vocabulary Learning",
      authors: "Ziad Elshereif, Busra Balaban, Shehabeldin Solyman, Michael Sedlmair, and Carlos Quijano-Chavez",
      venue: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), 2025",
      description:
        "A mixed reality application combining object recognition and text-to-speech to support situated vocabulary acquisition directly in a learner's everyday environment.",
      media: "image/paper/mrlingo.gif", // Replace with your GIF or MP4 path
      tags: ["Mixed Reality", "Vocabulary Learning", "Object Recognition", "User Study"],
      links: [
        { label: "Paper", url: "" },
        { label: "Teaser", url: "" }
      ]
    },
    {
      id: "brushlink-wsr-2024",
      year: 2024,
      type: "workshop",
      typeLabel: "Workshop Paper",
      title: "Brushing and Linking for Situated Analytics",
      authors: "Carlos Quijano-Chavez, Nina Doerr, Benjamin Lee, Dieter Schmalstieg, and Michael Sedlmair",
      venue: "1st Workshop on Seamless Reality (WSR'24), IEEE VRW 2024",
      description:
        "Introduces a hybrid user interface concept for brushing and linking between personal 2D displays and situated 3D environments in augmented reality.",
      media: "image/paper/brushlink.png", // Swap to .gif whenever ready
      tags: ["Brushing & Linking", "Hybrid UI", "Situated Analytics"],
      links: [
        { label: "Paper", url: "files/VRW2024.pdf" },
        { label: "Teaser", url: "https://youtu.be/db_HHNzppqg" }
      ]
    },
    {
      id: "situated-dashboards-2023",
      year: 2023,
      type: "workshop",
      typeLabel: "Workshop Paper",
      title: "Designing Situated Dashboards: Challenges and Opportunities",
      authors: "Anika Sayara, Benjamin Lee, Carlos Quijano-Chavez, and Michael Sedlmair",
      venue: "2nd International Workshop on Immersive and Situated Analytics (ISA'23), IEEE ISMAR-Adjunct 2023",
      description:
        "Examines design challenges and opportunities for bringing multi-view dashboards into physical environments through augmented reality.",
      media: "image/paper/situateddashboard.png", // Swap to .gif whenever ready
      tags: ["Dashboards", "Situated Visualization", "Augmented Reality"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/ISMAR-Adjunct60411.2023.00028" }
      ]
    },
    {
      id: "trendvis-2023",
      year: 2023,
      type: "paper",
      typeLabel: "Conference Paper",
      title: "Comparing Scatterplot Variants for Temporal Trends Visualization in Immersive Virtual Environments",
      authors: "Carlos Quijano-Chavez, Luciana Nedel, and Carla M. D. S. Freitas",
      venue: "IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), 2023",
      description:
        "Evaluates 3D scatterplot variants for exploring temporal trends in immersive virtual environments, comparing user accuracy, completion time, and interaction behavior.",
      media: "image/paper/trendVis.png", // Swap to .gif whenever ready
      tags: ["Trends Visualization", "3D Scatterplots", "Virtual Reality", "Evaluation"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/VR55154.2023.00082" },
        { label: "GitHub", url: "https://github.com/cquijanoch/VRTrendVis" },
        { label: "Demo Video", url: "https://youtu.be/1uY5zL9Bxck" },
        { label: "Teaser", url: "https://www.youtube.com/watch?v=3_HVfM5-Eto" }
      ]
    },
    {
      id: "immultipleview-2021",
      year: 2021,
      type: "paper",
      typeLabel: "Conference Paper",
      title: "An Immersive Approach based on Two Levels of Interaction for Exploring Multiple Coordinated 3D Views",
      authors: "Carlos Quijano-Chavez, Luciana Nedel, and Carla M. D. S. Freitas",
      venue: "IFIP Conference on Human-Computer Interaction (INTERACT), Springer, 2021",
      description:
        "Presents a two-level interaction paradigm for navigating and coordinating multiple 3D data views in virtual reality.",
      media: "image/paper/immutipleview.png", // Swap to .gif whenever ready
      tags: ["Multiple Coordinated Views", "Virtual Reality", "Immersive Analytics"],
      links: [
        { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-030-85613-7_33" },
        { label: "Poster", url: "https://sol.sbc.org.br/index.php/svr_estendido/article/view/17654" },
        { label: "GitHub", url: "https://github.com/cquijanoch/IMMultipleView" },
        { label: "Demo Video", url: "https://vimeo.com/groups/cgufrgs/videos/594327379" }
      ]
    }
  ]
};
