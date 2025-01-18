import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadIdeas } from "../../store/reducers/ideas";
import CustomText from "../CustomText/CustomText";
import "./Idea.css";

const Idea = ({
  isEditing,
  setIsEditing,
  idea,
  index,
  deleteIdea,
  ideas,
}) => {
  const [isEditingChild, setIsEditingChild] = useState(false);
  const [newIdea, setNewIdea] = useState(idea);
  const [placeholder, setPlaceholder] = useState("Enter your idea here");
  const [isDeleting, setIsDeleting] = useState(false);

  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (newIdea) {
      const updatedIdeas = ideas.map((idea, i) =>
        i === index ? newIdea : idea
      );
      dispatch(loadIdeas(updatedIdeas));
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

  const handleDelete = (e) => {
    e.preventDefault();
    setIsDeleting(true);
    deleteIdea(index);
  };

  return (
    <div className={"idea" + (isDeleting ? " deleting" : "")}>
      <div className="idea-content">{!isEditingChild && idea}</div>
      {(!isEditingChild && (
        <div className="idea-editing-buttons">
          <button disabled={isEditing} onClick={(e) => handleDelete(e)}>
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
          <div className="idea-editing-buttons">
            <button onClick={(e) => handleCancelingChange(e)}>Cancel</button>
            <button type="submit" onClick={(e) => handleSave(e, newIdea)}>
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Idea;
