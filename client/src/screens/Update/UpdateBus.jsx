import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Dashboard/Header/Header'
import SideBar from '../Dashboard/Sidebar/SideBar'

const UpdateBus = () => {

    const [BusNo, setBusNo] = useState("")
    const [RouteName, setRouteName] = useState("")
    const [PickUpTime, setPickUpTime] = useState("")
    const [DropTime, setDropTime] = useState("")
    const [BusType, setBusType] = useState("")

    const navigate = useNavigate()
    const params = useParams()

    const resetHandler = () => {
        setBusNo("");
        setDropTime("");
        setPickUpTime("");
        setRouteName("");
        setBusType("");
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(params.id);
        await axios.put(`/api/bus/update/${params.id}`, { BusNo, PickUpTime, DropTime, BusType }, {
            headers: {
                "Content-type": "application/json",
            }
        })
        // resetHandler();
        navigate("/buses");
    };


    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/api/bus/get/${params.id}`);
            setBusNo(data[0].BusNo);
            setBusType(data[0].BusType);
            setDropTime(data[0].DropTime);
            setPickUpTime(data[0].PickUpTime);
            // setRouteName(data[0].RouteName);
        };

        fetching();
    }, [params.id]);
    return (
        <>
            <Header />
            <div className='d-flex'>
                <SideBar />
                <div className="right_section">
                    <div className="user_card">
                        <Container className='mt-4'>

                            <Card>
                                <Card.Header>Update bus</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId="title">
                                            <Form.Label>Bus No</Form.Label>
                                            <Form.Control
                                                type="title"
                                                value={BusNo}
                                                required
                                                placeholder="Enter Bus No"
                                                onChange={(e) => setBusNo(e.target.value)}
                                            />
                                        </Form.Group>


                                        <Form.Group controlId="content">
                                            <Form.Label>PickUp Time</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={PickUpTime}
                                                placeholder="Enter Pickup Time"
                                                onChange={(e) => setPickUpTime(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="content">
                                            <Form.Label>Drop Time</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={DropTime}
                                                placeholder="Enter Drop Time"
                                                onChange={(e) => setDropTime(e.target.value)}
                                                required
                                            />
                                        </Form.Group>


                                        <Form.Group controlId="content">
                                            <Form.Label>Bus Type</Form.Label>
                                            <Form.Control
                                                type="content"
                                                value={BusType}
                                                placeholder="Enter Bus Type"
                                                onChange={(e) => setBusType(e.target.value)}
                                                required
                                            />
                                        </Form.Group>

                                        {/* {loading && <Loading size={50} />} */}
                                        <Button type="submit" variant="primary" className="mt-3 submit_login">
                                            Update Bus
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

export default UpdateBus