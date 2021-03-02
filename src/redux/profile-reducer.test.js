import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {message: 'Alloh buyuk!', likeCount: 20, id: 1},
        {message: 'Hi every body!', likeCount: 10, id: 2},
        {message: 'Good Morning!', likeCount: 14, id: 3},
        {message: 'Let"s go to the garden!', likeCount: 16, id: 4},
        {message: 'Good night!', likeCount: 100, id: 5}
    ]
}

// UNIT-TEST: 01
it('should be length is 6', function () {

    // 1. Start date for test
    let action = addPost("Alloh buyuk zotdir!");

    // 2. Main action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(6);
});

// UNIT-TEST: 02
it('Message of new post should be Correct', function () {

    // 1. Start date for test
    let action = addPost("Alloh buyuk zotdir!");

    // 2. Main action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts[5].message).toBe("Alloh buyuk zotdir!");
});

// UNIT-TEST: 03
it('after deleting length of messages should be decrement', function () {

    // 1. Start date for test
    let action = deletePost(5);

    // 2. Main action
    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.posts.length).toBe(4);
}); 