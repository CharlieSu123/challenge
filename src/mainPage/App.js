import React from "react";
import Services from "../Api.js";
import UserTable from "./components/UserTable.js";
export default function App(){
   
    return (
        <div>
            <div id="userTable">
                <h2>All Users</h2>
                <p>Users and their age</p>
                <UserTable/>
            </div>
            <div id="ageTable">
                <UserTable/>
            </div>
        </div>
    )
}