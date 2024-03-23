//  EXERCISE 30.
var users = ["Admin", "Eric", "Tayyaba", "Bilal", "Komal"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("\nHello Admin, would you like to see a status report?");
    }
    else {
        console.log("\nHello ".concat(user, ", thankyou for logging again."));
    }
    ;
}
;
