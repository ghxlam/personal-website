import myPic from "../assets/mainImage.jpg";
import skyitPic from "../assets/skyitLogo.png";
import cognizantPic from "../assets/cognizantLogo.png";
import momentumPic from "../assets/momentumLogo.png";
import sampleImg from "../assets/mainImage.jpg";
import Card from "./Card";
import Section from "./Section";

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
        href="#"
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
        description="▪ Maintained and improved a full-stack employee portal serving 600+ users. \n
▪ Developed a task platform with React and PostgreSQL, improving task completion rates by 20%. \n
▪ Fixed high-priority bugs and launched enhancements, reducing task completion time by 10%. \n
▪ Shipped 5+ features, including Google Calendar API integration for live scheduling. \n
▪ Led sprint planning & code reviews as Team Lead in a SCRUM/Agile environment for a team of 8 interns. "
        image={skyitPic}
        link="https://skyit.services/"
        linkLabel="View Company Website"
      />
      <Card
        title="Generative AI Extern"
        company="Cognizant"
        date="June 2024 - July 2024"
        description="▪ Fine-tuned Hugging Face models, including GPT-2, for text classification & generation tasks.  \n
▪ Used Parameter Efficient Fine-Tuning (PEFT) to boost model accuracy by 15%, reducing training time by 20%. \n
▪ Applied data preprocessing, model evaluation, and hyperparameter tuning to optimize model performance."
        image={cognizantPic}
        link="https://www.cognizant.com/us/en"
        linkLabel="View Company Website"
      />
      <Card
        title="Brand Ambassador"
        company="Momentum Solar"
        date="Jan 2023 - May 2024"
        description="▪ Consistently exceeded goals by 30%, generating 50+ quality leads monthly through sales & customer service skills. \n
▪ Ranked in the top 5% for key performance indicators among 80+ peers as the youngest member on the team. \n
▪ Simplified & explained complex concepts clearly, a valuable skill for engineering & project management."
        image={momentumPic}
        link="https://www.momentumsolar.com/"
        linkLabel="View Company Website"
      />
    </Section>

    {/* PROJECTS SECTION */}
    <Section id="projects" title="Projects">
      <Card
        title="MechFind"
        company="Personal Project"
        date="2024"
        description="Helps people find nearby mechanics using location-based search and filters."
        image={sampleImg}
        link="https://github.com/ghxlam/mechfind"
        linkLabel="View Repository"
      />
    </Section>
  </main>
);

export default Hero;
