import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

export default function useUser() {
    const [ activeUser, setActiveUser ] = useState({});
    const { user } = useContext(UserContext);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        async function getUserObjByUid() {
            const userObj = await firebase.firestore().collection("users").doc(user.uid).get();
            setActiveUser(userObj.data());
        }
        if ( user && user.uid ) {
            getUserObjByUid();
        }
    }, [ user ]);

    return {user: activeUser}
}