import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Idea from "../../components/Idea/Idea";
import { addIdea, loadIdeas } from "../../store/reducers/ideas";
import CustomText from "../../components/CustomText/CustomText";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./BrainStormingPage.css";

const BrainStormingPage = () => {
  const dispatch = useDispatch();
  const ideas = useSelector((state) => state.ideas.entries);

  const [isEditing, setIsEditing] = useState(false);
  const [idea, setIdea] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter your idea here");

  const deleteIdea = (index) => {
    const newIdeas = ideas.filter((_, i) => i !== index);
    dispatch(loadIdeas(newIdeas));
  };

  const saveIdea = (e) => {
    e.preventDefault();

    if (idea) {
      setIsEditing(false);
      dispatch(addIdea(idea));
      setIdea("");
      setPlaceholder("Enter your idea here");
    } else {
      setPlaceholder("Please enter an idea first!");
    }
  };

  const handleGoingToNextPage = () => {
    if (ideas.length) {
      dispatch(loadIdeas(ideas));
    } else {
      setPlaceholder("Please enter an idea first!");
    }
  };

  return (
    <div className="brain-storming-page">
      <h1 className="brain-storming-h1">Brainstorming Page</h1>
      <p className="brain-storming-p">
        Welcome to the Brainstorming Page. Here you can jot down your ideas and
        plan your goals.
      </p>
      <div className="brain-storming-ideas">
        {ideas.map((idea, index) => (
          <div key={index} className="brain-storming-idea">
            <Idea
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              idea={idea}
              index={index}
              deleteIdea={() => deleteIdea(index)}
            />
          </div>
        ))}
      </div>
      <form className="brain-storming-form">
        <CustomText
          disabled={isEditing}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder={placeholder}
        />
        <button
          disabled={isEditing}
          className="brain-storming-button"
          type="submit"
          onClick={saveIdea}
        >
          Save Idea
        </button>
      </form>
      <div className="brain-storming-control-pages">
        <CustomButton text="Previous Page" link="/home" />
        <CustomButton
          text="Next Page"
          onClick={handleGoingToNextPage}
          link={ideas.length ? "/voting" : ""}
        />
      </div>
    </div>
  );
};

export default BrainStormingPage;