import React from 'react';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import Profile from "../Profile/Profile";
import s from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <Sidebar/>
                <div className={s.main}>
                    <Route path="/profile" component={Profile} />

                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;