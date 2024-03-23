//  EXERCISE 30.

let users: string[] =["Admin","Eric","Tayyaba","Bilal","Komal"];

for (let user of users) {
    if (user === "Admin") {
    console.log("\nHello Admin, would you like to see a status report?")
} else {
    console.log(`\nHello ${user}, thankyou for logging again.`);
};
};


