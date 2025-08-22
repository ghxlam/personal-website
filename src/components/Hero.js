import myPic from "../assets/mainImage.jpg";
import skyitPic from "../assets/skyitLogo.png";
import cognizantPic from "../assets/cognizantLogo.png";
import momentumPic from "../assets/momentumLogo.png";
import mechFindPic from "../assets/mechFindLogo.png";
import coveyMonPic from "../assets/coveymonLogo.png";
import liveLawyerPic from "../assets/liveLawyerLogo.png";
import ecommercePic from "../assets/ecommerceLogo.png";
import Card from "./Card";
import Section from "./Section";
import ContactForm from "./ContactForm";

const Hero = () => (
  <main className="px-3 my-auto text-center">
    {/* HOME / LANDING*/}
    <section id="home">
      <img
        src={myPic}
        alt="My pic"
        className="img-fluid rounded-circle shadow"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h1>Ghulam Ahmed</h1>
      <p className="lead">Software Engineer | Full-Stack | CS @ NJIT</p>
      <p className="lead mx-5">
        As a recent Computer Science graduate from New Jersey Institute of
        Technology, I'm passionate about building meaningful applications that
        solve real-world problems such as my current project MechFind. My
        previous internship experience in Full-Stack Development allowed me to
        work across the entire software lifecycle, from designing user
        interfaces to managing backend logic and databases. Whether it's diving
        deeper into React, exploring new backend frameworks such as Springboot,
        or improving my understanding of system design, I'm eager to keep
        learning and growing as a software engineer.
      </p>
      <a
        href={`${process.env.PUBLIC_URL}/Ghulam_Ahmed-Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-lg btn-light fw-bold border-white bg-white"
      >
        See Resume
      </a>
    </section>

    {/* EXPERIENCE SECTION */}
    <Section id="experience" title="Experience">
      <Card
        title=" Full-Stack Software Developer Intern"
        company="SkyIT Services"
        date="May 2024 - Sep 2024"
        description="▪ Maintained and improved a full-stack employee portal serving 600+ users. 
▪ Developed a task platform with React and PostgreSQL, improving task completion rates by 20%. 
▪ Fixed high-priority bugs and launched enhancements, reducing task completion time by 10%. 
▪ Shipped 5+ features, including Google Calendar API integration for live scheduling. 
▪ Led sprint planning & code reviews as Team Lead in a SCRUM/Agile environment for a team of 8 interns. "
        image={skyitPic}
        link="https://skyit.services/"
        linkLabel="View Company Website"
        pdfLink={`${process.env.PUBLIC_URL}/Ghulam-Ahmed-SkyIT-Reference.pdf`}
        pdfLinkLabel="View Letter of Reccomendation"
      />
      <Card
        title="Generative AI Extern"
        company="Cognizant"
        date="June 2024 - July 2024"
        description="▪ Fine-tuned Hugging Face models, including GPT-2, for text classification & generation tasks. 
▪ Used Parameter Efficient Fine-Tuning (PEFT) to boost model accuracy by 15%, reducing training time by 20%. 
▪ Applied data preprocessing, model evaluation, and hyperparameter tuning to optimize model performance."
        image={cognizantPic}
        link="https://www.cognizant.com/us/en"
        linkLabel="View Company Website"
      />
      <Card
        title="Brand Ambassador"
        company="Momentum Solar"
        date="Jan 2023 - May 2024"
        description="▪ Consistently exceeded goals by 30%, generating 50+ quality leads monthly through sales & customer service skills. 
▪ Ranked in the top 5% for key performance indicators among 80+ peers as the youngest member on the team. 
▪ Simplified & explained complex concepts clearly, a valuable skill for engineering & project management."
        image={momentumPic}
        link="https://www.momentumsolar.com/"
        linkLabel="View Company Website"
      />
    </Section>

    {/* PROJECTS SECTION */}
    <Section id="projects" title="Projects">
      <Card
        title="MechFind | Founder & Software Engineer"
        company="Personal Project"
        date="June 2025 - Present"
        description="▪ Co-developing a web/mobile app to increase mechanic revenue (SAS), using Google Maps API for precise discovery. 
▪ Using Software Engineering best practices, including unit testing, modularity, and Test Driven Development. 
▪ Leveraging full stack development skills to implement user authentication and mechanic profiles through Firebase. "
        image={mechFindPic}
      />
      <Card
        title="Live Lawyer | Project Manager & Software Engineer"
        company="LiveLawyerLLC"
        date="January 2025 - May 2025"
        description="▪ Leading development of a web/mobile app to connect users with lawyers, using React Native & TypeScript.
▪ Manage a team of 5 developers and coordinate with stakeholders to align app development with business goals. 
▪ Implementing real-time lawyer-client communication with Twilio for chat and video calls 
▪ Utilizing Supabase & Prisma ORM for secure, scalable database management, including profiles & authentication. 
▪ Integrating Docker for containerization to standardize environment, with plans for seamless deployment soon. "
        image={liveLawyerPic}
        link="https://www.livelawyerapp.com/"
        linkLabel="View Project Details"
      />
      <Card
        title="Covey-Mon | Software Engineer"
        company="Personal Class Project"
        date="September 2024 - December 2024"
        description="▪ Extended Covey.Town framework by integrating a Pokémon-inspired game using TypeScript & React. 
▪ Utilized RESTful PokéAPI to integrate Pokémon stats, abilities, and moves into a multiplayer environment. 
▪ Collaborated in a SCRUM team using Agile methodologies, contributing to sprint planning & code reviews. 
▪ Gained experience with SDLC, CI/CD pipelines, and open-source collaboration while deploying new features. "
        image={coveyMonPic}
        link="https://github.com/ghxlam/Covey-Mon"
        linkLabel="View Repository"
      />
      <Card
        title="Ecommerce Website | Software Developer"
        company="Class Project"
        date="March 2024 - April 2024"
        description="▪  Built an e-commerce project on Linux, utilizing a Bash script to automate the download of numerous product links and efficiently extract DOM data, leveraging Tagsoup for parsing.
▪ Developed a Python script to process XHTML files, extracting key data points and seamlessly transferring the information into a MySQL database for storage and retrieval.
▪ Employed PHP to dynamically fetch and display data from the MySQL database, hosting the website on an Apache web server to ensure robust and reliable performance.
"
        image={ecommercePic}
        link="https://github.com/ghxlam/EcommerceWebsite"
        linkLabel="View Repository"
      />
    </Section>

    <Section id="contact" title="Contact Me">
      <ContactForm />
    </Section>
  </main>
);

export default Hero;
