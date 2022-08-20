import axios from 'axios'
import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import Header from '../Dashboard/Header/Header'
import SideBar from '../Dashboard/Sidebar/SideBar'

const AddStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [BusNo, setBusNo] = useState("")
    const [mobile, setMobile] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const resetHandler = () => {
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setBusNo("");
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { data } = await axios.post('/api/student/add', { name, email, password, mobile, BusNo }, {
            headers: {
                "Content-type": "application/json",
            }
        })
        setLoading(false)
        setError(data.error)
        // navigate("/api/student/get")
    };
    return (
        <>
            <Header />
            <div className='d-flex'>
                <SideBar />
                <div className="right_section">
                    {loading && <Loading />}
                    <div className="user_card">
                        <Container >
                            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

                            <Card>
                                <Card.Header>Add a new student</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId="title">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="title"
                                                value={name}
                                                required
                                                placeholder="Enter Name"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="Route Name">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                value={email}
                                                placeholder="Enter Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Passsword</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={password}
                                                placeholder="Enter Password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={mobile}
                                                placeholder="Enter Mobile No"
                                                onChange={(e) => setMobile(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Bus No</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={BusNo}
                                                placeholder="Enter Bus No"
                                                onChange={(e) => setBusNo(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        {/* {loading && <Loading size={50} />} */}
                                        <Button type="submit" variant="primary" className=" submit_login">
                                            Add Student <span>{loading && <Loading />}</span>
                                        </Button>
                                        <Button className="mx-2" onClick={resetHandler} variant="danger">
                                            Reset Feilds
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent