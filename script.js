var commandLine = document.getElementById("cmdline");
var siteConsole = document.getElementById("sitecmd");
var output = document.getElementById("cmdoutput");

function runCmdLine() {
    //console.log(commandLine.value);

    let userCMD = commandLine.value.toLowerCase().match(/("[^"]+"|[^"\s]+)/g);

    console.log(userCMD);



    switch (userCMD[0]) {
        case "help":
            output.innerHTML = "Here's a list of commands:<br>";
            break;

        case "contact":
            if (userCMD[1] == undefined) {
                output.innerHTML = "Here's some of my contact info:<br>";
            } else {
                output.innerHTML = "Error: " + userCMD[1] + " is not a valid argument for 'contact'.";
            }
            break;
        
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
                output.innerHTML = "Error: Destination not specified";
            } else {
                output.innerHTML = "Error: " + userCMD[1] + " is not a valid argument for 'cd'.";
            }
            break;

        default:
            output.innerHTML = "Error: " + userCMD[0] + " is not a recognized command.<br>Type 'help' for a list of commands.";

    }
}

siteConsole.addEventListener("submit", runCmdLine);