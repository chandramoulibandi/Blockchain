import * as express from "express";
import {
  userRoute,
  productRoute,
  orderRoute,
} from "./routes/index";
import * as bodyparser from 'body-parser';
import {mongoConnect} from './db/db';

var app = express();
const port = 3000;


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);

app.listen(port, () => {
  mongoConnect.connection();
  console.log(`Example app listening on port ${port}`);
});
