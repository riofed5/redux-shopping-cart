import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';

const Subtotal= (props)=>{

        return (
            <Row className="show-grid">
                <Col md={6}>Subtotal</Col>
                <Col md={6}> {`$${props.price}`}</Col>
            </Row>
        )
}

export default Subtotal;