import React, { Component } from 'react'
import {Button, Collapse, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    variant="link"
                    onClick={()=> this.setState({open: !this.state.open})}
                >
                    {this.state.open? 'Hide': 'See'} item details
                    {this.state.open? ` -` : ` +`}
                </Button>
                <Collapse in={this.state.open}>
                    <div className="media">
                        <Media>
                            <img
                            width= {80}
                            height={80}
                            alt="thumbnail"
                            src="https://i5.walmartimages.com/asr/47179689-6ddd-4207-a559-f9927488aae5_1.
                            e01e1301dced5dc9e9096bd50f42a624.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                            />
                            <Media.Body>
                                <p>OFM Essentials Collection High-Back Racing Style Bonded Leather Gaming Chair, in Gray (ESS-3086-GRY)</p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong> {`$${this.props.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`$${this.props.price}`}</strong>
                                    </Col>
                                    <Col md={6}>
                                        Qty:1
                                    </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                    
                </Collapse>
            </div>  
        )
    }
}

