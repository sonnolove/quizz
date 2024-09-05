import { toast } from "react-toastify";
import { postChangePassword } from "../../services/apiServices";
import { Button } from "react-bootstrap";
import { useState } from "react";
// import { useSelector } from "react-redux";

const ChangePassword = (props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const account = useSelector((state) => state.user.account);

  const handleUpdatePassword = async () => {
    // if (account.password !== currentPassword) {
    //   toast.error("current password iscorrect");
    // } else {
    let data = await postChangePassword(currentPassword, newPassword);
    if (data && data.EC === 0) {
      toast.success(data.EM);
    } else {
      toast.error(data.EM);
    }
    // }
  };

  return (
    <>
      <data className="row g-3 modal-change-password">
        <div className="col-md-6">
          <label className="form-label">Current password</label>
          <input
            type="text"
            className="form-control"
            value={currentPassword}
            key={"current_password"}
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">New password</label>
          <input
            type="email"
            className="form-control"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Confirm password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
      </data>
      <div className="submit-update-infor">
        <Button
          className="btn-submit"
          variant="warning"
          onClick={() => handleUpdatePassword()}>
          Update
        </Button>
      </div>
    </>
  );
};

export default ChangePassword;
