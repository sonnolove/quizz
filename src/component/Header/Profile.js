import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import History from "./History";
import ChangePassword from "./ChangePassword";
import UserInfor from "./UserInfor";
import "./Share.scss";

const Profile = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-profile">
        <Modal.Header closeButton>
          <Modal.Title>Manage your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify>
            <Tab eventKey="home" title="User information">
              <UserInfor />
            </Tab>
            <Tab eventKey="profile" title="Password">
              <ChangePassword />
            </Tab>
            <Tab eventKey="longer-tab" title="History doing quizzes">
              <History />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
