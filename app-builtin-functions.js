// BUILT-IN FUNCTIONS FOR DIFFERENET DATA TYPES
console.log("parameter")

var friends = ["Maria", "Tom", "Kate"]
friends.pop()
friends.push("newfriend")

// string.replace - username changed from Maria to maria02
var someText = "User Maria - active user since xxx. Maria has 30 posts. Maria last changed her password last year"
someText.replace("Maria", "maria02") // this will match only first
someText.replace(/Maria/g, "maria02") // this will match all occurences

// slice full name into first and lastname
var fullName = "Kate Baker"
fullName.split() // returns array with whole string in it
fullName.split(/\s+/)
// \s matches any character that is a whitespace, adding + makes it greedy, 
// matching a group starting with characters and ending with whitespace, 
// and the next group starts when there is a character after the whitespace etc.

var fullNames = ["Anna Smith", "Steve Black", "Kate Baker"]
// loop through and turn the array of fullnames into array of objects with name and lastname
var firstAndLastNames = []
for (fullName of fullNames) {
    names = fullName.split(/\s+/)
    var firstAndLastName = {
        firstName: names[0],
        lastName: names[1]
    }
    firstAndLastNames.push(firstAndLastName)
}

console.log(firstAndLastNames)


// CALCULATE AGE FROM BIRTHDAY
var facebookUserOne = {
    userName: 'Nana', 
    password: 'newpwd', 
    email: 'nn@example.com', 
    profileImage: 'reference-image',
    friends: ['Mike', 'Anna', 'Jenny'],
    birthDate: "1996/08/18" // or "1996.08.18"
}

var facebookUserTwo = {
    userName: 'Mike', 
    password: 'mikessecretpass', 
    email: 'mike@example.com', 
    profileImage: 'reference-image',
    friends: ['Steve', 'Nana', 'Julia'],
    birthDate: "2003/03/10"
}

function getAge(birthDateString) {
    var today = new Date()
    var birthDate = new Date(birthDateString)

    var age = today.getFullYear() - birthDate.getFullYear()
    var birthdayMonthInFuture = today.getMonth() < birthDate.getMonth()
    var sameMonthDateInFuture = today.getMonth() === birthDate.getMonth() 
        && today.getDate() < birthDate.getDate()
    
    if (birthdayMonthInFuture || sameMonthDateInFuture) {
        age--
    }

    return age
}



var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.age = getAge(user.birthDate)
}

console.log(users)

