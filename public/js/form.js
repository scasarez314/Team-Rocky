// Capture the form inputs
$("#formSubmit").on("click", function(event) {
  event.preventDefault();

  // Form validation to make sure form is filled out before POST via AJAX
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    $(".chosen-select").each(function() {
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
      date:$("#formDateInput").val().trim(),
      location:$("#locationFormInput").val().trim(),
      description: $("#formDescriptionInput").val().trim(),
  };
    // AJAX post the data to the events API
    $.ajax("/api/events", {
      type: "POST",
      data: userFormData
    }).then(function(data) {
      // this will reload our page to get the updated list of events  (Do we need this since our form is on a different page?)
      location.reload();
    });
  } else {
    alert("Your event could not be created.  Please fill out the form completely.");
  }
});

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
