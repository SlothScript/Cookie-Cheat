var CheatyThing = window.prompt("What thing do you want to do?\n[A] Auto click n times\b[B] Add n cookies\n[C] Add all of everything");
if (CheatyThing == "A") {
  var n = window.prompt("How many times should it autoclick?")
  while(i != n) {
    Game.ClickCookie();
    i = i + 1;
  }
} else if (CheatyThing == "B") {
  var n = window.prompt("How many cookies?");
  Game.cookies = Game.cookies + int(n);
} else if (CheatyThing == "C") {
  Game.cookies = 26723462839475619873;
  Game.heavenlyChips = 35235234523453;
  Game.lumps = 2545243529438523452345;
}
