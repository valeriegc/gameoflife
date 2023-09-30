import express from "express";
import { path } from "express/lib/application";
const app = express();
const PORT = 3000;
app.use("/static", express.static(path.join(__dirname, "static")));
app.listen(PORT, (error) => {
    if (!error) {
        console.log("App running succesfully on port 3000");
    }
    else {
        console.log("Error occurred :", error);
    }
});
