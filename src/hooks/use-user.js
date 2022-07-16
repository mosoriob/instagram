import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
    const [ activeUser, setActiveUser ] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUid() {
            const [response] = await getUserByUserId(user.uid); 
            setActiveUser({...response});
        }
        if ( user && user.uid ) {
            getUserObjByUid();
        }
    }, [ user ]);

    return {user: activeUser}
}