import React, { useEffect, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'

export default function Navigation(props) {
    let user;

    useEffect(() => {
        console.log(props.user)
    })

    if (props.loggedIn) {
        user =
            <Fragment>
                <Navbar.Text>
                    Signed in as: {props.user.name}
                </Navbar.Text>
                <Nav.Item>
                    <Link className={styles.link} to="/logout"> Logout</Link>
                </Nav.Item>
            </Fragment>
    } else {
        <Fragment>
            <Nav.Item>
                <Link className={styles.link} to="/register">Register</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className={styles.link} to="/login"> Login</Link>
            </Nav.Item>
        </Fragment>
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/"> <Navbar.Brand> FastApi Client</Navbar.Brand></Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
