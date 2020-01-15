import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

//UI for pickupSaving price

const PickupSavings =(props)=>{
    const tooltip=(
        <Tooltip id="tooltip">
            <p>Pick up from store helps cut costs, and we pass savings on to you</p>
        </Tooltip>
    )
    return(
        <Row className="show-grid">
            <Col md={6}>
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                    <div style={styles.pickupSavings}>Pickup Savings</div>
                </OverlayTrigger>
            </Col>
            <Col md={6} style={styles.totalSavings}>{`$${props.price}`} </Col>
        </Row>
    )
}

const styles={
    pickupSavings:{
        textDecoration: 'underline',
    },
    totalSavings:{
        color: 'red',
        fontWeight: 700,

    }
}

export default PickupSavings;