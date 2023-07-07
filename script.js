   // Set the launch date and time (adjust accordingly)
   var launchDate = new Date("July 15, 2023 23:00:00").getTime();

   // Update the countdown timer every second
   var countdown = setInterval(function() {
     // Get today's date and time
     var now = new Date().getTime();
     
     // Find the distance between now and the launch date
     var distance = launchDate - now;
     
     // Calculate time units
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     // Display the countdown
     document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
     
     // If the countdown is finished, display a message
     if (distance < 0) {
       clearInterval(countdown);
       document.getElementById("countdown").innerHTML = "Launched!";
     }
   }, 1000);