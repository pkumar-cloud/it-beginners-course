var facebookUserOne = {
   userName: "Nana",
   password: "supersecretpassword",
   email: "nn@nn.com",
   profileImage: "imagereference",
   friends: ["Mike01", "Anna33"],
   images: ["image1", "image2"],
   posts: ["post1", "post2"]
}

var facebookUserTwo = {
   userName: "Tina",
   password: "mypassword",
   email: "ti@example.com",
   profileImage: "imagereference",
   friends: ["Nana", "Steve"],
   images: ["image1", "image2"],
   posts: ["post1", "post2"]
}

var facebookUsers = [facebookUserOne, facebookUserTwo]

// get an element from array
facebookUsers[0]

// add element in array
facebookUsers[2] = {
   userName: "newuser",
   password: "mypwd",
   email: "nu@example.com",
   profileImage: "imagereference",
   friends: [], // empty array
}

// see the number of elements
facebookUsers.length

// add new element in the last place
facebookUsers[facebookUsers.length] = newUser

// add 1 item in the posts array in object - nested array
facebookUsers[0].posts[0]
facebookUsers[0].posts[length] = "post3"
facebookUsers[0].posts.push()

// remove last post in posts array in object - nested array
facebookUsers[0].posts.pop()
