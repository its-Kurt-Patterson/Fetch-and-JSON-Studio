// TODO: add code here
// create handler to wait for window to load
window.addEventListener('load', function() {
    // create get request for the static api
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    }).then(function(json) {
        // define required variables and initialize
        const container = document.getElementById('container');
        let astronauts = '';
        // iterate over the static api and use accumulator
        for (astronaut of json) {
            // create accumulator for astronaut data and html format
            astronauts += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}"/>
                </div>
            `;
        }
        // insert the html into the index html page as required
        container.innerHTML = astronauts;
    });
});