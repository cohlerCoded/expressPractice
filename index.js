const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   res.send("<h1>THIS IS AN H1!!!</h1>");
// });
app.get("/cats", (req, res) => {
  res.send("<h1>MEOW!!!</h1>");
});
app.post("/cats", (req, res) => {
  res.send("This is different than a get request!!!");
});
app.get("/dogs", (req, res) => {
  res.send("<h1>WOOF!!!</h1>");
});
app.get("/", (req, res) => {
  res.send("<h1>HOME SWEET HOME</h1>");
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>BROWSING THE ${subreddit.toUpperCase()} SUBREDDIT</h1>`);
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>BROWSING THE ${subreddit.toUpperCase()} SUBREDDIT</h1>`);
});
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>VIEWING THE ${postId.toUpperCase()} ON THE ${subreddit.toUpperCase()} SUBREDDIT</h1>`
  );
});
app.get("/suhduh", (req, res) => {
  res.redirect("http://cohlercoded.com/");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) res.send(`<h1>Please tell me what you would like to search</h1>`);
  res.send(`<h1>Displaying search results for: ${q}</h1>`);
});
app.get("*", (req, res) => {
  res.send("<h1>HUH???</h1>");
});

// /cats => 'meow
// /dogs => 'woof'
// '/'

app.listen(7000, () => {
  console.log("listening on port 7000");
});
