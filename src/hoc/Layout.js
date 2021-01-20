import React, { Component } from 'react'
import Navbar from '../components/Navigation/NavBar';

class Layout extends Component {
    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;
