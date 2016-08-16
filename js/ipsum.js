

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

//Start event listener for click
$("#ipsum-form").submit(function() { 
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
  
//Grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//Define var words as an empty array
  var words = [];

//One array per song
var true_dreams_of_wichita = [ "Signal got lost to the satellite", "Got lost in the ride up to the plunge down", "Man sends the ray of the electric light", "Sends the impulse through the air down to home", "You can stand on the arms of the Williamsburg Bridge crying", "Hey man, well this is Babylon", "You can fire out on a bus To the outside world down to Louisiana", "You can take her with you", "I've seen the rains of the real world come forward on the plain", "I've seen the Kansas of your sweet little myth", "You've never seen it, no", "I'm half sick on the drinks you mixed", "Through your true dreams of Wichita", "Brooklyn like a sea in the asphalt stalks", "Push out dead air from a parking garage", "Where you stand with the keys and your cool hat of silence", "Where you grip her love like a driver's liscense", "I've seen you fire up the gas in the engine valves", "I've seen your hand turn saintly on the radio dial", "I've seen the airwaves", "Pull your eyes towards heaven", "Outside Topeka in the phone lines", "Her good teeth smile was winding down", "Engine sputters ghosts out of gasoline fumes", "They say you had it, but you sold it", "You didn't want it, no", "I'm half drunk on static you transmit"];
var super_bon_bon = [ "Move aside and let the man go through", "If I stole somebody else's wave to fly up", "If I rose up with the avenue behind me", "Some kind of verb, some kind of moving thing", "Something unseen, some hand is motioning to rise", "Too fat, fat you must cut lean", "You got to take the elevator to the mezzanine", "Chump, change, and it's on, super bon bon", "And by the phone I live in fear", "Sheer Chance will draw you in to here" ];
var circles = [ "When you were languishing in rooms I built to foul you in", "And when the wind set down in funnel form and pulled you in", "I don't need to walk around in circles", "When the ghostly dust of violence traces everything", "And when the gas runs out just wreck it, you insured the thing", "But I can't sigh now that you made the move", "It has gone and gone to dogs, lay down on the floor", "For the right price I can get everything", "Slip into the car, go driving to the farthest star" ];
var screenwriters_blues = [ "Exits to freeways twisted like knots on the fingers", "Jewels cleaving skin between breasts", "Your Cadillac breathes four hundred horses over blue lines", "You are going to Reseda to make love to a model from Ohio whose real name you don't know", "You spin like the Cadillac was overturning down a cliff on television", "And the radio is on", "And the radioman is speaking", "And the radioman says", "Women were a curse", "So men built Paramount Studios", "And men built Columbia Studios", "And men built Los Angeles", "It is 5 am and you are listening to Los Angeles", "Rock and Roll lives", "You live in Los Angeles", "We are all in some way or another going to Reseda someday to die", "And the radioman laughs", "The radioman fucks a model too", "Gone savage for teenagers with automatic weapons and boundless love", "Gone savage for teenagers who are aesthetically pleasing, in other words Fly", "Los Angeles beckons the teenagers to come to her on buses", "Los Angeles loves Love", "I am going to Los Angeles To build a screenplay about lovers who murder each other", "I am going to Los Angeles to see my own name on a screen, five feet long and luminous", "And the sun has charred the other side of the world and come back to us", "And painted the smoke over our heads an imperial violet" ];
var idiot_kings = [ "Everything is going up", "Everything is going as planned, yeah", "Everything moves along", "Everything is fine, fine, fine", "Oh I could be condemned to Hell for every sin but littering", "I could slip on the East River and crash into Queens all skittering", "I've seen the cops and the robbers, and I know they dance the same.", "I've seen a half a zillion girls and haven't spoken to a single one of them", "Batting in the light, my reptile-lidded eyes", "And all this strung end to end is wider than the mind", "And this cool I've been playing I have been playing too long now", "My capacities are dwindling 'til they're gone gone gone" ];

var jennifers = [ "I went to school with 27 Jennifers, 16 Jenns, 10 Jennies, and then there was her", "It's the sweet shine of", "Yeah, force of divine love", "The blessed arrival of you", "You might be the one that I've been seeking for", "You might be the strange delightful", "You might be the girly who shall end all girls", "You might be the sweet unspiteful", "I rode the bus with 27 Jennifers, 15 Jenns, 10 Jennies disapproved of her" ]

//Create an array of words to randomize later
var no_sc = jennifers;
var only_sc = true_dreams_of_wichita.concat(super_bon_bon, circles, screenwriters_blues, idiot_kings);
var words_all = no_sc.concat(only_sc);

//ELSE IF determines which array of words to show the user
  if (chosen_button == "everything") {
   words = words_all;
} else if (chosen_button == "no-sc") {
   words = no_sc; 
} else {
words = only_sc }

//Vary the number of sentences in each paragraph randomly
var sentence_number = Math.floor( (Math.random() + 1) * 2 );

//Use a function that randomizes the contents of an array
  function fisherYates(words) {
    var i = words.length, j, tempi, tempj;
    if ( i == 0 ) return false;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       tempi = words[i];
       tempj = words[j];
       words[i] = tempj;
       words[j] = tempi;
       }
       return words;
    }

//Start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';

//Start the second FOR loop that builds sentence groups from sentences
for ( var y = 0; y < sentence_number; y++ ) {

//Start the third FOR loop that builds paragraphs from sentence groups
for ( var x = 0; x < words.length; x++ ) {

//Create a variable for the randomized array of words
  var words_random = fisherYates(words).toString().replace(/,/g, '. ');

//Convert array to string with no commas or quotes, add period to end
  var sentence = words_random;

//Capitalize first letter in string
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var sentence_capped = capitalizeFirstLetter(sentence);
//End the first FOR loop that builds sentences from words
          }
  sentence_group += sentence_capped;  
//End the second FOR loop that builds sentence groups from sentences
       }
  paragraphs+='<p>' + sentence_group + '</p>';
//End the third FOR loop that builds and spaces paragraphs from sentence groups
    }

$("#print-paragraphs").empty().html(paragraphs);

//Prevent form from actually submitting so page does not reload
return false; 

//End jQuery event listener
  });

//End document ready
});
 
