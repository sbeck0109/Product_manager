// const port = 8000;
const express = require("express");
const cors = require("cors")
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/routes/Product.routes')(app);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("listening at port 8000")
})

// app.listen(port, () => console.log(`listening on port: ${port}`));
