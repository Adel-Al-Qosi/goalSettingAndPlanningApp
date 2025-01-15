import { useState } from 'react';
import CustomText from '../CustomText/CustomText';
import './Idea.css';

const Idea = ({ isEditing, setIsEditing, idea, index, deleteIdea, ideas, setIdeas }) => {
    const [isEditingChild, setIsEditingChild] = useState(false);
    const [newIdea, setNewIdea] = useState(idea);

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
        }
    }

    const handleCancelingChange = (e) => {
        e.preventDefault();
        setIsEditing(false);
        setNewIdea(idea);
        setIsEditingChild(false)
    }

    const handleEdit = () => {
        setIsEditing(true);
        setIsEditingChild(true);
    }

    return (
        <div className='idea'>
            {idea}
            {
                !isEditingChild && (
                    <div className='idea-editing-buttons'>
                        <button onClick={() => deleteIdea(index)}>Delete</button>
                        <button disabled={isEditing} onClick={() => handleEdit()}>Edit</button>
                    </div>
                ) || (
                    <form className='idea-editing-form'>
                        < CustomText
                            disabled={false}
                            value={newIdea}
                            onChange={(e) => setNewIdea(e.target.value)}
                            placeholder='Enter your idea here'
                        />
                        <button onClick={(e) => handleCancelingChange(e)}>Cancel</button>
                        <button type='submit' onClick={(e) => handleSave(e, newIdea)}>Save</button>
                    </form>
                )
            } 
        </div>
    );
}

export default Idea;