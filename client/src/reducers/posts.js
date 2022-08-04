//reducer is function that takes in state and action

import { CardActionArea } from "@material-ui/core"

//acts based on acton
export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}