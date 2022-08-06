import * as api from '../api/index.js';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


//     //payload: data where we store posts
//     const action = { type: 'FETCH_ALL', payload: [] }

//     dispatch(action);
// }

export const createPost = (post) => async (dispatch) =>{
    try{
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const { data } = await api.updatePost(id, post); //returns updated post
        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error); //console logging error will give more info
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({ type: 'DELETE', pyaload: id })
    } catch (error) {
        console.log(error);
    }
}