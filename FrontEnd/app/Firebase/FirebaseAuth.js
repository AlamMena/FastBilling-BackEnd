import { getAuth } from "@firebase/auth";
import app from "./FirebaseAppConfig";

const auth = getAuth(app)

export default auth;