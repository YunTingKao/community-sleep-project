
/**
 * Author: Betty Kao
 * Date: May/4/2021
 *
 * This is the index.js page for index.html
 * This is the javaScript that is used on index.html.
 **/

function start_the_game(){  
  id("whole-section").classList.add("hidden");
  id("first-question").style.display = 'block';
  id("second-question").style.display = 'block';
  id("third-question").style.display = 'block';
  id("fourth-question").style.display = 'block';
  id("fifth-question").style.display = 'block';
  id("next-second-button").style.display = 'block';
  id("next-third-button").style.display = 'block';
  id("next-fourth-button").style.display = 'block';
  id("next-fifth-button").style.display = 'block';
  var x = document.getElementsByClassName("section-below");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
  var x = document.getElementsByClassName("option");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
} 

function active_button(e) {
  // console.log($(e).parent().attr('id'));
  var buttons_active = document.querySelectorAll('#option_container button.active');
  if (buttons_active !== null) {
    [].forEach.call(buttons_active, function(el){
      el.classList.remove("active");
    });
  }

  e.target.classList.add("active");
  imgs = document.querySelectorAll("#imgs img");
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display !== 'none') {
      imgs[i].style.display = 'none';
    }
  }

  var cur_id = e.target.id;
  if(cur_id === "drinking-coffee"){
    id("coffee_will").style.display = 'block';
  } else if (cur_id === "no-blue-light") {
    id("sunglasses_will").style.display = 'block';
  } else if (cur_id === "drinking-alcohol") {
    id("alcohol_will").style.display = 'block';
  } else if (cur_id === "smoking") {
    id("smoking_will").style.display = 'block';
  } else{
    id("character").style.display = 'block';
  }
}

function active_button_q2(e) {
  // console.log($(e).parent().attr('id'));
  var buttons_active = document.querySelectorAll('#q2_option_container button.active');
  if (buttons_active !== null) {
    [].forEach.call(buttons_active, function(el){
      el.classList.remove("active");
    });
  }

  e.target.classList.add("active");
  imgs = document.querySelectorAll("#q2_imgs img");
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display !== 'none') {
      imgs[i].style.display = 'none';
    }
  }

  var cur_id = e.target.id;
  if(cur_id === "doing-hw"){
    id("hw_on_bed_will").style.display = 'block';
  } else if (cur_id === "room-light") {
    id("light_will").style.display = 'block';
  } else if (cur_id === "regular-schedule") {
    id("regular_schedule_will").style.display = 'block';
  } else if (cur_id === "long-nap") {
    id("napping_will").style.display = 'block';
  } else{
    id("q2_character").style.display = 'block';
  }
}

function active_button_q3(e) {
  // console.log($(e).parent().attr('id'));
  var buttons_active = document.querySelectorAll('#q3_option_container button.active');
  if (buttons_active !== null) {
    [].forEach.call(buttons_active, function(el){
      el.classList.remove("active");
    });
  }

  e.target.classList.add("active");
  imgs = document.querySelectorAll("#q3_imgs img");
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display !== 'none') {
      imgs[i].style.display = 'none';
    }
  }

  var cur_id = e.target.id;
  if(cur_id === "brain"){
    id("brain_will").style.display = 'block';
  } else if (cur_id === "meeting") {
    id("boring_meeting_will").style.display = 'block';
  } else if (cur_id === "warm-room") {
    id("warm_room_will").style.display = 'block';
  } else if (cur_id === "all-myths") {
    id("all_myths_will").style.display = 'block';
  } else{
    id("q3_character").style.display = 'block';
  }
}

function active_button_q4(e) {
  // console.log($(e).parent().attr('id'));
  var buttons_active = document.querySelectorAll('#q4_option_container button.active');
  if (buttons_active !== null) {
    [].forEach.call(buttons_active, function(el){
      el.classList.remove("active");
    });
  }

  e.target.classList.add("active");
  imgs = document.querySelectorAll("#q4_imgs img");
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display !== 'none') {
      imgs[i].style.display = 'none';
    }
  }

  var cur_id = e.target.id;
  if(cur_id === "7am"){
    id("7_will").style.display = 'block';
  } else if (cur_id === "9am") {
    id("9_will").style.display = 'block';
  } else if (cur_id === "10am") {
    id("10_will").style.display = 'block';
  } else if (cur_id === "12pm") {
    id("12_will").style.display = 'block';
  } else{
    id("q4_character").style.display = 'block';
  }
}


function active_button_q5(e) {
  // console.log($(e).parent().attr('id'));
  var buttons_active = document.querySelectorAll('#q5_option_container button.active');
  if (buttons_active !== null) {
    [].forEach.call(buttons_active, function(el){
      el.classList.remove("active");
    });
  }

  e.target.classList.add("active");
  imgs = document.querySelectorAll("#q5_imgs img");
  for (i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display !== 'none') {
      imgs[i].style.display = 'none';
    }
  }

  var cur_id = e.target.id;
  if(cur_id === "hr"){
    id("hr_will").style.display = 'block';
  } else if (cur_id === "bp") {
    id("bp_will").style.display = 'block';
  } else if (cur_id === "hunger") {
    id("hunger_will").style.display = 'block';
  } else if (cur_id === "pain") {
    id("pain_will").style.display = 'block';
  } else{
    id("q5_character").style.display = 'block';
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

id("myBtn").addEventListener("click", myFunction);

function myFunction() {
  id("myModal").style.display = "block";
}

/**
   *  Returns an element that mathces the given ID.
   *  @param {string} id - Takes the ID value.
   *  @return {DOMObject} Returns the element that matches the given ID
   */
  function id(id) {
    return document.getElementById(id);
  }
