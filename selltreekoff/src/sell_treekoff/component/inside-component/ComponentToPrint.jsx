import React, { forwardRef } from "react";

const ComponentToPrint = forwardRef((props, ref) => {
  const userBill =
    {
      billId: "11203",
      createAt: "09:14pm 22/05/2025",
      userId: 9001,
      username: "sompadid",
      point: 100,
      waitNumber: 2,
      payment: "BCEL-ONEPAY",
      menuDetail: [
        {
          id: 1,
          menuName: "ICE GREEN TEA HONEY LEMON",
          sweetLevel: "--ທ່າມະດາ--",
          unit: 3,
          price: 40000,
          size: "TALL",
        },
        {
          id: 2,
          menuName: "ICE GREEN TEA HONEY LEMON",
          sweetLevel: "--ທ່າມະດາ--",
          unit: 3,
          price: 40000,
          size: "TALL",
        },
        {
          id: 3,
          menuName: "ICE GREEN TEA HONEY LEMON",
          sweetLevel: "--ທ່າມະດາ--",
          unit: 3,
          price: 40000,
          size: "TALL",
        },
        {
          id: 4,
          menuName: "ICE GREEN TEA HONEY LEMON",
          sweetLevel: "--ທ່າມະດາ--",
          unit: 3,
          price: 40000,
          size: "TALL",
        },
      ],
      totalPrice: 250000,
      cash: 300000,
      employeeName: "ທ້າວ ນິກເລີ",
    } || [];

  const priceBeforeTax = userBill?.bill?.totalPrice * 0.9;

  return (
    <div
      ref={ref}
      style={{
        width: "900px",
        fontFamily: "'Noto Sans Lao', sans-serif",
        fontSize: "12px",
        lineHeight: 1.5,
        padding: "25px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src="/assests/bill_treekoff_logo.png" width={150} />
        <h3>ບິນລູກຄ້າເລກທິ່ {userBill?.billId}</h3>
        <p>
          <strong>BILL NO</strong> #{userBill?.billId} | 09:14pm 22/05/2025
        </p>
      </div>

      <div>
        <p>
          <strong>CUSTOMER-ID:</strong> {userBill?.userId}
        </p>
        <p>
          <strong>NAME:</strong> {userBill?.username} | 9001
        </p>
        <p>
          <strong>STAFF NAME:</strong> {userBill?.employeeName}
        </p>
        <p>
          <strong>ແຕມສະສົມຂອງທ່ານ:</strong> {userBill?.point}
        </p>
        <p>
          <strong>ລຳດັບຄິວ:</strong> {userBill?.waitNumber}
        </p>
        <p>
          <strong>PAYMENT:</strong> {userBill?.payment}
        </p>
      </div>

      <hr />

      <div>
        {userBill
          ? userBill?.menuDetail?.map((item, index) => {
              return (
                <p
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "Noto Sans Lao",
                  }}
                ><span>{index + 1}&nbsp;&nbsp;&nbsp; [{item.size}]&nbsp;&nbsp;&nbsp;{" "}
                  {item.menuName} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;
                  {item.sweetLevel}&nbsp;&nbsp;&nbsp; x &nbsp;&nbsp;&nbsp; {item.price.toLocaleString()} x {item.unit}&nbsp;&nbsp;&nbsp;
                  =
                  </span>
                  <strong>{(item.price * item.unit).toLocaleString()} ກີບ</strong>{" "}
                  
                </p>
              );
            })
          : ""}
      </div>

      <hr />

      <div style={{ textAlign: "right", width: "23%", justifySelf: "end" }}>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>TOTAL:</strong>{" "}
          {(priceBeforeTax ? priceBeforeTax : 0).toLocaleString()} ກີບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>VAT (10%):</strong>{" "}
          {(userBill?.totalPrice * 0.1).toLocaleString()} ກີບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>GRAND TOTAL:</strong> {userBill?.totalPrice.toLocaleString()}{" "}
          ກີບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>CASH:</strong> {userBill?.cash.toLocaleString()} ກິບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>CHANGE:</strong>{" "}
          {(userBill?.totalPrice - userBill?.cash).toLocaleString()} ກີບ
        </p>
      </div>

      <hr />

      <div style={{ textAlign: "center" }}>
        <p>You can order online!</p>
        <p>Download BigTree Application now at App Store/Play Store!</p>
        <p>TAX ID: 235764515000</p>
        <p>
          <a href="https://www.treekoff.coffee">www.treekoff.coffee</a>
        </p>
        <p>Bigtree trading company limited</p>
        <p style={{ marginTop: 10 }}>{Date()}</p>
      </div>
    </div>
  );
});

export default ComponentToPrint;
