
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions/promoCodeAction';
import {Button, Collapse, Media, Row, Col, FormGroup, FormControl, FormLabel, Form} from 'react-bootstrap';

class PromoCodeDiscount extends Component {
    constructor(props){
        super(props);

        this.state={
            open: false,
            value: null
        }
    }

    handleChange = e =>{
        this.props.handleChange(e);
    }
    
    render() {
        return (
            <div>
                <Button
                    className="promo-code-button"
                    variant="link"
                    onClick={()=> this.setState({open: !this.state.open})}
                >
                    {this.state.open? `Hide` : `Apply`} promo code
                    {this.state.open? ` -` : ` +`} 

                </Button>
                <Collapse in={this.state.open}>
                    <Row className="show-grid">
                        <Col md={12}>
                            <Form>
                                <FormGroup controlId="formInlinName">
                                    <FormLabel>Promo Code</FormLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter promo code"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                    />     
                                </FormGroup>
                            </Form>
                            <Button
                                block
                                variant="success"
                                className="btn-apply"
                                disabled={this.props.isDisabled}
                                onClick={this.props.giveDiscount}
                            >
                            Apply
                            </Button>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    promoCode: state.promoCode.value
})

const mapDispatchToProps={
    handleChange : handleChange
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoCodeDiscount);



