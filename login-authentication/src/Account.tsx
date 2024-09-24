import React from "react";
import axios from "axios";
import authFetch from "./axiosbase/interseptor";


export default function Account() {
    authFetch.get("accounts").then(y=>{
        console.log(y.data);
    })
    return (
        <div>Account</div>
    )
}