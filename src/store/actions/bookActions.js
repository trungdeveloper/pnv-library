export const deleteBook = (id, props) => {
    return (dispatch, getState) => {
        props.firestore.collection('books').doc(id).delete()
        .then( () => {
            dispatch({type: 'DELETE_BOOK_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'DELETE_BOOK_ERROR', err})
        })
    }
}

export const addBook = (book, props) => {
    return (dispatch, getState) => {
        props.firestore.collection('books').add(book)
        .then( () => {
            dispatch({type: 'ADD_BOOK_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ADD_BOOK_ERROR', err})
        })
    }
}

export const updateBook = (book, id, props) => {
    return (dispatch, getState) => {
        props.firestore.collection('books').doc(id).update(book)
        .then( () => {
            dispatch({type: 'UPDATE_BOOK_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'UPDATE_BOOK_ERROR', err})
        })
    }
}