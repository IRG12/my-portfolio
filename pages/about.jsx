import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.lineH}>
        {" "}
        My name is Isaiah Gutierrez, a Front End Developer with over two years
        of experience. I graduated from a coding boot camp as a Front End
        Developer, and I am currently enrolled in a more advanced coding
        academy. In addition to being a student, I also serve as a tutor in the
        academy, helping others develop their coding skills. I am passionate
        about building responsive and accessible web applications using modern
        technologies and tools. I enjoy keeping up-to-date with the latest
        trends and best practices in the industry. With strong problem-solving
        skills and attention to detail, I take pride in delivering high-quality
        user experience thats meets the needs of clients and users.
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
