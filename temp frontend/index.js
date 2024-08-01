$(document).ready(function(){
	$("#image").click(function(){
		$(".nav-bar").slideToggle("swing");
	
	});
	
	$(window).resize(function(){
	var w = $(window).width();
	var navBar = $(".nav-bar");
	if (w > 320 & navBar.is(":hidden")){
		navBar.removeAttr("style");
	}
	
	});

});
document.addEventListener("DOMContentLoaded", function() {
    const callList = document.getElementById('callList');
  
    // Sample data of calls
    const calls = [
      { caller: 'John Doe', time: '10:30 AM' },
      { caller: 'Alice Smith', time: '11:45 AM' },
      { caller: 'Bob Johnson', time: '1:15 PM' },
      { caller: 'Alice Smith', time: '11:45 AM' },
      { caller: 'Alice Smith', time: '11:45 AM' },
      { caller: 'Alice Smith', time: '11:45 AM' },
 
    ];
  
    // Populate call list
    calls.forEach(call => {
      const callDiv = document.createElement('div');
      callDiv.classList.add('call');
  
      const callDetailsDiv = document.createElement('div');
      callDetailsDiv.classList.add('call-details');
      callDetailsDiv.innerHTML = `
        <div class="caller-id">${call.caller}</div>
        <div>${call.time}</div>
      `;
      callDiv.appendChild(callDetailsDiv);
  
      const callActionsDiv = document.createElement('div');
      callActionsDiv.classList.add('call-actions');
      callActionsDiv.innerHTML = `
        <button class="accept-btn">Accept</button>
        <button class="decline-btn">Decline</button>
      `;
      callDiv.appendChild(callActionsDiv);
  
      callList.appendChild(callDiv);
  
      // Add event listeners to accept and decline buttons
      const acceptBtn = callActionsDiv.querySelector('.accept-btn');
      acceptBtn.addEventListener('click', () => {
        console.log(`Accepted call from ${call.caller}`);
        // Implement your logic to accept the call here
      });
  
      const declineBtn = callActionsDiv.querySelector('.decline-btn');
      declineBtn.addEventListener('click', () => {
        console.log(`Declined call from ${call.caller}`);
        // Implement your logic to decline the call here
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    const emojiList = document.getElementById('emojiList');
  
    // Sample data of emoji sentiments
    const emojis = [
      { emoji: '😊', sentiment: 'positive' },
      { emoji: '😢', sentiment: 'negative' },
      { emoji: '😐', sentiment: 'neutral' }
    ];
  
    // Populate emoji list
    emojis.forEach(emoji => {
      const emojiDiv = document.createElement('div');
      emojiDiv.classList.add('emoji');
  
      emojiDiv.innerHTML = `
        <div>${emoji.emoji}</div>
        <div>${emoji.sentiment}</div>
      `;
  
      emojiList.appendChild(emojiDiv);
    });
  });



runSpeechRecog = () => {
  document.getElementById("output").innerHTML = "Loading text...";
  var output = document.getElementById('output');
  var action = document.getElementById('action');
  let recognition = new webkitSpeechRecognition();
  recognition.continuous = false; // Set continuous to true
  recognition.interimResults = true; // Get interim results
  recognition.lang = 'en-US'; // Set language to English (United States)
  recognition.onstart = () => {
     action.innerHTML = "Listening...";
  }
  recognition.onend = () => {
    alert("function call")

      runSpeechRecog();
  }
  // recognition.
  recognition.onresult = (e) => {
     var transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
     output.innerHTML = transcript;
     output.classList.remove("hide")
     action.innerHTML = "";
     // Check if the user paused speaking
  }
  recognition.start();
}


runSpeechRecog();


