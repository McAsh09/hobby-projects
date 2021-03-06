import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

import './ProjectCard.css';

const ProjectCard = (props) => {
    const dispatch = useDispatch(); //returns a reference to the dispatch function from the redux store
    const project = useSelector(state => state.projects.find(project => project.id === props.id));//to get hold of any state that is maintained in the redux store

    const onDeleteProjectHandler = () => {
        dispatch({ type: 'DELETE_PROJECT', payload: { id: project.id } });
    }

    const onViewProjectHandler = () => {
        dispatch({ type: 'SELECT_PROJECT', payload: { id: project.id } });
    }
    return (
        <div className="card">
            <img
                alt='Project'
                className={project.images[0] ? "card__image" : "card__no-image"} //Handling if user doesn't add any image
                src={project.images[0] ? URL.createObjectURL(project.images[0]) : '/project-management.svg'}
            /> {/*Using the first image*/}
            < div className="card__body">
                <div className="card__body__details">
                    <div className="card__body__title">
                        <span>{project.title}</span>
                    </div>

                    <NavLink to='/project'>
                        <button
                            className="card__body__view-button"
                            onClick={onViewProjectHandler}
                        >
                            View Project
                        </button>
                    </NavLink>
                </div>
                <div className="card__delete">
                    <button
                        className="card__body__del-button"
                        onClick={onDeleteProjectHandler}
                    >
                        <img src="/dustbin.svg" alt="delete" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard;