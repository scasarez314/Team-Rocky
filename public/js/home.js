<<<<<<< HEAD

// This function grabs posts from the database and updates the view
function getEvents() {
    $.get("/api/events", function(data) {
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty(author);
    }
    else {
      initializeRows();
    }
    });
    }
    
    function initializeRows(){
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
    

=======
// var formFields = [

//     $.ajax({
//         method: 'POST',
//         url: '/api/form',
//         data: {
//             name: 'Justin',
//             age: 'unknown'
//         }
//     })


// ];


// module.exports = formFields
>>>>>>> 6177c9084325be938d7ead7e764db090e531d413
