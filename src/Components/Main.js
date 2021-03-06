import React, { Component } from 'react'
import { Button, Container, Form, Row, Col, Table, Alert} from 'react-bootstrap'
import Server from '../Services/Server.js'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.getUserKeyword = this.getUserKeyword.bind(this);
        this.sendRequest = this.sendRequest.bind(this);

        this.state = {
            keyword: '',
            error: false,
            status: true,
            results: "",
            serverError: false
        };
    }

    getUserKeyword(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    sendRequest(e) {
        if(this.state.keyword){
        e.preventDefault();
        this.setState({
            status: false,
            results: "",
            error: false,
            serverError: false
        });
        Server.health().then(res => {
            if (res === 200) {
                Server.parseKeyword(this.state.keyword).then(res => {
                    if (res === this.state.keyword) {
                        Server.getResults(this.state.keyword).then(res => {
                            console.log(res);
                            this.setState({
                                status: true,
                                results: res
                            });
                        });
                    } else {
                        this.setState({
                            status: true,
                            error: true
                        })
                    }
                });
            } else {
                this.setState({
                    status: true,
                    serverError: true
                });
            }
        });
    }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center my-5">
                        <Col>
                        {this.state.error ? 
                            <Alert variant='warning'>
                                ?????????????? ???????????????? ?????????????????? ???? ??????
                             </Alert> : null
                            }
                            {this.state.serverError ? 
                            <Alert variant='danger'>
                                ???????????? ???? ????????????????????
                             </Alert> : null
                            }
                            <Form className="text-center">
                                <Form.Group>
                                    <Form.Label><h2>?????????????? ???? ???????????????? ????????????</h2></Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="?????????????? ?????????????? ??????????"
                                        value={this.state.keyword} onChange={this.getUserKeyword} />
                                    <Form.Text className="text-muted">
                                        ?????????????? ?????????? - ???? ?????????? ?????? ??????????, ?????? ???????? ?????????????????????? ?????? ????????????.
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col></Col>
                        <Col>
                            <Button variant="primary" disabled={!this.state.status} onClick={this.state.status ? this.sendRequest : null} size="lg" block>
                                {this.state.status ? '????????????' : '??????????????. ??????????????????...'}
                            </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                    <Col>
                    {
                            this.state.results ?
                            <Table striped bordered hover variant="dark" className="my-3" size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>??????????????</th>
                                        <th>????????</th>
                                        <th>URL + snippet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.results ? this.state.results.map((result) =>
                                    <tr>
                                        <td>{result.position}</td>
                                        <td>{result.datetime.substr(0,16)}</td>
                                            <tr style={{color: 'yellow'}}>
                                            {result.url}
                                            </tr>
                                            <tr style={{color: 'lightgreen'}}>
                                            {result.snippet}
                                            </tr>
                                    </tr>
                                     ) : null
                                    }
                                </tbody>
                            </Table>
                            : null
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}