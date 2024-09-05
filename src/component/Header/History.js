import React, { useEffect, useState } from "react";
import { getHistory } from "../../services/apiServices";
import moment from "moment";
import { Table } from "react-bootstrap";

const History = (props) => {
  const [listHistory, setListHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    let res = await getHistory();
    if (res && res.EC === 0) {
      let newData = res?.DT?.data?.map((item) => {
        return {
          total_correct: item.total_correct,
          total_questions: item.total_questions,
          name: item?.quizHistory?.name ?? "",
          id: item.id,
          date: moment(item.createAt).utc().format("DD/MM/YY hh:mm:ss A"),
        };
      });
      if (newData.length > 7) {
        newData = newData.slice(newData.length - 7, newData.length);
      }
      setListHistory(newData);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Quiz name</th>
            <th>Total question</th>
            <th>Total correct answer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {listHistory &&
            listHistory.length > 0 &&
            listHistory.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.total_questions}</td>
                  <td>{item.total_correct}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default History;
