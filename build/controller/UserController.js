"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    index(req, res) {
        return res.send("Ini adalah Route Index");
    }
    create(req, res) {
        return res.send(req.body);
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
    show(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = new UserController();
