import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.lineH}>
        {" "}
        I am a Front-End Developer and Designer. Front-End skills: - HTML - CSS
        - Javascript - React.js - Tailwind - Node.js - Redux toolkit Design
        tools: WordPress - Figma - Canva - Photoshop also volunteer as a tutor
        in the academy, helping others develop their coding skills. I am
        passionate about building responsive and accessible web applications
        using modern technologies and tools. I enjoy keeping up-to-date with the
        latest trends and best practices in the industry. With strong
        problem-solving skills and attention to detail, I take pride in
        delivering high-quality user experience thats meets the needs of clients
        and users.
      </h2>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
