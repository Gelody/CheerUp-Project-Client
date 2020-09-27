import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
const swal: SweetAlert = _swal as any;

function MycardDelete({ cardId }: any) {
  const history = useHistory();
  const cardData = { id: cardId };
  const user = JSON.parse(window.sessionStorage.user);

  // 카드 삭제 요청
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    swal({
      title: "정말 삭제하시겠어요?",
      text: "한번 삭제된 파일은 다시 되돌릴 수 없습니다!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        axios
          .post("/card/delete", cardData, {
            headers: { authorization: user }
          })
          .then(data => {
            if (data) {
              swal("카드가 삭제되었습니다.", { icon: "success" });
              history.push("/mypage");
            } else {
              swal("휴! 살았다.", "", "warning");
            }
          });
      }
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <button className="card_delete_button" type="submit">
          카드삭제
        </button>
      </form>
    </>
  );
}

export default MycardDelete;
