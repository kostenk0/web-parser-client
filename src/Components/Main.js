import React, { Component } from 'react'
import { Button, Container, Form, Row, Col} from 'react-bootstrap'
import Server from '../Services/Server.js'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest(e) {
        e.preventDefault();
        Server.health();
    }
  
    render() {
        return (
            <div>
               <Container>
                   <Row>
                       <Col>
                        <Form>
                            <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Введіть фразу" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.sendRequest}>
                                Почати
                            </Button>
                        </Form>
                       </Col>
                   </Row>
               </Container>
            </div>
        );
    };
}