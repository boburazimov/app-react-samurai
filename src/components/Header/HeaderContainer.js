import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class HeaderContainer extends Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default compose(
    connect(mapStateToProps, {logout}),
    withAuthRedirect)(HeaderContainer);

// export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);