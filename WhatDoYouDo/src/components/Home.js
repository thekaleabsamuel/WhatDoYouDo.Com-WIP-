import React from "react";
import "./App.css";
import Messages from "./Messages";
import Photo from "./Photo";
import Video from "./Video";
import Navbar from "./Navbar";


function Home () {
    return (
        <fragment>
        <Messages />
        <Photo/>
        <Video/>
        </fragment>
    );

    }
