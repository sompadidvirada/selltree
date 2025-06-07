import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const BarestarBill = ({ CheckuserBill }) => {
  const CheckuserBill2 = JSON.parse(sessionStorage.getItem("CheckuserBill2"));
  console.log(CheckuserBill2);
  const componentRef = useRef();

  // Define your print function

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Bill-${CheckuserBill2?.billId}`,
  });

  useEffect(() => {
    if (CheckuserBill2) {
      setTimeout(() => {
        handlePrint();
      }, 500); // 0.5 sec delay
    }
  }, [CheckuserBill2]);

  return (
    <div
      ref={componentRef}
      style={{
        width: "95%",
        fontFamily: "'Noto Sans Lao', sans-serif",
        fontSize: "12px",
        padding: "25px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifySelf: "center", gap: 10 }}>
          <p>
            ບິນລູກຄ້າເລກທິ່ {CheckuserBill?.billId || CheckuserBill2?.billId}{" "}
          </p>
          <p>
            <strong>BILL NO</strong> #
            {CheckuserBill?.billId || CheckuserBill2?.billId} |{" "}
            {new Date(
              CheckuserBill?.createAt * 1000 || CheckuserBill2?.createAt * 1000
            ).toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        [ບາລິສຕ້າເທົ່ານັ້ນ]
      </div>

      <div>
        <p>
          <strong>STAFF NAME:</strong>{" "}
          {CheckuserBill?.employeeName || CheckuserBill2?.employeeName}
        </p>

        <p style={{ fontSize: 25, justifySelf: "center" }}>
          <strong>ລຳດັບຄິວ:</strong>{" "}
          <strong>
            {CheckuserBill?.waitNumber || CheckuserBill2?.waitNumber}
          </strong>
        </p>
        <p>
          <strong>PAYMENT:</strong>{" "}
          {CheckuserBill?.payment || CheckuserBill2?.payment}
        </p>
      </div>

      <hr />

      <div>
        {CheckuserBill
          ? CheckuserBill?.menuDetail?.map((item, index) => {
              return (
                <p
                  key={item.added_id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "Noto Sans Lao",
                  }}
                >
                  <span>
                    {index + 1}&nbsp;&nbsp;&nbsp; [{item.cupSize}
                    ]&nbsp;&nbsp;&nbsp; {item.menuNameENG} &nbsp;&nbsp;&nbsp;:
                    &nbsp;&nbsp;&nbsp;
                    {item.sweet}&nbsp;&nbsp;&nbsp; x &nbsp;&nbsp;&nbsp;{" "}
                    {item.price.toLocaleString()}
                    &nbsp;&nbsp;&nbsp; =
                  </span>
                  <strong>x{item.qty}</strong>{" "}
                </p>
              );
            })
          : CheckuserBill2?.menuDetail.map((item, index) => {
              return (
                <p
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "Noto Sans Lao",
                  }}
                >
                  <span>
                    {index + 1}&nbsp;&nbsp;&nbsp; [{item.cupSize}
                    ]&nbsp;&nbsp;&nbsp; {item.menuNameENG} &nbsp;&nbsp;&nbsp;:
                    &nbsp;&nbsp;&nbsp;
                    {item.extraOption}&nbsp;&nbsp;&nbsp; 
                    &nbsp;&nbsp;&nbsp; =
                  </span>
                  <strong>x{item.QTY}</strong>{" "}
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default BarestarBill;
