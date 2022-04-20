import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import './styles/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col className='left'>
                        <Link to="/">
                            <h1>Blog JS</h1>
                        </Link>
                    </Col>
                    <Col xs={6} className='center'>
                        <Form action='/search' method='POST'>
                            <Form.Control type='search' />
                        </Form>
                    </Col>
                    <Col className='right'>
                        <Nav>
                            <Nav.Item>
                                <LinkContainer to="/login">
                                    <Nav.Link>Iniciar sesión</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            <Nav.Item>
                                <LinkContainer to="/register">
                                    <Nav.Link>Registrarse</Nav.Link>
                                </LinkContainer>
                            </Nav.Item>
                            
                        </Nav>
                        {/* <Nav>
                            <NavDropdown title="username">
                                <NavDropdown.Item>Action 1</NavDropdown.Item>
                                <NavDropdown.Item>Action 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> */}
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header