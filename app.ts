// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user

let usernames: string[] = ['daniyal', 'omair', 'juanid', 'ibrahim', 'ali', 'admin']

for (let users of usernames){
if (users === 'admin'){
    console.log("Hello Admin, would you like to see a status report?")
} else {
    console.log(`Hello,${users} thank you for logging in again.`)
}
}