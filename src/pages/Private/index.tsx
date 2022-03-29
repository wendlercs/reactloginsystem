import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {

    const auth = useContext(AuthContext);

    return(
        <div>
            <h2>Private Page</h2>

            Hello {auth.user?.name}!!
            
        </div>
    )
};