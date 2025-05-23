import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BarestarBill from "./BarestarBill";
import CustomerBill from "./CustomerBill";

const ComponentToPrint = () => {
  const CheckuserBill = JSON.parse(sessionStorage.getItem("CheckuserBill"));
  const componentRef = useRef();
  const priceBeforeTax = CheckuserBill?.totalPrice * 0.9;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Bill-${CheckuserBill?.billId}`,
  });

  useEffect(() => {
    if (CheckuserBill) {
      setTimeout(() => {
        handlePrint();
      }, 500); // 0.5 sec delay
    }
  }, [CheckuserBill]);

  return (
    <div
      ref={componentRef}
      style={{
        width: "100%",
        fontFamily: "'Noto Sans Lao', sans-serif",
        fontSize: "12px",
        overflowX: "hidden",
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center"
      }}
    >
      <div style={{ pageBreakAfter: "always" }}>
        <CustomerBill priceBeforeTax={priceBeforeTax} CheckuserBill={CheckuserBill} />
      </div>
      <div>
        <BarestarBill priceBeforeTax={priceBeforeTax} CheckuserBill={CheckuserBill} />
      </div>
    </div>
  );
  
};

export default ComponentToPrint;
