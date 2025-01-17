import "./Instructions.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const Instructions = () => {
  return (
    <div className="instructions-page">
      <header className="instructions-page-header">
        <h1>
          <span className="name">QuestPath</span>
        </h1>
      </header>
      <main className="instructions-page-main">
        <h2>Unleash Your Creativity:</h2>
        <ul className="instructions-page-instructions">
          <li>
            In this stage, you will brainstorm ideas for your project. Enter
            your ideas below.
          </li>
          <li>
            You can add as many ideas as you want. Once you are done, click on
            the "Next Page" button to proceed to the next stage.
          </li>
          <li>
            You don't need to worry about the quality of your ideas at this
            stage. Just write down whatever comes to your mind.
          </li>
          <li>
            Click on the "Next Page"
            button to Start.
          </li>
        </ul>

        <div className="instructions-page-control">
          <CustomButton text="Previous" type="previous" link="/home" />
          <CustomButton text="Next" type="next" link="/brain-storming" />
        </div>
      </main>
    </div>
  );
};

export default Instructions;
