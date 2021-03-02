import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import News from "./components/News/News";
import {Route, withRouter} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Commons/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <SuperDialogsContainer store={this.props.store}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/musics' component={Musics}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

