//NOTES
/*
  this will be a star trek message generator. MVP is currently slated to be an array of trek quotes that load each time index.js gets run. This is fairly simplistic so I'm trying to think of ways to spice this up. Some thoughts:
    - include the Date and time along with the quote to give it some temporal relatability?
    - maybe turn this array into an object where each key is a different character, the values of which being their quotes
    - maybe depending on the day you could get a different character and one of their quotes?

*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date use date object to personalize message

//object of star trek quotes - seven characters, 1 for each day

const trekQuotes = {
  kirk: ["How we deal with death is at least as important as how we deal with life.", "They used to say that if man was meant to fly, he’d have wings. But he did fly. He discovered he had to.", "Without freedom of choice there is no creativity. The body dies.", "You know the greatest danger facing us is ourselves, an irrational fear of the unknown. But there’s no such thing as the unknown — only things temporarily hidden, temporarily not understood.", "Perhaps man wasn’t meant for paradise. Maybe he was meant to claw, to scratch all the way."],
  spok: ["Insufficient facts always invite danger.", "Computers make excellent and efficient servants, but I have no wish to serve under them.", "The needs of the many outweigh the needs of the few, or the one.", "n critical moments, men sometimes see exactly what they wish to see.", "Loss of life is to be mourned, but only if the life was wasted.", "You Earth people have glorified violence for forty centuries. But you imprison those who employ it privately.", "It is the lot of 'man' to strive no matter how content he is."],
  picard: ["It is possible to commit no mistakes and still lose. That is not weakness, that is life.", "Seize the time... Live now! Make now always the most precious time. Now will never come again.", "The road from legitimate suspicion to rampant paranoia is very much shorter than we think.", "If we're going to be damned, let's be damned for what we really are.", "You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose."],
  janeway: ["Now This Is How I Prefer The Borg. In Pieces!", "Abandon Ship? The Answer's No. I'm Not Breaking Up The Family.", "It's Never Easy... But If We Turn Our Backs On Our Principles We Stop Being Human.", "You Can't Just Walk Away From Your Responsibilities Because You Made A Mistake.", "You Know As Well As I Do That Fear Only Exists For One Purpose... To Be Conquered."],
  worf: ["Thinking about what you can’t control only wastes energy and creates its own enemy.", "The men do not roar. The women roar. And hurl heavy objects.", "You are human. And among humans, females can achieve anything the males can.", "A warrior does not let a friend face danger alone.", "Do not approach me unannounced, especially when I’m eating!"],
  data: ["Could you please continue the petty bickering? I find it most intriguing.", "I am superior, sir, in many ways, but I would gladly give it up to be human.", "I would gladly risk feeling bad at times, if it also meant that I could taste my dessert.", "Early bird gets the worm? I believe Cmdr. Shelby erred. There is no evidence of avian or crawling vermicular lifeforms on Jouret IV."],
  sisko: ["That might be the most important thing to understand about Humans. It's the unknown that defines our existence. We are constantly searching, not just for answers to our questions, but for new questions.", "There is only one thing I want from you. Find something you love, then do it the best you can.", "Running may help for a little while, but sooner or later the pain catches up with you. And the only way to get rid of it is to stand your ground and face it.", "Even in the darkest moments, you can always find something that will make you smile."]
};

//date object to give day, month, year 

let date = new Date();

const dateObj = {
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear()
};

const dayMap = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wedneday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday'
};

//so I'll also need a random number generator function to give me a random quote 
// I need to cycle through the characters in the trek quotes object and randomly pull one of the characters based on a random number - could use a switch statement but there sounds like a lot of redundant code possibly unless I move that functionality into its module 

const randomNumber = () =>
{
  return Math.floor( Math.random() * 8 )
};

const chooseQuote = (character) =>
{
  return Math.floor( Math.random() * character.length + 1 );
};

let characterPicker = randomNumber();
let trekCharacters = Object.keys( trekQuotes );


//would there be a benefit to doing a for in loop? I don't think theres a need to loop

console.log( trekCharacters[characterPicker] );

