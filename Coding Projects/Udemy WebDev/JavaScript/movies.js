/**
 * Created by Kiefer on 2017-04-09.
 */

var movies = {
    movieTitle: [
        {name: "In Bruges"},
        {name: "Frozen"},
        {name: "Fight Club"}
    ],
    rating: "5 stars",
    watched: "You have not"
};

var movies = [
    {title: "In Bruges", hasWatched: true, rating: 5},
    {title: "Frozen", hasWatched: false, rating: 2},
    {title: "OMG", hasWatched: false, rating: 3.4}
];

// what this is doing is taking the properties from movies movies=[{property}]
// creating a function with a placeholder name movie that holds the property values
// of our movie variable properties
movies.forEach(function (movie) {
    // start my string
    var result = "You have ";
        // if to decide what comes next = watched or not seen
        if (movie.hasWatched) {
            // additional part of my string
            result += "watched ";
        }
        // whether we have true or false
        else {
            result += "not seen ";
        }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
});


// took code from up-top and turned it from a wall of code to a function()
// now we can call out to it as buildString instead of having such ugly code
// gave our function its own variable to call out and hold properties from movies
function buildString(movie) {
    // start my string
    var result = "You have ";
    // if to decide what comes next = watched or not seen
    if (movie.hasWatched) {
        // additional part of my string
        result += "watched ";
    }
    // whether we have true or false
    else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

// here is the same as above, except now we call buildString(movie) instead of the latter
movies.forEach(function (movie) {
    console.log(buildString(movie));
})