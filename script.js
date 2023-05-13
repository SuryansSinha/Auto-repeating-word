var words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
        var currentWord = 0;

        function changeWord() {
            document.getElementById("word").innerHTML = words[currentWord];
            currentWord++;
            if (currentWord >= words.length) {
                currentWord = 0;
            }
        }

        setInterval(changeWord, 1000);
