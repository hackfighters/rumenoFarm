import React from "react";
import Footer from "../../Common/Footer";
// import axios from "axios";

const TransactionDetail = () => {
  const TransDetail = [
    {
      name: "admin",
      date: "7/1/24",
      amount: 70,
      transid: "hello@123",
      status: "pending",
    },
    {
      name: "panel",
      date: "8/1/24",
      amount: 77,
      transid: "admin@123",
      status: "success",
    },
  ];

  // const Transactiondetail = async () => {
  //   try {
  //     const response = await axios.get("https://api.example.com/data");
  //     const TransDetailData = response;
  //     console.log(TransDetailData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <>
      <section className="home-backgroundColor">
        <div className="container py-5">
          <div className="my-5 text-white text-center">
            <h1>Your Transactions Details</h1>
          </div>
          <table className="table trasn-table">
            <thead>
              <tr>
                <th>
                  <div className="text-center my-1">#</div>
                </th>
                <th>
                  <div className="text-center">Name</div>
                </th>
                <th>
                  <div className="text-center">Date</div>
                </th>
                <th>
                  <div className="text-center">Amount</div>
                </th>
                <th>
                  <div className="text-center">Transactions </div>
                </th>
                <th>
                  <div className="text-center">Status</div>
                </th>
              </tr>
              <div className="my-3"></div>
            </thead>
            <tbody>
              {TransDetail.map((detail, index) => (
                <tr key={index} className="my-4">
                  <td>
                    <div className="text-center my-2">{index + 1}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.name}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.date}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.amount}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">{detail.transid}</div>
                  </td>
                  <td>
                    <div className="text-center my-2">
                      <span
                        className={
                          detail.status === "pending"
                            ? "bg-danger shadow-lg rounded text-white p-1"
                            : "bg-success shadow-lg rounded text-white p-1"
                        }
                      >
                        {detail.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default TransactionDetail;
