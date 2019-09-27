
// Gets an optional query string from our url (i.e. ?post_id=23)
var url = window.location.search;
var postId;
// Sets a flag for whether or not we're updating a post to be false initially
var updating = false;
// If we have this section in our url, we pull out the post id from the url
// In localhost:8080/cms?post_id=1, postId is 1
if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
}


// Getting jQuery references to the post body, title, form, and category select
var eventName = $("#name-text-input");
var hostPhone = $("#example-tel-input");
var hostEmail = $("#example-email-input");
var eventDate = $("#example-date-input");
var eventLocation = $("#location-text-input");
var eventSummary = $("#summary-description");
var formSubmission = $("#formsubmission")

$("#submit").on("click", function (event) {
    event.preventDefault();

    console.log("I was pressed")

    //Constructing post in popups card
    var newPost = {
        name: eventName.val().trim(),
        number: hostPhone.val().trim(),
        email: hostEmail.val().trim(),
        date: eventDate.val().trim(),
        location: eventLocation.val().trim(),
        summary: eventSummary.val().trim(),
    };

    console.log(newPost)
})

