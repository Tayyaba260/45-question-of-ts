// EXERCISE 38
{
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("".concat(city, " is in ").concat(country));
    }
    ;
    describe_city("Karachi"); //default
    describe_city("Mecca", "Saudi Arab");
    describe_city('Islamabad', "PAKISTAN");
}


