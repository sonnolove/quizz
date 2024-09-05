import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FcPlus } from "react-icons/fc";
import { postUpdateProfile } from "../../services/apiServices";

const UserInfor = (props) => {
  const account = useSelector((state) => state.user.account);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (account && !_.isEmpty(account)) {
      setEmail(account.email);
      setUsername(account.username);
      setRole(account.role);
      setImage("");
      if (account.image) {
        setPreviewImage(`data:image/jpeg;base64,${account.image}`);
      }
    }
  }, [account]);

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      // setPreviewImage('')
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitUpdateInfor = async () => {
    // validate
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    let data = await postUpdateProfile(username, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      //   handleClose();
      // await props.fetchListUsers();
      // props.setCurrentPage(1);
      // await props.fetchListUsersWithPaginate(props.currentPage);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <data className="row g-3 modal-update-infor">
        <div className="col-md-4">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            disabled
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            onChange={(event) => setRole(event.target.value)}
            value={role}>
            <option selected value="USERS">
              USERS
            </option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <div className="col-md-12 preview-image">
          <label className="form-label label-upload" htmlFor="labelUpload">
            <FcPlus />
            Upload file image
          </label>
          <input
            type="file"
            hidden
            id="labelUpload"
            onChange={(event) => handleUploadImage(event)}></input>
          <div className="col-md-12 img-preview">
            {previewImage ? (
              <img src={previewImage} />
            ) : (
              <span>Preview image</span>
            )}
          </div>
        </div>
      </data>
      <div className="submit-update-infor">
        <Button
          className="btn-submit"
          variant="primary"
          onClick={() => handleSubmitUpdateInfor()}>
          Save
        </Button>
      </div>
    </>
  );
};

export default UserInfor;
