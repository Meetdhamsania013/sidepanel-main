import React, { useState } from "react";
import { Table, Button, Container, Row, Card, Modal } from "react-bootstrap";
import "./table.scss";

import EditForm from "../EditForm/EditForm";

const data = [
  { id: 1, name: 'John Doe', mobile: '1234567890', email: 'john@example.com', comment: 'Lorem ipsum dolor sit amet' },
  { id: 2, name: 'Christopher Sanders', mobile: '0987654321', email: 'jane@example.com', comment: 'Consectetur adipiscing elit' },
  { id: 3, name: 'David Roman', mobile: '1234567890', email: 'john@example.com', comment: 'Lorem ipsum dolor sit amet' },
  { id: 4, name: 'William Tulley', mobile: '0987654321', email: 'jane@example.com', comment: 'Consectetur adipiscing elit' },
  { id: 5, name: 'Robert Wise', mobile: '0987654321', email: 'jane@example.com', comment: 'Consectetur adipiscing elit' },
];

const DataTable = () => {
  const [editingRow, setEditingRow] = useState(null);

  const handleEdit = (index) => {
    setEditingRow(index);
  };

  const handleCancelEdit = () => {
    setEditingRow(null);
  };

  const handleSave = () => {
    setEditingRow(null);
  };

  // Modal popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {editingRow !== null ? (
        <EditForm
          data={data[editingRow]}
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      ) : (
        <Container fluid>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title>Table</Card.Title>
                <Card.Body className="p-0">
                  <div className="mb-15 text-right">
                    <Button variant="light">+ Add Data</Button>
                  </div>
                  <Table className="rwd-table" responsive>
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Mail ID</th>
                        <th>Comment</th>
                        <th>Action</th>
                      </tr>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.mobile}</td>
                          <td>{item.email}</td>
                          <td>{item.comment}</td>
                          <td className="actions">
                            <Button
                              variant="info"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </Button>
                            <Button variant="danger" onClick={handleShow}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card.Body>
            </Card>
          </Row>
          {/* Modalpopup */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, Are you sure you want to delete Data ?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Yes, Delete
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                No, Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Modalpopup */}
        </Container>
      )}
    </>
  );
};

export default DataTable;
