let myinput = document.getElementById("inputbox");
        let lastkeyspan = document.getElementById("lastkey");
        let keylist = document.getElementById("keylist");
        const pressedkeys = [];
        myinput.addEventListener("keydown", (event) => {
            const pressedkey = event.key;
            lastkeyspan.textContent = pressedkey;
            pressedkeys.push(pressedkey);
            const listitem = document.createElement("text");
            listitem.textContent = pressedkey;
            keylist.appendChild(listitem);
        });