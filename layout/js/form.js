// when submitted
// collect all data from inputs
// find a way to transfer data

$(document).ready(function () {

    $("#submit").on("click", function (e) {
        //collect all data//
        e.preventDefault();
        var name = $("#name-input").val();
        localStorage.setItem("Name", name);
        //create for each entry^
        var telephone = $("#telephone-input").val();
        localStorage.setItem("Telephone", telephone);

        var email = $("#email-input").val();
        localStorage.setItem("Email", email);

        var date = $("#date-input").val();
        localStorage.setItem("Date", date);

        var location = $("#location-input").val();
        localStorage.setItem("Location", location);

        var description = $("#description-input").val();
        localStorage.setItem("Description", description);
        
   
  
        var newEvent = {
            name: name,
            telephone: telephone,
            email: email,
            date: date,
            location: location,
            description: description
        };

      

        console.log(event);
        // console.log(telephone);
        // console.log(email);
        // console.log(location);
        // console.log(description);

        alert("Successfully added!");

        $("#name-input").val("");
        $("#telephone-input").val("");
        $("#email-input").val("");
        $("#date-input").val("");
        $("#location-input").val("");
        $("#description-input").val("");

        
    });
   
    var name = localStorage.getItem("name");

    var telephone = localStorage.getItem("telephone");

    var email = localStorage.getItem("email");

    var date = localStorage.getItem("date");

    var location = localStorage.getItem("location");

    var description = localStorage.getItem("description");
   
         $("#event-table > tbody").append(
        $("<tr>").append(
            $("<td>").v(name),
            $("<td>").text(telephone),
            $("<td>").text(email),
            $("<td>").text(date),
            $("<td>").text(location),
            $("<td>").text(description)
        )
 );

    console.log(name),
    console.log(telephone),
    console.log(email),
    console.log(date),
    console.log(location),
    console.log(description);




});
