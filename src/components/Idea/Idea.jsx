import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadIdeas } from "../../store/reducers/ideas";
import CustomText from "../CustomText/CustomText";
import colorClasses from "./colors";
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
  const [colorClass, setColorClass] = useState('');
  useEffect(() => {
    setColorClass(getRandomColorClass());
  }, [])

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

  const getRandomColorClass = () =>
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <div
      className={"idea" + (isDeleting ? " deleting" : "") + " " + colorClass}
    >
      <div className="idea-content">{!isEditingChild && idea}</div>
      {(!isEditingChild && (
        <div className="idea-editing-buttons">
          <button
            className={colorClass}
            disabled={isEditing}
            onClick={(e) => handleDelete(e)}
          >
            Delete
          </button>
          <button
            className={colorClass}
            disabled={isEditing}
            onClick={() => handleEdit()}
          >
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
            <button
              className={colorClass}
              onClick={(e) => handleCancelingChange(e)}
            >
              Cancel
            </button>
            <button
              className={colorClass}
              type="submit"
              onClick={(e) => handleSave(e, newIdea)}
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Idea;