import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Idea from "../../components/Idea/Idea";
import CustomButton from "../../components/CustomButton/CustomButton";
import { loadIdeas } from "../../store/reducers/ideas";
import { useNavigate } from "react-router-dom";
import "./VotingPage.css";

const VotingPage = () => {
  const ideas = useSelector((state) => state.ideas.entries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && ideas.length === 0) {
      navigate("/brain-storming");
    } else {
      setLoading(false);
    }
  }, [ideas, loading, navigate]);

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const items = [...ideas];
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    dispatch(loadIdeas(items));
  };

  const getStyle = (style, snapshot) => {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      transitionDuration: `.01s`,
    };
  };

  if (loading) {
    return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "2rem",
      color: "var(--clr-neutral-500)"
    }}>Loading...</div>;
  }

  return (
    <div className="voting-page">
      <header>
        <h1 className="voting-h1">
          <span className="name">QuestPath</span>
        </h1>
      </header>
      <main>
        <h2 className="voting-h2">Voting Page</h2>
        <p className="voting-p">
          Welcome to the Voting Page. Here you can vote your ideas and plan your
          goals.
        </p>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable
            droppableId="ideas-list"
            isDropDisabled={false}
            isCombineEnabled={false}
            ignoreContainerClipping={false}
            renderClone={null}
            mode="standard"
            direction="vertical"
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="voting-ideas"
              >
                {Array.isArray(ideas) && ideas.length > 0 ? (
                  ideas.map((idea, index) => (
                    <Draggable
                      key={idea.id.toString()}
                      draggableId={idea.id.toString()}
                      index={index}
                      isDragDisabled={false}
                      disableInteractiveElementBlocking={false}
                      shouldRespectForcePress={false}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="voting-idea"
                          style={getStyle(
                            provided.draggableProps.style,
                            snapshot
                          )}
                        >
                          <Idea
                            additionalClassName="idea-to-vote"
                            idea={idea}
                            index={index}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <p>No ideas available</p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="voting-control-pages">
          <CustomButton
            type="previous"
            text="Previous"
            link="/brain-storming"
          />
          <CustomButton type="next" text="Next" />
        </div>
      </main>
    </div>
  );
};

export default VotingPage;