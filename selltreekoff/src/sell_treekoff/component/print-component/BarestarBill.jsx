import React from 'react'

const BarestarBill = ({ priceBeforeTax, CheckuserBill }) => {
    return (
        <div
            style={{
                width: "95%",
                fontFamily: "'Noto Sans Lao', sans-serif",
                fontSize: "12px",
                padding: "25px"
            }}
        >
            <div style={{ textAlign: "center" }}>
                <div style={{ display: 'flex', justifySelf: 'center', gap: 10 }}>
                    <p>ບິນລູກຄ້າເລກທິ່ {CheckuserBill?.billId} </p>
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
                [ບາລິສຕ້າເທົ່ານັ້ນ]
            </div>

            <div>

                <p>
                    <strong>STAFF NAME:</strong> {CheckuserBill?.employeeName}
                </p>

                <p style={{ fontSize: 25, justifySelf:'center' }}>
                    <strong>ລຳດັບຄິວ:</strong> <strong>{CheckuserBill?.waitNumber}</strong>
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
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontFamily: "Noto Sans Lao",
                                }}
                            >
                                <span>
                                    {index + 1}&nbsp;&nbsp;&nbsp; [{item.size}
                                    ]&nbsp;&nbsp;&nbsp; {item.menu} &nbsp;&nbsp;&nbsp;:
                                    &nbsp;&nbsp;&nbsp;
                                    {item.sweet}&nbsp;&nbsp;&nbsp; x &nbsp;&nbsp;&nbsp;{" "}
                                    {item.price.toLocaleString()}
                                    &nbsp;&nbsp;&nbsp; =
                                </span>
                                <strong>
                                    x{item.qty}
                                </strong>{" "}
                            </p>
                        );
                    })
                    : ""}
            </div>
        </div>
    )
}

export default BarestarBill