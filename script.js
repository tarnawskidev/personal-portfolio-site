var commandLine = document.getElementById("cmdline");
var siteConsole = document.getElementById("sitecmd");
var output = document.getElementById("cmdoutput");

function runCmdLine() {
    //console.log(commandLine.value);

    let userCMD = commandLine.value.toLowerCase().match(/("[^"]+"|[^"\s]+)/g);
    console.log(userCMD);



    switch (userCMD[0]) {
        //display list of available commands
        case "help":
            output.innerHTML = "Here's a list of commands:<br>cd - navigate to different pages<br>contact - get contact info<br>help - pull up list of available commands";
            break;
        //retrieve contact info
        case "contact":
            if (userCMD[1] == undefined) {
                output.innerHTML = "Here's some of my contact info:<br>";
            } else if (userCMD[1] == "email") {
                output.innerHTML = "You can email me at <a href=\"mailto:dtarnawskilts@gmail.com\">dtarnawskilts@gmail.com<a>.";
            } else if (userCMD[1] == "twitter" || userCMD[1] == "x") {
                output.innerHTML = "I'm not currently on twitter!";
            } else {
                output.innerHTML = "Error: not a valid argument for \"contact\".";
            }
            break;
        //navigate between site pages
        case "cd":
            if (userCMD[1] == "home") {
                window.location.href = "index.html";
            } else if (userCMD[1] == "about") {
                window.location.href = "about.html";
            } else if (userCMD[1] == "projects") {
                window.location.href = "projects.html";
            } else if (userCMD[1] == "contact") {
                window.location.href = "contact.html";
            } else if (userCMD[1] == undefined) {
                output.innerHTML = "Error: Destination for \"cd\" not specified";
            } else {
                output.innerHTML = "Error: not a valid argument for \"cd\".";
            }
            break;

        default:
            output.innerHTML = "Error: not a recognized command.<br>Type \"help\" for a list of commands.";

    }
}

siteConsole.addEventListener("submit", runCmdLine);