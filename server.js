import express from "express";

const app = express();

app.listen(5500, () => {
  console.log("Listening on port 5500 ya boii");
});
app.get("/greetings/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

app.get("/roll/:number", (req, res) => {
  const numberRoll = req.params.number;
  if (isNaN(numberRoll)) {
    res.send("You must specify a number dickhead");
  } else {
    res.send(`You rolled ${numberRoll}`);
  }
});

app.get("/collectibles/:indexCollectibles", (req, res) => {
  const indexCollectibles = parseInt(req.params.indexCollectibles);
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];
  // if (isNaN(indexCollectibles))  {
  //     res.send("needs to be a number bro");
  // } else {
  res.send(
    `So you want the ${collectibles[indexCollectibles].name}? That'll cost you ${collectibles[indexCollectibles].price}`
  );
});

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  const minPrice = parseInt(req.query["min-price"]);
  const maxPrice = parseInt(req.query["max-price"]);
  const type = req.query.type;

  let filteredShoes = shoes;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  }

  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === type);
  }

  res.send(filteredShoes);
});
