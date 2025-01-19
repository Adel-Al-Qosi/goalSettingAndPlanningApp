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
    setTimeout(() => {
      const newIdeas = ideas.filter((_, i) => i !== index);
      dispatch(loadIdeas(newIdeas));
    }, 500);
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

  console.log(ideas);

  return (
    <div className="brain-storming-page">
      <header className="brain-storming-header">
        <h1 className="brain-storming-h1">
          <span className="name">QuestPath</span>
        </h1>
      </header>
      <main className="brain-storming-main">
        <h2 className="brain-storming-h2">Brain Storming Section:</h2>
        <section className="brain-storming-ideas">
          {ideas.map((idea, index) => (
            <div key={idea.id} className="brain-storming-idea">
              <Idea
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                idea={idea}
                ideas={ideas}
                index={index}
                deleteIdea={() => deleteIdea(index)}
              />
            </div>
          ))}
        </section>
        <form className="brain-storming-form">
          <CustomText
            disabled={isEditing}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder={placeholder}
            texttype="base"
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
          <CustomButton type="previous" text="Previous" link="/instructions" />
          <CustomButton type={"next" + (ideas.length ? " active" : "")}
            text="Next"
            onClick={handleGoingToNextPage}
            link={ideas.length ? "/voting" : ""}
          />
        </div>
      </main>
    </div>
  );
};

export default BrainStormingPage;