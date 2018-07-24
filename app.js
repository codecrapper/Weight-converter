    
    const poundButton = document.getElementById("poundButton");
    const gramButton = document.getElementById("gramButton");
    const kgButton = document.getElementById("kgButton");
    const ozButton = document.getElementById("ozButton");
    const allButtons = document.querySelectorAll("button");

    // Clicking gram button toggles to gram form/input/button
    gramButton.addEventListener("click", function() {
        clearCardValues();
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
        clearCardValues();
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Kilograms...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        kgButton.classList.add("active");
        weightConversion.kilogramConversion();
    });

    // Clicking ounce button toggles to ounce form/input/button
    ozButton.addEventListener("click", function() {
        clearCardValues();
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Ounces...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        ozButton.classList.add("active");
        weightConversion.ounceConversion();
    });

    // Clicking pound button toggles to pound form/input/button
    poundButton.addEventListener("click", function() {
        clearCardValues();
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").placeholder = "Enter Pounds...";

        for(let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
        }
        poundButton.classList.add("active");
        weightConversion.poundConversion();
    });

    // Clear card values
    function clearCardValues() {
        document.getElementById("lbOutput").innerHTML = "";
        document.getElementById("gramsOutput").innerHTML = "";
        document.getElementById("kgOutput").innerHTML = "";
        document.getElementById("ozOutput").innerHTML = "";
    }

    // Weight conversion methods for different types
    let weightConversion = {
        poundConversion: function() {
            //document.getElementById("output").style.visibility = "hidden";
            document.getElementById("poundCard").setAttribute("hidden", true);
            document.getElementById("gramCard").removeAttribute("hidden", true);
            document.getElementById("kilogramCard").removeAttribute("hidden", true);
            document.getElementById("ounceCard").removeAttribute("hidden", true);

            document.getElementById("weightInput").addEventListener("input", function(event) {
                //document.getElementById("output").style.visibility = "visible";
                let lbs = event.target.value;
                document.getElementById("gramsOutput").innerHTML = (lbs / 0.0022046);
                document.getElementById("kgOutput").innerHTML = (lbs / 2.2046);
                document.getElementById("ozOutput").innerHTML = lbs * 16;
            });
        },
        gramConversion: function() {
            document.getElementById("gramCard").setAttribute("hidden", true);
            document.getElementById("poundCard").removeAttribute("hidden", true);
            document.getElementById("kilogramCard").removeAttribute("hidden", true);
            document.getElementById("ounceCard").removeAttribute("hidden", true);

            document.getElementById("weightInput").addEventListener("input", function(event) {
                let gms = event.target.value;
                document.getElementById("kgOutput").innerHTML = gms / 1000;
                document.getElementById("ozOutput").innerHTML = (gms * 0.035274);
                document.getElementById("lbOutput").innerHTML = (gms * 0.0022046);
            });
        },
        kilogramConversion: function() {
            document.getElementById("kilogramCard").setAttribute("hidden", true);
            document.getElementById("poundCard").removeAttribute("hidden", true);
            document.getElementById("gramCard").removeAttribute("hidden", true);
            document.getElementById("ounceCard").removeAttribute("hidden", true);

            document.getElementById("weightInput").addEventListener("input", function(event) {
                let kgs = event.target.value;
                document.getElementById("gramsOutput").innerHTML = kgs * 1000;
                document.getElementById("lbOutput").innerHTML = (kgs * 2.2046);
                document.getElementById("ozOutput").innerHTML = (kgs * 35.274);

            });
        },
        ounceConversion: function() {
            document.getElementById("ounceCard").setAttribute("hidden", true);
            document.getElementById("poundCard").removeAttribute("hidden", true);
            document.getElementById("gramCard").removeAttribute("hidden", true);
            document.getElementById("kilogramCard").removeAttribute("hidden", true);

            document.getElementById("weightInput").addEventListener("input", function(event) {
                let ozs = event.target.value;
                document.getElementById("gramsOutput").innerHTML = (ozs / 0.0035274);
                document.getElementById("lbOutput").innerHTML = ozs / 16;
                document.getElementById("kgOutput").innerHTML = (ozs / 35.274);

            });
        }
    };

    weightConversion.poundConversion();