// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Overview of the courses I teach in artificial intelligence (AI) and innovation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Overview of the invited talks, lectures, panels, and juries I did or will do.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-eth-ai-club-eth-zurich-students-amp-staff-association-on-ai",
      
        title: 'ETH AI Club — ETH Zurich students &amp; staff association on AI. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "by Thomas Bollenbach, Alessio Rimoldi, Sven Jonscher, Arnout Devos",
      section: "Posts",
      handler: () => {
        
          window.open("https://ethaiclub.medium.com/eth-ai-club-eth-zurich-students-staff-association-on-ai-24c17a262ec4?source=rss-6e746cfeee5b------2", "_blank");
        
      },
    },{id: "post-eth-epfl-sciencepreneurship-summer-school-2023",
      
        title: "ETH-EPFL Sciencepreneurship Summer School 2023",
      
      description: "thoughts on co-founding the first ETH-EPFL Sciencepreneurship Summer School",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sciencepreneurship/";
        
      },
    },{id: "post-delivering-the-first-eth-epfl-sciencepreneurship-summer-school",
      
        title: 'Delivering the first ETH-EPFL Sciencepreneurship Summer School <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Going 0️⃣➡️1️⃣ can be very hard but very rewarding: starting from an idea 🌱, partnering up with my long-time collaborator Julia Wagner 🤝, and last week successfully delivering the first ETH-EPFL Sciencepreneurship Summer School in Zurich, Switzerland, has been exactly such a…",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.linkedin.com/feed/update/urn:li:activity:7056221519621828608/", "_blank");
        
      },
    },{id: "post-epfl-guest-lecture-amp-58-investment-memo",
      
        title: "EPFL guest lecture&amp;#58; Investment Memo",
      
      description: "Invited guest lecture at EPFL on how VCs evaluate startups &amp; build investment memos that they base their decisions on.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/guest-lecture-memo/";
        
      },
    },{id: "post-epflinnovators-arnout-devos-epfl",
      
        title: 'EPFLinnovators: Arnout Devos - EPFL <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://actu.epfl.ch/news/epflinnovators-arnout-devos/", "_blank");
        
      },
    },{id: "post-machine-learning-skills-in-demand-epfl",
      
        title: 'Machine learning skills in demand - EPFL <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://actu.epfl.ch/news/machine-learning-skills-in-demand/", "_blank");
        
      },
    },{id: "post-",
      
        title: ' <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/comet-ml/iclr-reproducibility-interview-2-arnout-devos-sylvain-chatel-matthias-grossglauser-5812e2e0cd3b", "_blank");
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-afc-student-startup-forum-2017",
          title: 'AFC Student Startup Forum 2017',
          description: "Results of organizing the Student Startup Forum 2017.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/studentstartupforum2017/";
            },},{id: "projects-sciencepreneurship-summer-school-2023",
          title: 'Sciencepreneurship Summer School 2023',
          description: "Week-long program for entrepreneurial graduate students, experienced sciencepreneurs, and ecosystem players. I co-founded and co-led the first edition, which grew into the Sciencepreneurship Community.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sciencepreneurship2023/";
            },},{id: "projects-few-shot-learning-for-ml-adaptation",
          title: 'Few-shot Learning for ML Adaptation',
          description: "My PhD thesis on few-shot learning for more effective and efficient adaptation of machine learning models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fewshotlearningphd/";
            },},{id: "projects-eth-ai-center-academic-talk-series",
          title: 'ETH AI Center Academic Talk Series',
          description: "Talk series I co-led to connect ETH AI Center&#39;s 100+ faculty, 60+ fellows, and wider academic community.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aicats/";
            },},{id: "projects-large-scale-ai-engineering",
          title: 'Large-Scale AI Engineering',
          description: "Hands-on ETH Zurich course led by Imanol Schlag, which I helped initiate and co-lecture. Students train and optimize large models on 32 GH200 GPUs each on CSCS&#39;s Alps supercomputer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/largescaleaiengineering/";
            },},{id: "projects-science-for-ai-workshop-ais25",
          title: 'Science for AI Workshop @ AIS25',
          description: "Two-day workshop at the AI in Science Summit 2025 in Copenhagen, curated with Matthias Bethge for ELLIS and the ELIAS Alliance. Researchers, founders, investors, and the EU AI Office on AI for science and innovation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scienceforai2025/";
            },},{id: "projects-eth-ai-club",
          title: 'ETH AI Club',
          description: "ETH Zurich&#39;s students &amp; staff volunteer association on AI, which I co-founded in March 2026. 250+ members learning, building, and shipping AI together.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ethaiclub/";
            },},{id: "projects-open-llm-builders-summit",
          title: 'Open LLM Builders Summit',
          description: "International summit series I co-organize with the Swiss AI Initiative, uniting the teams behind Apertus, Ai2, GLM, Qwen, Nemotron, and K2. Three editions: Geneva, Lausanne, Zurich.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/openllmbuilderssummit/";
            },},{id: "projects-️-ai-scientist-automating-research",
          title: '⚛️ AI Scientist: Automating Research',
          description: "Large-scale AI systems that do research autonomously. We treat invention itself as an engineering problem.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aiscientist/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ArnoutDevos", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arnoutdevos", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=S_6zsEwAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ArnoutDevos", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
