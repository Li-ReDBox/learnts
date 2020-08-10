import express, { Request, Response } from "express";

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => res.send("The sedulous hyena ate the antelope!"));

app.get("/variable/:arg", (req: Request, res: Response) => {
  console.log(req.params.arg);
  res.send(`I have seen you say this ${req.params.arg}`);
});

app.get("/delimiter/:partOne[.x-]:partTwo", (req: Request, res: Response) => {
  res.send(`part one = ${req.params.partOne}, part two = ${req.params.partTwo}`)
});

app.get('/headers',function(req,res){
  //Express request is a super set of Node's request object, including headers:
  // https://nodejs.org/api/http.html#http_class_http_incomingmessage
	res.send("Request has headers: " + JSON.stringify(req.headers));
});

export default app;