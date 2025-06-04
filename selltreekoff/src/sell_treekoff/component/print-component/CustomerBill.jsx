import React from 'react'

const CustomerBill = ({priceBeforeTax, CheckuserBill}) => {
  return (
    <div
      style={{
        width: "95%",
        fontFamily: "'Noto Sans Lao', sans-serif",
        fontSize: "12px",
        padding:"25px"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src="/assests/bill_treekoff_logo.png" width={150} />
        <h3>ບິນລູກຄ້າເລກທິ່ {CheckuserBill?.billId}</h3>
        <p>
          <strong>BILL NO</strong> #{CheckuserBill?.billId} | {new Date(CheckuserBill?.createAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
        </p>
      </div>

      <div>
        <p>
          <strong>CUSTOMER-ID:</strong> {CheckuserBill?.userId}
        </p>
        <p>
          <strong>NAME:</strong> {CheckuserBill?.username} | 9001
        </p>
        <p>
          <strong>STAFF NAME:</strong> {CheckuserBill?.employeeName}
        </p>
        <p>
          <strong>ແຕມສະສົມຂອງທ່ານ:</strong> {CheckuserBill?.point}
        </p>
        <p>
          <strong>ລຳດັບຄິວ:</strong> {CheckuserBill?.waitNumber}
        </p>
        <p>
          <strong>PAYMENT:</strong> {CheckuserBill?.payment}
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
                    {item.price.toLocaleString()} x {item.qty}
                    &nbsp;&nbsp;&nbsp; =
                  </span>
                  <strong>
                    {(item.price * item.qty).toLocaleString()} ກີບ
                  </strong>{" "}
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
          {(CheckuserBill?.totalPrice * 0.1).toLocaleString()} ກີບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>GRAND TOTAL:</strong>{" "}
          {CheckuserBill?.totalPrice.toLocaleString()} ກີບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>CASH:</strong> {Number(CheckuserBill?.cash).toLocaleString()}{" "}
          ກິບ
        </p>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>CHANGE:</strong>{" "}
          {(
            Number(CheckuserBill?.cash) - CheckuserBill?.totalPrice
          ).toLocaleString()}{" "}
          ກີບ
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
  )
}

export default CustomerBill