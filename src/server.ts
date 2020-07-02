import app from "./app";

/**
 * Start Express server. By separating app definition and run, 
 * it will stop supertest complaining TCPSERVERWRAP and forcing exist
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
