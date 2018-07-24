    
    const poundButton = document.getElementById("poundButton");
    const gramButton = document.getElementById("gramButton");
    const kgButton = document.getElementById("kgButton");
    const ozButton = document.getElementById("ozButton");
    const allButtons = document.querySelectorAll("button");

    // Clicking gram button toggles to gram form/input/button
    gramButton.addEventListener("click", function() {
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Grams...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        gramButton.classList.add("active");
        weightConversion.gramConversion();
    });

    // Clicking kilogram button toggles to kilogram form/input/button
    kgButton.addEventListener("click", function() {
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Kilograms...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        kgButton.classList.add("active");
    });

    // Clicking ounce button toggles to ounce form/input/button
    ozButton.addEventListener("click", function() {
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Ounces...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        ozButton.classList.add("active");
    });

    // Clicking pound button toggles to pound form/input/button
    poundButton.addEventListener("click", function() {
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Pounds...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        poundButton.classList.add("active");
    });

    // Weight conversion methods for different types
    let weightConversion = {
        poundConversion: function() {
            document.getElementById("output").style.visibility = "hidden";
            document.getElementById("poundCard").setAttribute("hidden", true);

            document.getElementById("weightInput").addEventListener("input", function(event) {
                document.getElementById("output").style.visibility = "visible";
                let lbs = event.target.value;
                document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
                document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
                document.getElementById("ozOutput").innerHTML = lbs * 16;
            });
        },
        gramConversion: function() {
            document.getElementById("gramCard").setAttribute("hidden", true);
            document.getElementById("poundCard").removeAttribute("hidden", true);
        },
    };

    weightConversion.poundConversion();