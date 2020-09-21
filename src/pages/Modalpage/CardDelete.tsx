import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function MycardDelete({ cardId }: any) {
  const history = useHistory();
  const cardData = { id: cardId };
  const user = JSON.parse(window.sessionStorage.user);

  // 카드 삭제 요청
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/card/delete", cardData, { headers: { authorization: user } })
      .then((data) => {
        if (data) {
          swal("카드가 삭제되었습니다.", "", "success");
          history.push("/mypage");
        } else {
          swal("카드 삭제에 문제가 있습니다.", "", "warning");
        }
      });
    // .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <button className="card_delete_button" type="submit">
          카드삭제하기
        </button>
      </form>
    </>
  );
}

export default MycardDelete;
