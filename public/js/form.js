// Capture the form inputs
$("#formSubmit").on("click", function (event) {
  event.preventDefault();

  // Form validation to make sure form is filled out before POST via AJAX
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    $(".chosen-select").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    var userFormData = {
      name: $("#formNameInput").val().trim(),
      telephone: $("#formTelephoneInput").val().trim(),
      email: $("#formEmailInput").val().trim(),
      date: $("#formDateInput").val().trim(),
      location: $("#locationFormInput").val().trim(),
      description: $("#formDescriptionInput").val().trim(),
    };
    // AJAX post the data to the events API
    $.ajax("/api/events", {
      type: "POST",
      data: userFormData
    }).then(function (data) {
      // this will reload our page to get the updated list of events  (Do we need this since our form is on a different page?)
      location.reload();

    });
  } else {
    alert("Your event could not be created.  Please fill out the form completely.");
  }
});

// This function grabs posts from the database and updates the view
function getEvents() {
  $.get("/api/events", function (data) {
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty(author);
    }
    else {
      initializeRows();
    }
  });
}

// This function does an API call to delete posts
//  function deletePost(id) {
//   $.ajax({
//     method: "DELETE",
//     url: "/api/posts/" + id
//   })
//     .then(function() {
//       getPosts(postCategorySelect.val());
//     });
// }
// module.exports = formFields

// This function grabs posts from the database and updates the view
function getEvents() {
  $.get("/api/events", function (data) {
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty(author);
    }
    else {
      initializeRows();
    }
  });
}

function initializeRows() {
  console.log(posts)
  for (i = 0; i < posts.length; i++) {
    console.log(posts[i])
    var currentPost = posts[i];


    var name = currentPost.name
    var telephone = currentPost.telephone
    var email = currentPost.email
    var location = currentPost.location
    var description = currentPost.description


    $("#event-table").append(
      $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(telephone),
        $("<td>").text(email),
        $("<td>").text(location),
        $("<td>").text(description)
      )
    );

  }
}

getEvents();

// Navbar JS
$(document).ready(function () {

  $(window).scroll(function () {

    var height = $('.first-container').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 40) {
      $('.nav-container').addClass('solid-nav');
    } else {
      $('.nav-container').removeClass('solid-nav');
    }

  });
});
//add div in html
//css display none
//create onclick add new event
//listen for plus bttn
//change css to display block  
