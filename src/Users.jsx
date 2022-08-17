import { fetchData } from "./apiReq";
import { useState, useEffect } from "react";
import {Loading} from "./Loading";

export const Users=()=>{
    
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetchData().then((data) => setUsers(data));
        } , 100);     
    } , []);
    
    useEffect(() => {
        if(users){
            setLoading(false);
        }
    } , [users]);

    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                    {
                        users && users.map((user) => {
                            const {id, name, username, email} = user;
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                </tr>
                            )
                        })
                    }
                        


                
            </table>
            {users?.length === 0 && <p>No users found</p>}
            {/* {loading && <Loading/>} */}
        </div>
    )
}