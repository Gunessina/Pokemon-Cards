import express, { response } from "express";
//import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));
//app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", async (req, res) => {
    try {
      const response = await axios.get("https://api.tcgdex.net/v2/en/cards");
      const result = response.data;
      const data = result[Math.floor(Math.random() * result.length)];
      res.render("index.ejs", {image : data.image + "/high.webp" });
    } catch (error) {
      console.error(error.response.data);
      res.render(500);
    }
  });

  app.post("/", async (req, res) => {
    try {
      const response = await axios.get("https://api.tcgdex.net/v2/en/cards");
      const result = response.data;
      const data = result[Math.floor(Math.random() * result.length)];
      res.render("index.ejs", {image : data.image + "/high.webp" });
    } catch (error) {
        console.error(error.response.data);
        res.render(500);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });