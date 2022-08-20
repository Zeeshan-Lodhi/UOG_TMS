import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Accordion, Button, Card, Container, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loading from '../../components/Loading'
import Header from '../Dashboard/Header/Header'
import SideBar from '../Dashboard/Sidebar/SideBar'

const Students = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("/api/student/get")
        setStudents(data)
        setLoading(false)
    }
    const deleteHandler = (id) => {
        window.confirm("Are you sure?")
        axios.delete(`/api/student/delete/${id}`)
        window.location.reload(false);
    }
    useEffect(() => {
        fetchBuses()
    }, [])

    return (
        <>
            <Header />
            <div className='d-flex'>
                <SideBar />
                <div className="right_section">
                    {loading && <Loading />}
                    <div className="user_card">
                        <Container>
                            <NavLink to="/api/student/add">
                                <Button style={{ marginLeft: 0, marginBottom: 6, color: "" }} size="lg" className='submit_login'>
                                    Addd a new student
                                </Button>
                            </NavLink>
                            {
                                students.map((elm) => {
                                    return (
                                        <Accordion className='mb-2' key={elm.id}>
                                            <Card >
                                                <Card.Header style={{ display: "flex" }}>
                                                    <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                        <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >Name : {elm.name}</Accordion.Toggle>
                                                    </span>
                                                    <div >
                                                        <Button variant="danger" className="mx-2"
                                                            onClick={() => deleteHandler(elm.id)}
                                                        > Delete</Button>
                                                    </div>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <div className="d-flex justify-content-between">
                                                            <p>Email : {elm.email}</p>
                                                            <p>Bus No : {elm.BusNo}</p>
                                                        </div>

                                                        <div className="d-flex justify-content-between">
                                                            <p>Name : {elm.name}</p>
                                                            <p>Mobile : {elm.mobile}</p>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    )
                                })}

                        </Container >
                    </div>
                </div>
            </div>
        </>
    )
}
export default Students