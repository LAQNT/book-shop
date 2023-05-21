import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://striveschool-api.herokuapp.com/api";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjJiZjMzYjE1MjAwMTQ3NjE3OWMiLCJpYXQiOjE2ODQ0ODQ0ODUsImV4cCI6MTY4NTY5NDA4NX0.mEfq_T_cBhYtDXqRUQAHmhquIoNjYGenUHoqsE1wnC8";

function CommentArea() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((res) => setComments(res.data));
  }, []);

  return <div></div>;
}

export default CommentArea;
