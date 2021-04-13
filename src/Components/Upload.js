import React, { useState } from 'react';
import { Button, Container, Form, Row, Col, Alert } from 'react-bootstrap'
import Server from '../Services/Server.js'

const Upload = () => {
    const [file, setFile] = useState(0);
    const [status, setStatus] = useState(false);
    const [upload, setUpload] = useState(false);
    const [buttonStatus, setButtonStatus] = useState(true);
    let fileReader;


    const handleFileRead = () => {
        if(file){
        setUpload(false);
        setStatus(false);
        setButtonStatus(false);
        let array = file.split('\n');
        console.log(array);
        Server.uploadCSV(array).then(res => {
            if (res === 'success') {
                setButtonStatus(true);
                setUpload(true);
            } else {
                setStatus(true);
                setButtonStatus(true);
            }
        });
    }
    };

    const handleFileChosen = (fileUpload) => {
        setUpload(false);
        setStatus(false);
        fileReader = new FileReader();
        fileReader.onloadend = () => {
            const content = fileReader.result;
            setFile(content);
        };
        fileReader.readAsText(fileUpload);

    };

    return <>
        <Container>
            <Row className="justify-content-md-center my-5">
                <Col>
                    {status ?
                        <Alert variant='danger'>
                            Помилка при завантаженні на сервер
                             </Alert> : null
                    }
                    {upload ?
                        <Alert variant='success'>
                            Файл успішно оброблено
                             </Alert> : null
                    }
                    <Form className="text-center">
                        <Form.Label><h2>Виберіть .csv файл для завантаження</h2></Form.Label>
                        <Form.Group>
                            <Form.File type="file"
                                id="inputGroupFile01"
                                label="Виберіть .csv файл"
                                accept='.csv'
                                onChange={e => handleFileChosen(e.target.files[0])}
                                custom />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Файл з ключовими словами для парсингу
                    </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Button variant="primary" size="lg" disabled={!buttonStatus} onClick={handleFileRead} block>
                        {buttonStatus ? 'Завантажити' : 'Завантажуємо. Зачекайте...'}
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    </>
};
export default Upload;