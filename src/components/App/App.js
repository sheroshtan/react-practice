import React from 'react';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import Profile from "../Profile/Profile";
import s from './App.module.css';
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header />
                <Sidebar />
                <div className={s.main}>
                    <Route path="/profile"
                           render={() => <Profile data={props.state.profilePage}
                                                  dispatch={props.dispatch}/> }/>

                    <Route path="/dialogs"
                           render={() => <Dialogs data={props.state.dialogsPage}/>} />
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;