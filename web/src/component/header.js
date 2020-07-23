import React from 'react';
import { browserHistory } from 'react-router';
class Header extends React.Component {
    state = {
        name: "",
        isLoggedIn: false
    };

    handleCLick = () => {
        localStorage.clear();
        this.setState({ isLoggedIn: false })
        browserHistory.push(`${process.env.PUBLIC_URL}/`);
    }
    componentDidMount() {
        this.handleInfo();
        browserHistory.listen(location => {
            this.handleInfo();
        });
    }

    handleInfo = () => {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"));
            this.setState({ name: `${user.fname}`, isLoggedIn: true })
        }
    }
    dashboardHandler = () => {
        browserHistory.push(`${process.env.PUBLIC_URL}/`);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="row">
                        <div className="col-lg-6">
                            <p style={{ cursor: "pointer" }} className="header_text" onClick={this.dashboardHandler}>Git search</p>
                        </div>
                        
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }

}

export default Header;