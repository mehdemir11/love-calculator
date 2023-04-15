prompt("What is your name?");
prompt("What is their name?");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > "85") {
  alert(
    "Your love score is : " +
      loveScore +
      "% " +
      "You love each other like Kanye loves Kanye."
  );
} else {
  alert("Your love score is : " + loveScore + "%");
}
