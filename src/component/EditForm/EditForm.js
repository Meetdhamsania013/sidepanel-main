import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";

const EditForm = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Container fluid>
      <Col xs={8}>
        <Card>
          <Card.Body>
          <Card.Title>Edit Form</Card.Title>
              <Form className="mt-20" onSubmit={handleSubmit}>
                <Row className="mb-20">
                  <Col xs={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="formMobile">
                      <Form.Label>Mobile No</Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-20">
                  <Col xs={6}>
                    <Form.Group controlId="formMail">
                      <Form.Label>Mail Id</Form.Label>
                      <Form.Control
                        type="text"
                        name="mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="formComment">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        type="text"
                        name="comment"
                        value={formData.comment}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mt-30">
                <Button  variant="primary" type="submit">
                  Save
                </Button>
                <Button className="ml-15" variant="secondary" onClick={onCancel}>
                  Cancel
                </Button>
                </div>
              </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default EditForm;
