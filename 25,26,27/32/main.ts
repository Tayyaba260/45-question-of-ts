// EXERCISE 32
//making a list of five username

let current_users: string [] =["Admin","Eric","Jhon","Jack","Lily"];
//Make another list of five usernames called new_user
let new_users: string [] =["Admin","Eric","Tom","Bell","Ken"];
//new use name
let current_user_in_lowercase: string[] =current_users.map(user => user.toLowerCase());

for(let new_user of new_users) {
    if (current_user_in_lowercase.includes(new_user.toLowerCase())) {
        console.log(`\n\nSorry ${new_user}, this name is already taken`)
    } else {
        console.log(`\nYes ${new_user}, is available`)
    };

};