import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap';

const TaxFees=(props)=>{
    return(
        <Row className="show-grid">
            <Col md={6}>Est. taxes & fees (Based on 93990)</Col>
            <Col md={6}>{`$${props.taxes}`}</Col>

        </Row>
    )
}

export default TaxFees;