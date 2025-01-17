import "./LandingPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <h1>
          Welcome To <br /><span className="name">QuestPath</span>
        </h1>
        <p>Plan and achieve your goals effectively</p>
      </header>
      <main className="landing-page-main">
        <section className="features">
          <ul>
            <li>Set and track your goals</li>
            <li>Plan your tasks</li>
            <li>Monitor your progress</li>
          </ul>
        </section>
        <section className="cta">
          <CustomButton
            text="Get Started"
            link="/instructions"
            type="get-started"
          />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
