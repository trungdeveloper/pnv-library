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