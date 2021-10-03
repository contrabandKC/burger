$(document).ready(function() {


    $(".devour-it").on("click", function(event){
        var id = $(this).data("id");
        console.log("devoured")
        var devour = true

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
        type: "PUT",
        data: devour
      }).then(
        function() {
          console.log("changed sleep to", devour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
   
})








