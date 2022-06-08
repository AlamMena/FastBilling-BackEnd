"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("firebase/auth");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const FirebaseAppConfig_1 = __importDefault(require("./Firebase/FirebaseAppConfig"));
const app = (0, express_1.default)();
const PORT = 8080;
const defaultFirebaseApp = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert('./firebase/firebasesdkkey.json')
});
const fbAuth = (0, auth_1.getAuth)(FirebaseAppConfig_1.default.app);
function authorize(req, resp, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const anonymousPaths = ['/test'];
        if (anonymousPaths.includes(req.path)) {
            return next();
        }
        else {
            try {
                let token = (_a = req.headers['authorization']) !== null && _a !== void 0 ? _a : "";
                if (token === undefined) {
                    resp.status(403).send({ message: "Invalid token" });
                }
                const isAuthenticated = yield defaultFirebaseApp.auth().verifyIdToken(token);
                //    const loginResponse = await signInWithEmailAndPassword(fbAuth,'alam@gmail.com','123456');
                //         loginResponse.user.getIdToken().then(function (idToken) {
                //             console.log(idToken);
                //         });
                //     const response =  await defaultFirebaseApp.auth().verifyIdToken(token??"");
                resp.status(200).send(token);
            }
            catch (error) {
                resp.status(500).send(error);
            }
        }
    });
}
app.all("*", authorize);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield defaultFirebaseApp.auth().createUser({
            email: "Alam@gmail.com",
            password: "123456"
        });
        res.send('Ok');
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
