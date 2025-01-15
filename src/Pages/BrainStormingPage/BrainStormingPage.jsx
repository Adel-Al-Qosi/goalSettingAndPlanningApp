import { useState } from 'react';
import Idea from '../../components/Idea/Idea';
import CustomText from '../../components/CustomText/CustomText';
import './BrainStormingPage.css';

const BrainStormingPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [idea, setIdea] = useState('');
    const [ideas, setIdeas] = useState([]);
    const [placeholder, setPlaceholder] = useState('Enter your idea here');

    const deleteIdea = (index) => {
        const newIdeas = ideas.filter((idea, i) => i !== index);
        setIdeas(newIdeas);
    }

    const saveIdea = (e) => {
        e.preventDefault();

        if (idea) {
            setIsEditing(false);
            setIdeas([...ideas, idea]);
            setIdea('');
            setPlaceholder('Enter your idea here');
        } else {
            setPlaceholder('Please enter an idea first!');
        }
    }

    return (
        <div className='brain-storming-page'>
            <h1 className='brain-storming-h1'>Brainstorming Page</h1>
            <p className='brain-storming-p'>Welcome to the Brainstorming Page. Here you can jot down your ideas and plan your goals.</p>
            <div className='brain-storming-ideas'>
                {
                    ideas.map((idea, index) => (
                        <div key={index} className='brain-storming-idea'>
                            <Idea
                                isEditing={isEditing}
                                setIsEditing={setIsEditing}
                                idea={idea}
                                index={index}
                                deleteIdea={deleteIdea}
                                ideas={ideas}
                                setIdeas={setIdeas}
                            />
                        </div>
                    ))
                }
            </div>
            <form className='brain-storming-form'>
                <CustomText
                    disabled={isEditing}
                    value={idea}
                    onChange={
                        (e) => setIdea(e.target.value)
                    }
                    placeholder={placeholder}
                />
                <button disabled={isEditing} className='brain-storming-button' type='submit' onClick={(e) => saveIdea(e)}>Save Idea</button>
            </form>
            <div className='brain-storming-control-pages'>
                
            </div>
        </div>
    );
};

export default BrainStormingPage;