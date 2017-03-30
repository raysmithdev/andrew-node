$(function() {
    $('.submitButton').on('click', function() {

      var formData = {
        username: 'Ray Smith',
        score: $('.userInput').val()
      }

      $.ajax({
          url : "http://localhost:8080/highScore",
          type: "POST",
          data : formData,
          success: function(response) {
            console.log(response);
          }
      });
    })
});
