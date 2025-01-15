import { useSelector } from "react-redux";
import Idea from "../../components/Idea/Idea";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./VotingPage.css";

const VotingPage = () => {
  const ideas = useSelector((state) => state.ideas.entries);

  return (
    <div className="brain-storming-page">
      <h1 className="brain-storming-h1">Voting Page</h1>
      <p className="brain-storming-p">
        Welcome to the Voting Page. Here you can vote your ideas and
        plan your goals.
      </p>
      <div className="brain-storming-ideas">
        {ideas.map((idea, index) => (
          <div key={index} className="brain-storming-idea">
            <Idea
              idea={idea}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="brain-storming-control-pages">
        <CustomButton text="Previous Page" link="/brain-storming" />
        <CustomButton text="Next Page" />
      </div>
    </div>
  );
};

export default VotingPage;
