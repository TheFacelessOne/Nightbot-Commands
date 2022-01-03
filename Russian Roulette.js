// Get list of viewers and blacklisted names. I encourage you to make your own blacklist on pastebin.com
let x=$(urlfetch json tmi.twitch.tv/group/user/USERNAME/chatters);
let b=$(urlfetch json pastebin.com/raw/NQ70cRzW);

// Define variables
let xv = x.chatters;
let p = [];
let d = "";

// Deconstructs the object into just usernames and removes blacklisted names
Object.keys(xv).forEach(y => p = p.concat(xv[y]));
let u = p.length ;
for (let t = 0; t < u; t++) {
  if (b.includes(p[t])) p.splice(t, 1); u--
}

// Picks people to "kill"
for (let r = $(query); r > 0; r--) {
  d = "@" + p[0] + " " + d;
  p.splice(0, 1)
};

// Returns list
d
