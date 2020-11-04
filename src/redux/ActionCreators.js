import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json',
        },
        credentials: 'same-origin',
    })
        .then(res => {
            if(res.ok) return res.json();
            else {
                let err = new Error('Error ' + res.status + ': ' + res.statusText);
                err.response = res;
                throw err; 
            }
        }, err => {
            let errMess = new Error(err.message);
            throw errMess; 
        })
        .then(res => dispatch(addComment(res)))
        .catch(err => {
            console.log('POST Comments', err.message);
            alert('Your comment was not posted due to: ' + err.message);
        });
}

export const dishesLoading = () =>  ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMsg,
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});

export const fetchDishes = () => (dispatch) => {   
    dispatch(dishesLoading(true));


    return fetch(baseUrl + 'dishes')
            .then(res => {
                if(res.ok)
                    return res;
                else{
                    let err = new Error('Error ' + res.status + ': ' + res.statusText);
                    err.response = res;
                    throw err;
                }
            }, err => {
                let errMess = new Error(err.message);
                throw errMess;
            })
            .then(res => res.json())
            .then(data => dispatch(addDishes(data)))
            .catch(err => dispatch(dishesFailed(err.message)));
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
})

export const commentsFailed = (errMsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMsg,
})

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
            .then(res => {
                if(res.ok)
                    return res.json()
                else{
                    let err = new Error('Error' + res.status + ': ' + res.statusText);
                    err.response = res; 
                    throw err; 
                }
            }, err => {
                let errMess = new Error(err.message);
                throw errMess; 
            })
            .then(data => dispatch(addComments(data)))
            .catch(err => dispatch(commentsFailed(err.message)));
};

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
})

export const promosFailed = (errMsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMsg,
})

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true)); 

    return fetch(baseUrl + 'promotions')
            .then(res => {
                if(res.ok) return res.json();
                else{
                    let err = new Error('Error ' + res.status + ': ' + res.statusText);
                    err.response = res; 
                    throw err; 
                }
            }, err => {
                let errMess = new Error(err.message);
                throw errMess;
            })
            .then(data => dispatch(addPromos(data)))
            .catch(err => dispatch(promosFailed(err.message)));
}