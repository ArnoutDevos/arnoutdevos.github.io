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
        },{id: "post-eth-epfl-sciencepreneurship-summer-school-2023",
      
        title: "ETH-EPFL Sciencepreneurship Summer School 2023",
      
      description: "thoughts on co-founding the first ETH-EPFL Sciencepreneurship Summer School",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sciencepreneurship/";
        
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
    },{id: "post-iclr-reproducibility-interview-2-arnout-devos-sylvain-chatel-matthias-grossglauser-by-dhruv-nair-comet-medium",
      
        title: 'ICLR Reproducibility Interview #2: Arnout Devos, Sylvain Chatel, Matthias Grossglauser | by Dhruv... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "The second interview of our series was with Arnout Devos, Sylvain Chatel, and Matthias Grossglauser. Arnout, and Sylvain, are PhD students at the Swiss Federal Institute of Technology in Lausanne…",
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
          section: "News",},{id: "projects-eth-ai-center-academic-talk-series",
          title: 'ETH AI Center Academic Talk Series',
          description: "AICATS is a talk series I led to foster meaningful connections and knowledge exchange between ETH AI Center&#39;s 100+ Faculty, 10+ Postdoctoral Fellows, 50+ Doctoral Fellows, and wider academic community.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aicats/";
            },},{id: "projects-few-shot-learning-for-ml-adaptation",
          title: 'Few-shot Learning for ML Adaptation',
          description: "My PhD thesis is about investigating and developing few-shot learning solutions for more effective and more efficient machine learning model adaptation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fewshotlearningphd/";
            },},{id: "projects-sciencepreneurship-summer-school",
          title: 'Sciencepreneurship Summer School',
          description: "An intensive week-long program that brings together entrepreneurial graduate students, experienced sciencepreneurs, and ecosystem players. I co-founded and led the organization of the first edition, which has now grown into the bigger Sciencepreneurship Community.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sciencepreneurship2023/";
            },},{id: "projects-afc-student-startup-forum-2017",
          title: 'AFC Student Startup Forum 2017',
          description: "An overview on the results of organizing the Student Startup Forum 2017",
          section: "Projects",handler: () => {
              window.location.href = "/projects/studentstartupforum2017/";
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
