import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Container, } from 'react-bootstrap'
import Loading from '../../components/Loading'
import Header from '../Dashboard/Header/Header'
import SideBar from '../Dashboard/Sidebar/SideBar'

const Driver = () => {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBuses = async () => {
        setLoading(true)
        const { data } = await axios.get("/api/drivers/get")
        setDrivers(data)
        setLoading(false)
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
                            <h2 className='text-center mb-3'>List of all drivers</h2>
                            {drivers.map((elm) => {
                                return (
                                    <Accordion className='mb-2' key={elm.id} >
                                        <Card >
                                            <Card.Header style={{ display: "flex" }}>
                                                <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18, }}>
                                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0" >Driver Name : {elm.DriverName}</Accordion.Toggle>
                                                </span>

                                            </Card.Header>

                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between user_details">
                                                        <h6>Address : {elm.DriverAddress}</h6>
                                                        <h6>Number : {elm.DriverMobile}</h6>
                                                        <h6>Bus No : {elm.BusNo}</h6>
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>

                                )
                            })}
                        </Container>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Driver