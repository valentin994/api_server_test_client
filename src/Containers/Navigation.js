import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

export default function Navigation(props) {
    let user;
    if (props.loggedIn) {
        user = <Navbar.Text>
            Signed in as: { }
        </Navbar.Text>
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/"> <Navbar.Brand> FastApi Client</Navbar.Brand></Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <Link className={styles.link} to="/register">Register</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={styles.link} to="/login"> Login</Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
