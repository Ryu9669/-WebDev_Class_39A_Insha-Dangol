// Qno 4 Write a JavaScript program that takes a traffic light color ("red", "yellow", or "green") and displays:

// "Stop" for red
// "Get Ready" for yellow
// "Go" for green
// "Invalid color" for any other input
// Use a switch statement.

let trafficlightcolor="Green";
switch(trafficlightcolor){
    case "Red":console.log("Stop");break;
    case "Yellow":console.log("Get Ready");break;
    case "Green":console.log("GO");break;
    
    default:("Invalid color");
}