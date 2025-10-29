 let count = 0;
    function Updatecount() {
        let word = document.getElementById("wordcounter").value.length;

        if (word) {
            document.getElementById("count").innerText= count;
            count++;
        }
    }
    setInterval(Updatecount(),1000);