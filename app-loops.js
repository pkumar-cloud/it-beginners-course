var post1 = {
    content: 'This is my super post', 
    likes: 300, 
    shares: 20
}
var post2 = {
    content: 'This is my bit boring post', 
    likes: 10, 
    shares: 0
}

var post3 = {
    content: 'This is Mikes post', 
    likes: 250, 
    shares: 30
}

var facebookUserOne = {
    userName: 'Nana', 
    password: 'newpwd', 
    email: 'nn@example.com', 
    profileImage: 'reference-image',
    friends: ['Mike', 'Anna', 'Jenny'],
    posts: [post1, post2]
}

var facebookUserTwo = {
    userName: 'Mike', 
    password: 'mikessecretpass', 
    email: 'mike@example.com', 
    profileImage: 'reference-image',
    friends: ['Steve', 'Nana', 'Julia'],
    posts: [post3]
}

// SINGLE LOOPS
for (post of facebookUserOne.posts) {
    post.reactions = post.likes
    delete post.likes
}

console.log("we are done with posts loop")
console.log(facebookUserOne.posts)    


var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
}
console.log("we are done with users loop")
console.log(users)


// NESTED LOOPS
var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
    for (post of user.posts) {
        post.reactions = post.likes
        delete post.likes
    }
}
console.log("we are done with users loop")
console.log(users)

