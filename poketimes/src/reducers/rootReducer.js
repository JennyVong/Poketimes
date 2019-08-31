const initStates = {
    posts: [
        {id: '1', title: 'Squirtle laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, corporis commodi ab nemo vel molestiae molestias tempora eius possimus quas placeat modi cum vitae voluptatum harum, itaque magnam doloremque error.'},
        {id: '2', title: 'Charmander laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, corporis commodi ab nemo vel molestiae molestias tempora eius possimus quas placeat modi cum vitae voluptatum harum, itaque magnam doloremque error.'},
        {id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, corporis commodi ab nemo vel molestiae molestias tempora eius possimus quas placeat modi cum vitae voluptatum harum, itaque magnam doloremque error.'}
    ]
}

const rootReducer = (state = initStates, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer