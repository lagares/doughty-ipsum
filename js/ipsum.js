/** goal: 

  To produce placeholder copy based on the lyrics of poet M. Doughty, erstwhile lyricist of seminal 1990s band Soul Coughing.

  Input:    The lyrics, one verse per array element
  Options:  1. Soul Coughing songs only, solo songs only, or all combined
            2. Number of paragraphs of copy that result
  Output: Doughty Ipsum!

  Note: The least computer-intensive thing to do here would be to take a bunch of lyrics, save them into one big array, choose a number from 0 to array.length-1 which then becomes the first sentence in the first paragraph, then repeat x number of times to form a paragraph, then repeat y number of times according to the desired number of paragraphs. There is absolutely no need to go shuffling an indeterminately large number of lyric verses, then store them somewhere, then pick paragraphs out from the result, when picking random indexes accomplishes the same thing with much less effort.

**/

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
document.addEventListener("DOMContentLoaded", () => {
  //One array per song
  let true_dreams_of_wichita = [
    "Signal got lost to the satellite",
    "Got lost in the ride up to the plunge down",
    "Man sends the ray of the electric light",
    "Sends the impulse through the air down to home",
    "You can stand on the arms of the Williamsburg Bridge crying",
    "Hey man, well this is Babylon",
    "You can fire out on a bus To the outside world down to Louisiana",
    "You can take her with you",
    "I've seen the rains of the real world come forward on the plain",
    "I've seen the Kansas of your sweet little myth",
    "You've never seen it, no",
    "I'm half sick on the drinks you mixed",
    "Through your true dreams of Wichita",
    "Brooklyn like a sea in the asphalt stalks",
    "Push out dead air from a parking garage",
    "Where you stand with the keys and your cool hat of silence",
    "Where you grip her love like a driver's license",
    "I've seen you fire up the gas in the engine valves",
    "I've seen your hand turn saintly on the radio dial",
    "I've seen the airwaves",
    "Pull your eyes towards heaven",
    "Outside Topeka in the phone lines",
    "Her good teeth smile was winding down",
    "Engine sputters ghosts out of gasoline fumes",
    "They say you had it, but you sold it",
    "You didn't want it, no",
    "I'm half drunk on static you transmit",
  ];

  let super_bon_bon = [
    "Move aside and let the man go through",
    "If I stole somebody else's wave to fly up",
    "If I rose up with the avenue behind me",
    "Some kind of verb, some kind of moving thing",
    "Something unseen, some hand is motioning to rise",
    "Too fat, fat you must cut lean",
    "You got to take the elevator to the mezzanine",
    "Chump, change, and it's on, super bon bon",
    "And by the phone I live in fear",
    "Sheer Chance will draw you in to here",
  ];

  let circles = [
    "When you were languishing in rooms I built to foul you in",
    "And when the wind set down in funnel form and pulled you in",
    "I don't need to walk around in circles",
    "When the ghostly dust of violence traces everything",
    "And when the gas runs out just wreck it, you insured the thing",
    "But I can't sigh now that you made the move",
    "It has gone and gone to dogs, lay down on the floor",
    "For the right price I can get everything",
    "Slip into the car, go driving to the farthest star",
  ];

  let screenwriters_blues = [
    "Exits to freeways twisted like knots on the fingers",
    "Jewels cleaving skin between breasts",
    "Your Cadillac breathes four hundred horses over blue lines",
    "You are going to Reseda to make love to a model from Ohio whose real name you don't know",
    "You spin like the Cadillac was overturning down a cliff on television",
    "And the radio is on",
    "And the radioman is speaking",
    "And the radioman says",
    "Women were a curse",
    "So men built Paramount Studios",
    "And men built Columbia Studios",
    "And men built Los Angeles",
    "It is 5 am and you are listening to Los Angeles",
    "Rock and Roll lives",
    "You live in Los Angeles",
    "We are all in some way or another going to Reseda someday to die",
    "And the radioman laughs",
    "The radioman fucks a model too",
    "Gone savage for teenagers with automatic weapons and boundless love",
    "Gone savage for teenagers who are aesthetically pleasing, in other words Fly",
    "Los Angeles beckons the teenagers to come to her on buses",
    "Los Angeles loves Love",
    "I am going to Los Angeles To build a screenplay about lovers who murder each other",
    "I am going to Los Angeles to see my own name on a screen, five feet long and luminous",
    "And the sun has charred the other side of the world and come back to us",
    "And painted the smoke over our heads an imperial violet",
  ];

  let idiot_kings = [
    "Everything is going up",
    "Everything is going as planned, yeah",
    "Everything moves along",
    "Everything is fine, fine, fine",
    "Oh I could be condemned to Hell for every sin but littering",
    "I could slip on the East River and crash into Queens all skittering",
    "I've seen the cops and the robbers, and I know they dance the same.",
    "I've seen a half a zillion girls and haven't spoken to a single one of them",
    "Batting in the light, my reptile-lidded eyes",
    "And all this strung end to end is wider than the mind",
    "And this cool I've been playing I have been playing too long now",
    "My capacities are dwindling 'til they're gone gone gone",
  ];

  let jennifers = [
    "I went to school with 27 Jennifers, 16 Jenns, 10 Jennies, and then there was her",
    "It's the sweet shine of",
    "Yeah, force of divine love",
    "The blessed arrival of you",
    "You might be the one that I've been seeking for",
    "You might be the strange delightful",
    "You might be the girly who shall end all girls",
    "You might be the sweet unspiteful",
    "I rode the bus with 27 Jennifers, 15 Jenns, 10 Jennies disapproved of her",
  ];

  let no_sc = jennifers;
  let only_sc = true_dreams_of_wichita.concat(super_bon_bon, circles, screenwriters_blues, idiot_kings);
  let words_all = no_sc.concat(only_sc);

  //Start event listener for click
  const form = document.getElementById("ipsum-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let paragraphs = ""; // multiple paragraphs, what the user sees

    //Determine which of the check boxes is checked
    let chosen_button = document.querySelector("#ipsum-form input[name='choice']:checked").value; // "everything" is checked in HTML by default

    //Grab the paragraph number the user enters
    let num_of_pars = document.getElementById("paragraph_count").value || 1; // at least one paragraph, no?

    //This will hold all the lyrics the user has chosen
    let chosen_words = [];

    // which array of words to show the user
    if (chosen_button == "everything") {
      chosen_words = words_all;
    } else if (chosen_button == "no-sc") {
      chosen_words = no_sc;
    } else {
      chosen_words = only_sc;
    }

    for (let i = 0; i < num_of_pars; i++) {
      let paragraph = "";
      //Vary the number of sentences in each paragraph randomly
      let sentences_per_paragraph = Math.floor(Math.random() * chosen_words.length) + 1;
      for (let j = 0; j < sentences_per_paragraph; j++) {
        let rnum = Math.floor(Math.random() * chosen_words.length); // random num from 0 to arr.len
        paragraph += `${chosen_words[rnum]}.`; // concatenate a random verse
      }
      paragraphs += `<p>${paragraph}</p>`;
    }

    document.getElementById("print-paragraphs").innerHTML = paragraphs;
  });
});
