// EXERCISE 32
var current_users = ["Admin", "Eric", "Jhon", "Jack", "Lily"];
var new_users = ["Admin", "Eric", "Tom", "Bell", "Ken"];
var current_user_in_lowercase = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_user_in_lowercase.includes(new_user.toLowerCase())) {
        console.log("\n\nSorry ".concat(new_user, ", this name is already taken"));
    }
    else {
        console.log("\nYes ".concat(new_user, ", is available"));
    }
    ;
}
;
