// Qno 5Write a JavaScript program that takes a month number (1–12) and displays the corresponding season:

// Winter: 12, 1, 2
// Spring: 3, 4, 5
// Summer: 6, 7, 8
// Autumn: 9, 10, 11

let month="12";
switch(month){
    case "1":console.log("Winter");break;
    case "2":console.log("Winter");break;
    case "12":console.log("Winter");break;

    case "3":console.log("Spring");break;
    case "4":console.log("Spring");break;
    case "5":console.log("Spring");break;

    case "6":console.log("Summer");break;
    case "7":console.log("Summer");break;
    case "8":console.log("Summer");break;
    
    case "9":console.log("Autumn");break;
    case "10":console.log("Autumn");break;
    case "11":console.log("Autumn");break;
    
    
    default:("Invalid month");
}