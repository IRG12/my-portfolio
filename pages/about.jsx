import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <h2 className={styles.lineH}>
        {" "}
        My name is Isaiah Gutierrez and I am a Front End Dev at the age of 31. I
        like to be active with going to the gym, walks, hiking or, helping out
        at my Church. I've been working labor jobs for the past ten years. Two
        years ago, I decided to learn programming and I thought "What do you got
        to lose. If this doesn't work out, at least you can check it off your
        list and move on." Low and behold I was slowly grasping it. Though in
        the beginning of 2021 I hit a wall trying to complete my first tutorial.
        I did research and tried to follow but my code kept throwing errors. I
        didn't know what to do. I knew I needed teacher or mentor. I came a
        cross Clever Programmer, did some research, and decided to join their
        October boot camp cohort. I learned the fundamentals of programing and
        graduated as a "Front-End Software Engineer". I have complete over 20+
        tutorials since then and more to come. I hope you have a good day and
        best wishes to you and yours!
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
