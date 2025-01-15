import { useState } from "react";
import CustomText from "../CustomText/CustomText";
import "./Idea.css";

const Idea = ({
  isEditing,
  setIsEditing,
  idea,
  index,
  deleteIdea,
  ideas,
  setIdeas,
}) => {
  const [isEditingChild, setIsEditingChild] = useState(false);
  const [newIdea, setNewIdea] = useState(idea);
  const [placeholder, setPlaceholder] = useState("Enter your idea here");

  const handleSave = (e, newIdea) => {
    e.preventDefault();
    if (newIdea) {
      const newIdeas = ideas.map((idea, i) => {
        if (i === index) {
          idea = newIdea;
        }

        return idea;
      });

      setIdeas(newIdeas);
      setIsEditingChild(false);
      setIsEditing(false);
      setPlaceholder("Enter your idea here");
    } else {
      setPlaceholder("Please enter an idea first!");
    }
  };

  const handleCancelingChange = (e) => {
    e.preventDefault();
    setIsEditing(false);
    setNewIdea(idea);
    setIsEditingChild(false);
    
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsEditingChild(true);
  };

  return (
    <div className="idea">
      {!isEditingChild && idea}
      {(!isEditingChild && (
        <div className="idea-editing-buttons">
          <button disabled={isEditing} onClick={(e) => deleteIdea(e, index)}>
            Delete
          </button>
          <button disabled={isEditing} onClick={() => handleEdit()}>
            Edit
          </button>
        </div>
      )) || (
        <form className="idea-editing-form">
          <CustomText
            placeholder={placeholder}
            disabled={false}
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
          />
          <button onClick={(e) => handleCancelingChange(e)}>Cancel</button>
          <button type="submit" onClick={(e) => handleSave(e, newIdea)}>
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default Idea;
