import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Accordion, Button, Card, Container, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Loading from '../../components/Loading'
import Header from '../Dashboard/Header/Header'
import SideBar from '../Dashboard/Sidebar/SideBar'

const Buses = () => {
    const [buses, setbuses] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("/api/bus/get")
        setbuses(data)
        console.log(data);
        setLoading(false)
    }
    const deleteHandler = (BusNo) => {
        window.confirm("Are you sure?")
        axios.delete(`/api/bus/delete/${BusNo}`)
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
                            <NavLink to="/api/bus/add">
                                <Button style={{ marginLeft: 0, marginBottom: 6, color: "" }} size="lg" className='submit_login'>
                                    Addd a new bus
                                </Button>
                            </NavLink>
                            {
                                buses?.map((elm) => {
                                    return (
                                        <Accordion className='mb-2' key={elm.busNo}>
                                            <Card >
                                                <Card.Header style={{ display: "flex" }}>
                                                    <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                        <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >Bus No : {elm.BusNo}</Accordion.Toggle>
                                                    </span>
                                                    <div >
                                                        <NavLink
                                                            to={`/api/bus/get/${elm.BusNo}`}
                                                        ><Button className='submit_login'>Update</Button> </NavLink>
                                                        <Button variant="danger" className="mx-2"
                                                            onClick={() => deleteHandler(elm.BusNo)}
                                                        > Delete</Button>
                                                    </div>
                                                </Card.Header>

                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body >
                                                        <div className="d-flex justify-content-between" style={{ color: "#000000cf" }}>
                                                            <p>Bus Type : {elm.BusType}</p>
                                                            <p>PickUp Time : {elm.PickUpTime}</p>
                                                            <p>Drop Time : {elm.DropTime}</p>
                                                        </div>

                                                        <div className="d-flex justify-content-between" style={{ color: "#000000cf" }}>
                                                            <p>Route Name : {elm.RouteName}</p>
                                                            <p>Driver Name : {elm.DriverName}</p>
                                                            <p>Driver Mobile : {elm.DriverMobile}</p>
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
export default Buses