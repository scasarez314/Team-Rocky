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

getEvents();

// This function grabs posts from the database and updates the view
function getEvents() {
  $.get("/api/events", function (data) {

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      console.log(data[i])
      $("#event-table > tbody").append(
        $("<tr>").append(
          $("<td>").text(data[i].name),
          $("<td>").text(data[i].telephone),
          $("<td>").text(data[i].email),
          $("<td>").text(data[i].date),
          $("<td>").text(data[i].location),
          $("<td>").text(data[i].description)
        ))

    }

  });
}

//Edit the event


// This function does an API call to delete posts **need to create this button**

// $(".delete-event").on("click", function(event) {
//   var id = $(this).data("id");

//   // Send the DELETE request.
//   $.ajax("/api/events/" + id, {
//     type: "DELETE"
//   }).then(
//     function(data) {
//       console.log("deleted event", id);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });