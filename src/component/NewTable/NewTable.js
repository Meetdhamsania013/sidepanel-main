import React, { useState } from "react";
import {
  Col,
  Button,
  Container,
  Row,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
} from "react-bootstrap";
import "./NewTable.scss";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import userImage from "../../img/user_icon.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const NewTable = () => {
  const [modalState, setModalState] = useState("close");

  const handleShowModalEdit = () => {
    setModalState("modal-edit");
  };

  const handleShowModalDelete = () => {
    setModalState("modal-delete");
  };

  const handleClose = () => {
    setModalState("close");
  };

  return (
    <Container fluid>
      <Row>
        <div className="page_title">
          Manage <span>Policy</span>
        </div>
      </Row>
      <Row>
        <Col xs={3} className="pl-0">
          <div class="form-group has-search">
            <span class="form-control-feedback">
              <IoSearch />
            </span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </Col>
        <Col className="action_btn_wrap pr-0">
          <div>
            <a
              href="javascript:void(0)"
              class="btn btn-success"
              onClick={handleShowModalEdit}
            >
              <span>
                <FaPlusCircle /> Add New Employee
              </span>
            </a>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              class="btn btn-danger"
              onClick={handleShowModalDelete}
            >
              <span>
                <FaMinusCircle /> Delete
              </span>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <table className="responsive-table">
          <thead className="responsive-table_head">
            <tr className="responsive-table_row">
              <th className="responsive-table_head_title">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_name">
                Name
                <sapn className="title_icon">
                  <HiOutlineArrowNarrowUp />
                </sapn>
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_status">
                Policy
                <sapn className="title_icon">
                  <HiOutlineArrowNarrowUp />
                </sapn>
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_status">
                Status
                <sapn className="title_icon">
                  <HiOutlineArrowNarrowUp />
                </sapn>
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_types">
                Types
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_update">
                Updated
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_country">
                Country
              </th>
              <th className="responsive-table_head_title responsive-table_head_title_country">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="responsive-table_body">
            <tr className="responsive-table_row">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  Developer Zahid <br />
                  <span className="designation">CEO</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $500 <br />
                  <span className="designation">Main Policy</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap">
                <span className="status-indicator status-indicator_active"></span>
                <sapn className="indicator_active">Active</sapn>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, F1
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Jul 17, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                Bangladesh
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><Link onClick={handleShowModalEdit}><MdEdit /></Link></Link>
                </div>
                <div className="delete">
				<Link onClick={handleShowModalDelete}> <Link onClick={handleShowModalDelete}><MdDelete /></Link></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                />
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  John Doe <br />
                  <span className="designation">CTO</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $300 <br />
                  <span className="designation">Basic Policy</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap">
                <span className="status-indicator status-indicator_new"></span>
                <span className="indicator_new">New</span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, F5
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Apr 24, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                USA
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
				<Link onClick={handleShowModalDelete}> <Link onClick={handleShowModalDelete}><MdDelete /></Link></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row inactive">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck3"
                />
              </td>

              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  Ryan Guill <br />
                  <span className="designation">Account Manager</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $150 <br />
                  <span className="designation">Basic Policy</span>
                </span>
              </td>

              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap ">
                <span className="status-indicator status-indicator_inactive"></span>
                <sapn className="indicator_inactive">Inactive</sapn>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, MSR
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Aug 30, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                Canada
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
				  <Link onClick={handleShowModalDelete}> <Link onClick={handleShowModalDelete}><MdDelete /></Link></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck4"
                />
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  Dan Broughan <br />
                  <span className="designation">VP Of sales</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $350 <br />
                  <span className="designation">Basic Policy</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap">
                <span className="status-indicator status-indicator_active"></span>
                <span className="indicator_active">Active</span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, Instructor, MSR
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Dec 15, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                US
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
                   <Link onClick={handleShowModalDelete}><MdDelete /></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  Developer Zahid <br />
                  <span className="designation">CEO</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $500 <br />
                  <span className="designation">Main Policy</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap">
                <span className="status-indicator status-indicator_active"></span>
                <sapn className="indicator_active">Active</sapn>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, F1
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Jul 17, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                Bangladesh
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
                   <Link onClick={handleShowModalDelete}><MdDelete /></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                />
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  John Doe <br />
                  <span className="designation">CTO</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $300 <br />
                  <span className="designation">Basic Policy</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap">
                <span className="status-indicator status-indicator_new"></span>
                <span className="indicator_new">New</span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, F5
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Apr 24, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                USA
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
                   <Link onClick={handleShowModalDelete}><MdDelete /></Link>
                </div>
              </td>
            </tr>
            <tr className="responsive-table_row inactive">
              <td className="check_wrap">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck3"
                />
              </td>

              <td className="responsive-table_body_text responsive-table_body_text_name">
                <img src={userImage} alt="image" />
                <span className="user_wrap">
                  Ryan Guill <br />
                  <span className="designation">Account Manager</span>
                </span>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                <span className="user_wrap">
                  $150 <br />
                  <span className="designation">Basic Policy</span>
                </span>
              </td>

              <td className="responsive-table_body_text responsive-table_body_text_status status-indicator_wrap ">
                <span className="status-indicator status-indicator_inactive"></span>
                <sapn className="indicator_inactive">Inactive</sapn>
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_types">
                Attendee, MSR
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_update">
                Aug 30, 2021
              </td>
              <td className="responsive-table_body_text responsive-table_body_text_country">
                Canada
              </td>
              <td className="responsive-table_body_text responsive-table_action_icons">
                <div className="edit">
                  <Link onClick={handleShowModalEdit}><MdEdit /></Link>
                </div>
                <div className="delete">
                   <Link onClick={handleShowModalDelete}><MdDelete /></Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
      <Row>
        <div class="footer_table">
          <div class="hint-text">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <Link to="/">10</Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/">15</Dropdown.Item>
                <Dropdown.Item href="#/">20</Dropdown.Item>
                <Dropdown.Item href="#/">25</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <span>
              Showing <b> 10 </b> out of <b> 25 </b> entries
            </span>
          </div>
          <ul class="pagination">
            <li class="page-item disabled">
              <a href="javascript:void(0)">Previous</a>
            </li>
            <li class="page-item">
              <a href="javascript:void(0)" class="page-link">
                1
              </a>
            </li>
            <li class="page-item">
              <a href="javascript:void(0)" class="page-link">
                2
              </a>
            </li>
            <li class="page-item active">
              <a href="javascript:void(0)" class="page-link">
                3
              </a>
            </li>
            <li class="page-item">
              <a href="javascript:void(0)" class="page-link">
                4
              </a>
            </li>
            <li class="page-item">
              <a href="javascript:void(0)" class="page-link">
                5
              </a>
            </li>
            <li class="page-item">
              <a href="javascript:void(0)" class="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
      </Row>

      {/* Edit Modalpopup */}

      <Modal show={modalState === "modal-edit"}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-20">
            <Col xs={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formMobile">
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Designation"
                />
              </Form.Group>
            </Col>
          </Row>
		  <Row className="mb-20">
            <Col xs={6}>
              <Form.Group controlId="formName">
                <Form.Label>Policy Price</Form.Label>
                <Form.Control type="text" name="Policy" placeholder="Policy Price" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formMobile">
                <Form.Label>Policy Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Policy"
                  placeholder="Policy Name"
                />
              </Form.Group>
            </Col>
          </Row>

		  <Row className="mb-20">
		  <Col xs={6}>
              <Form.Group controlId="formMobile">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="Status"
                  placeholder="Write Status"
                />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formName">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" name="Type" placeholder="Type" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-20">
            <Col xs={6}>
              <Form.Group controlId="formMail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" name="text" placeholder="Date" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formComment">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="Country"
                  placeholder="Country"
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Yes, Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No, Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modalpopup */}
      <Modal show={modalState === "modal-delete"}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="delete_content">
            <div className="icon">
              <MdDeleteForever />
            </div>
            <div className="text">
              Woohoo, Are you sure you want to delete Data ?
            </div>
          </div>
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
    </Container>
  );
};

export default NewTable;
