import express from "express";
import { Request, Response, NextFunction } from "express";

import { auth, credential, initializeApp } from "firebase-admin";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import admin from "firebase-admin"
import { send } from "process";
import FirebaseAppConfig from "./Firebase/FirebaseAppConfig"

const app = express();
const PORT = 8080;

const defaultFirebaseApp = admin.initializeApp({
    credential: admin.credential.cert('./firebase/firebasesdkkey.json')
});

const fbAuth = getAuth(FirebaseAppConfig.app);

interface token {
    stsTokenManager: {
        accessToken: string
    }
}
async function authorize(req: Request, resp: Response, next: NextFunction) {
    const anonymousPaths = ['/test'];

    if (anonymousPaths.includes(req.path)) {
        return next();
    }
    else {
        try {
            let token = req.headers['authorization'] ?? "";
            if (token === undefined) {
                resp.status(403).send({ message: "Invalid token" })
            }

            const isAuthenticated = await defaultFirebaseApp.auth().verifyIdToken(token);
            //    const loginResponse = await signInWithEmailAndPassword(fbAuth,'alam@gmail.com','123456');


            //         loginResponse.user.getIdToken().then(function (idToken) {
            //             console.log(idToken);
            //         });
            //     const response =  await defaultFirebaseApp.auth().verifyIdToken(token??"");
            resp.status(200).send(token);

        } catch (error) {
            resp.status(500).send(error);
        }

    }
}

app.all("*", authorize)

app.get('/', async (req, res) => {

    try {


        let response = await defaultFirebaseApp.auth().createUser({

            email: "Alam@gmail.com",
            password: "123456"
        })

        res.send('Ok');

    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Excuting on port:${PORT}`);
});
