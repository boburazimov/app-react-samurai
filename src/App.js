import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import News from "./components/News/News";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Commons/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

/*Lazy работает только с Suspense, Мы сделали вручную из обычного Suspense HOC withSuspense*/
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error!")
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route exact path='/' render={()=> <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/news' component={News}/>
                        <Route path='/musics' component={Musics}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='' render={() => <div>404 PAGE NOT FOUND</div>}/>
                    </Switch>
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

