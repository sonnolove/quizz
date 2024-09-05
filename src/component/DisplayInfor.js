import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  //destructuring array/object
  const { listUsers } = props;

  const [isShowHideListUsers, setShowHideListUsers] = useState(true);

  // this.state = {
  //   isShowHideListUsers: true,
  // };
  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You delete all the users");
    }
  }, [listUsers]);

  return (
    <div className="display-inform-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUsers && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
