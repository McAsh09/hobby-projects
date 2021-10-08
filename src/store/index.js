import  { createStore } from 'redux'; // Redux store that holds the complete state of the app

//initialised 'initialState' as it is required in 'reducer'
const initialState = {
    projects: [],
    currentProject: undefined,
    notification: undefined
};


const formActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT': {
            const projectsCopy = [...state.projects]; // For updating store in an immutable way
            //adding new project in the projects array using '.push'
            projectsCopy.push({
                id: Math.floor(Math.random() * 1000), // assigning random id to the created project
                title: action.payload.title,
                description: action.payload.description,
                images: action.payload.images ? action.payload.images : []
            });

            return { 
                currentProject: state.currentProject , 
                projects: projectsCopy, 
                notification: 'Added'
            };
        }

        case 'EDIT_PROJECT': {
            const projectsCopy = [...state.projects];
            const projectIndex = projectsCopy.findIndex(project => project.id === action.payload.id); // used 'findIndex()' method since it returns the index of the first array element that passes a test/condition that is provided by the function and thus fulfills our requirement

            const editedProject = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                images: action.payload.images
            };

            projectsCopy[projectIndex] = editedProject;
            return { 
                projects: projectsCopy, 
                currentProject: state.currentProject,
                notification: 'Edited'
            }
        }

        case 'DELETE_PROJECT': {
            const projectsFiltered = state.projects.filter(project => project.id !== action.payload.id);
            return { 
                projects: projectsFiltered, 
                currentProject: state.currentProject,
                notification: 'Deleted'
            };
        }

        case 'SELECT_PROJECT': {
            return { ...state, currentProject: action.payload.id, notification: undefined };
        }

        case 'DESELECT_PROJECT': {
            return { ...state, currentProject: undefined };
        }

        case 'STOP_NOTIFICATION': {
            return {...state, notification: undefined}
        }

        default: return state;
    }
}

const store = createStore(formActionReducer); //created a redux store by importing 'createStore'

export default store;