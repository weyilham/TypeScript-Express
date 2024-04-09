"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
const AuthRoute_1 = __importDefault(require("./routes/AuthRoute"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        dotenv_1.default.config();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Ini adalah Halaman Home!");
        });
        this.app.use("/api/v1/users", UserRoute_1.default);
        this.app.use("/api/v1/auth", AuthRoute_1.default);
    }
}
const app = new App().app;
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port http://localhost:" + port);
    console.log("Press Ctrl+C to quit");
});
