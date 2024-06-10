<script>
    import LfsrRand from "@scripts/lfsr-rand.js";
    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now / 8.64e7);
    var rand = new LfsrRand(fullDaysSinceEpoch + 16);
    var r1 = rand.randInt(0, 360);
    var r2 = rand.randInt(0, 360);

    let guess = "";
    let result = "";

    function handleGuess(guess, r1, r2) {
        if (guess == "") {
            return "No input";
        }
        var deltaAngle = Math.abs(r2 - r1);
        var guessNumber = parseInt(guess);
        if (isNaN(guessNumber)) {
            return "Not a number";
        }
        if (guessNumber > deltaAngle) {
            return "Too high";
        }
        if (guessNumber < deltaAngle) {
            return "Too low";
        }
        return "Got it!!!"
    }
</script>

<input bind:value={guess} placeholder="Place guess" />
<button on:click={() => (result = handleGuess(guess, r1, r2))}> Guess </button>
<p>{result || "Please guess."}</p>
