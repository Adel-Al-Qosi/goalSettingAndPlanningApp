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
      <header className="brain-storming-header">
        <h1 className="brain-storming-h1">QuestPath</h1>
      </header>
      <main className="brain-storming-main">
        <p className="brain-storming-p-1">
          In this stage, you will brainstorm ideas for your project. Enter your ideas below.
        </p>
        <p className="brain-storming-p-2">
          You can add as many ideas as you want. Once you are done, click on the "Next Page" button to proceed to the next stage.
        </p>
        <p className="brain-storming-p-3">
          You don't need to worry about the quality of your ideas at this stage. Just write down whatever comes to your mind.
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
      </main>
    </div>
  );
};

export default BrainStormingPage;