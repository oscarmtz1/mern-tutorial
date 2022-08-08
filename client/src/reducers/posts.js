//reducer is function that takes in state and action

import { CardActionArea } from "@material-ui/core"

//acts based on acton
export default (posts = [], action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'DELETE':
            return posts.filter((post) => post._id != action.payload); 
        case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
};