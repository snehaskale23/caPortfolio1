const activities = [
    "Read a book",
    "Watch a movie",
    "Go for a walk",
    "Learn a new recipe",
    "Try a new hobby",
    "Listen to a podcast",
    "Do a puzzle",
    "Exercise or do yoga",
    "Explore a new playlist",
    "Write in a journal",
    "Try drawing or painting",
    "Organize your space",
    "Learn a new language",
    "Call a friend or family member",
    "Watch a documentary",
    "Try meditation",
    "Visit a museum virtually",
    "Plan your next trip",
    "Start a DIY project",
    "Play a board game or video game"
];

function getActivity(){
    return `Activity: ${activities[Math.floor(Math.random()*activities.length)]}`;
}


const prankApp = {
prank: {
    prankList: [
    "Switch the sugar with salt",
    "Put tape over the sensor on a mouse",
    "Fake a spider using a string",
    "Set all clocks forward an hour",
    "Change the ringtone on the phone",
    "Wrap someone's desk in aluminum foil",
    "Use a whoopee cushion",
    "Fake a spilled drink with glue"
    ]
},
target: {
    people: [
    "Sister",
    "Brother",
    "Friend",
    "Coworker",
    "Roommate",
    "Neighbor",
    "Parent",
    "Significant other"
    ]
},
extremelybored: {
    boredom: [
    "Count the tiles on the ceiling",
    "Stare at the wall",
    "Watch paint dry",
    "Rearrange your sock drawer",
    "Alphabetize your spice rack",
    "Read the dictionary",
    "Try to name all the states in alphabetical order",
    "Organize files on your computer",
    "Watch an infomercial",
    "Test every pen you own to see if it works"
    ]
}
};

function getPrank(){
    let prankTask = prankApp.prank.prankList[Math.floor(Math.random()*prankApp.prank.prankList.length)];
    let prankPerson = prankApp.target.people[Math.floor(Math.random()*prankApp.target.people.length)];
    return `Prank to do : ${prankTask}\nTarget: ${prankPerson}`;
}
function boredom(){
    return `For Extreme Boredom: ${prankApp.extremelybored.boredom[Math.floor(Math.random()*prankApp.extremelybored.boredom.length)]}`;
}

function activityGenerator(){
    console.log(getActivity());
    console.log(getPrank());
    console.log(boredom());
}

activityGenerator()