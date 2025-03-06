import Image from 'next/image';
import SkillLevel from '../components/SkillLevel';
import WorkItem from '../components/WorkItem';

export default function AboutMe() {
  return (
    <article>
      <section className="section section--divider">
        <header className="flex items-center justify-center border-b border-gray-200 pb-4">
          <Image
            src="/images/me.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="w-24 h-24 rounded-full object-cover"
          />
        </header>
        <h1>About Me</h1>
        <p>
          I'm Alexander Dunchev, a front-end developer passionate about creating accessible, high-performing websites.
        </p>
        <p>
          I have a strong affinity for Drupal and continuously seek ways to enhance the user experience.
        </p>
        <p>
          Beyond coding, my ultimate goal is to deliver solutions that make clients happy and foster a team that takes pride in the work we create together.
        </p>
      </section>
      <section className="section section--divider">
        <h2>Technical Skills</h2>
        <ul className="skills">
          <SkillLevel text="HTML, CSS, JavaScript" percentage={90} />
          <SkillLevel text="Drupal Theme Development" percentage={90} />
          <SkillLevel text="Accessibility" percentage={80} />
          <SkillLevel text="Frontend Performance" percentage={80} />
          <SkillLevel text="React" percentage={50} />
          <SkillLevel text="Next.js" percentage={20} />
          <SkillLevel text="Git" percentage={70} />
        </ul>
      </section>
      <section className="section section--divider">
        <h2>Work Experience</h2>
        <p>
          My journey started in 2013 as a back-end intern at ProPeople.
          But my passion was and still is frontend development, so I managed to transition into the front-end role.
        </p>
        <ul>
          <WorkItem
            title="Back-end intern"
            company="ProPeople"
            date="2013 - 2014"
          />
          <WorkItem
            title="Front-end developer"
            company="FFW"
            date="2014 - 2018"
            description="Implementing mainly Drupal themes and components. Working on large scale multi-site Drupal projects."
          />
          <WorkItem
            title="Front-end team lead"
            company="FFW"
            date="2019 - 2022"
            description="Working closely with all the people involved in the projects - clients, UX/UI,
            backend devs, PM, QA, from the discovery till the end delivery and the support phase.
            Doing estimations, code reviews, mentoring and developing new features or only bug fixing. &#128512;"
          />
          <WorkItem
            title="Front-end Domain knowledge leader"
            company="Jakala"
            date="2023 - 2025"
            description="Establishing FE standards, mentoring and training.
            Organizing and leading knowledge sharing sessions.
            Researching and implementing new technologies."
          />
        </ul>
      </section>
    </article>
  )
}
