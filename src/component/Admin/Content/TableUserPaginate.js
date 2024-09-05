import ReactPaginate from "react-paginate";
import "./Quiz/QuizQA";

const TableUserPaginate = (props) => {
  const { listUsers, pageCount } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    props.fetchListUsersWithPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <>
      <div className="table-user1">
        <div className="col-1"></div>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="col-1  ">
                ID
              </th>
              <th scope="col" className="col-3">
                Username
              </th>
              <th scope="col" className="col-4">
                email
              </th>
              <th scope="col" className="col-1">
                role
              </th>
              <th className="col-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`table-users-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td className="btn-quiz">
                      <button className="btn btn-secondary">View</button>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => props.handleClickBtnUpdate(item)}>
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => props.handleClickBtnDelete(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {listUsers && listUsers.length === 0 && (
              <tr>
                <td colSpan={"4"}>not found data</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="col-2"></div>
      </div>
      <div className="user-pagination">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
