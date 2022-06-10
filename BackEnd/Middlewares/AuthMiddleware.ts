import { Request, Response, NextFunction } from "express";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import admin from "firebase-admin"
import FirebaseAppConfig from "../Firebase/FirebaseAppConfig"
import { GenerateValidationResponse } from "../Exceptions/ValidationHandler";


const firebase = admin.initializeApp({
    credential: admin.credential.cert('./firebase/firebasesdkkey.json')
});

const auth = getAuth(FirebaseAppConfig.app);

async function Login() {

    try {

        const loginResponse = await signInWithEmailAndPassword(auth, 'alam@gmail.com', '123456');
        const token = await loginResponse.user.getIdToken();

    } catch (error) {

        console.log(error);
    }

}


async function AuthorizationHandler(req: Request, resp: Response, next: NextFunction) {

    // anonymous api paths
    const anonymousPaths = ['/', '/api/v1/companies'];

    // verifing if the current path need token validations
    if (!anonymousPaths.includes(req.path)) {

        try {

            // getting token from headers
            let token = req.headers['authorization']?.split(' ')[1] ?? "";
            if (token === undefined) {
                resp.status(403).send({ message: "Invalid token" })
            }

            // verify token with firebase
            await firebase.auth().verifyIdToken(token);

            // if token is valid continue
            next();

        } catch (error) {

            // firebase error
            const firebaseError = (error as FirebaseError);

            if (firebaseError.code === "auth/id-token-expired") {
                const validationResponse = GenerateValidationResponse({ Message: "Token expired", Code: 403 });
                resp.status(403).send(validationResponse)
            }

            if (firebaseError.code === "auth/invalid-id-token" || firebaseError.code === "auth/argument-error") {
                const validationResponse = GenerateValidationResponse({ Message: "Invalid token", Code: 403 });
                resp.status(403).send(validationResponse)
            }

            resp.status(500).send({ Message: "An error has ocurred" });
        }
    }
    return next();

}

export default AuthorizationHandler;