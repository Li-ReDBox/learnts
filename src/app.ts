import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("The sedulous hyena ate the antelope!"));

app.get("/variable/:arg", (req: Request, res: Response) => {
  console.log(req.params.arg);
  res.send(`I have seen you say this ${req.params.arg}`);
});

app.get("/delimiter/:partOne[.-]:partTwo", (req: Request, res: Response) => {
  res.send(`part one = ${req.params.partOne}, part two = ${req.params.partTwo}`)
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on http://localhost:${port}`);
});

