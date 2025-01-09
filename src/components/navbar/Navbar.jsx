"use client" // client side rendering 

// library 
import Link from 'next/link'
import { usePathname } from 'next/navigation';
// react bootstrap 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// css 
import '@/components/navbar/navbar.css'
// icon 
import { IoMdPerson } from "react-icons/io";

function Navigationbar() {
    const pathname = usePathname();
    const isLoggedin = false;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Ocean Data</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* ===================> left nav <========================  */}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll
                    >

                        <li>
                            <Link className={pathname == "/" ? "active-nav nav-link" : "nav-link"} href="/"> Explorer</Link>
                        </li>
                        <li>
                            <Link className={pathname == "/page-1" ? "active-nav nav-link" : "nav-link"} href="/page-1"> Page-1</Link>
                        </li>
                        <li>
                            <Link className={pathname == "/aboutus" ? "active-nav nav-link" : "nav-link"} href="/aboutus"> About us</Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/not-in"> Not-found</Link>
                        </li>

                    </Nav>
                    {/* =============== search form ================= */}
                   
                    {/* ===================> right nav <========================  */}
                    <Nav className="me-2 my-2 my-lg-0"
                    >
                        {
                            isLoggedin ? (
                                <>
                                    <li>
                                        <Link className={pathname == "/me" ? "active-nav nav-link" : "nav-link"} href="/me"> user</Link>
                                    </li>
                                    <li>
                                        <Link className={pathname == "/logout" ? "active-nav nav-link" : "nav-link"} href="/logout"> Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link className={pathname == "/signup" ? "active-nav nav-link" : "nav-link"} href="/signup"> Sign up</Link>
                                    </li>
                                    <li>
                                        <Link className={pathname == "/login" ? "active-nav nav-link" : "nav-link"} href="/login"> Login</Link>
                                    </li>
                                </>
                            )
                        }
                    </Nav>
                    {/* auth functionality  */}
                    <Nav>
                        <li className="nav-item dropdown">
                            <IoMdPerson size="40px" color="green" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu dropdown-menu-end">
                                {/* <li>
                                    <hr className="dropdown-divider" />
                                </li> */}
                                {
                                    isLoggedin ? (
                                        <>
                                            <li>
                                                <Link className={pathname == "/me" ? "active-nav nav-link" : "nav-link"} href="/me"> user</Link>
                                            </li>
                                            <li>
                                                <Link className={pathname == "/logout" ? "active-nav nav-link" : "nav-link"} href="/logout"> Logout</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link className={pathname == "/signup" ? "active-nav nav-link" : "nav-link"} href="/signup"> Sign up</Link>
                                            </li>
                                            <li>
                                                <Link className={pathname == "/login" ? "active-nav nav-link" : "nav-link"} href="/login"> Login</Link>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </li>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;