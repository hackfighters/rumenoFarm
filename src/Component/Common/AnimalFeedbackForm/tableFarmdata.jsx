import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import Cookies from "js-cookie";
import axios from 'axios';

const TableFarmData = ({ showFarmTableModal, handleCloseFarmTableModal }) => {
    const apiUrl = `${process.env.REACT_APP_API}/farm_data/parent`;
    const getUserIdCookies = JSON.parse(Cookies.get("loginUserData") ?? "[]");
    const getSelectdAnimal = JSON.parse(Cookies.get("SelectedAnimal") ?? "[]");

    
    useEffect(() => {
        fetchItems();
      }, []);
    
      const fetchItems = async () => {
        try {
          const response = await axios.get(`${apiUrl}/${getUserIdCookies.uID}?name=${getSelectdAnimal}`,
            {
              headers: {
                'Authorization': `${getUserIdCookies.token}`
              }
            }
          );
          console.log('response: ', response);
          setapiData(response.data);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };

    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [apiData, setapiData] = useState();

    // Function to handle row click
    const handleRowClick = (item) => {
        setSelectedRow(item);
        setShowModal(true);
        fetchItems();
    };

    // Function to handle modal close
    const handleClose = () => setShowModal(false);

    return (
        <>
            <section className=''>
                <Modal className='p-0' size='xl' show={showFarmTableModal} onHide={handleCloseFarmTableModal}>
                    <Modal.Header className='' closeButton>
                        <Modal.Title>
                            FARM DATA TABLE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='table-responsive-sm'>
                        <table className="table table-striped">
                            <thead>
                                <tr className=''>
                                    <th className='text-danger text-center' scope="col">NAME</th>
                                    <th className='text-danger text-center' scope="col">AGE</th>
                                    <th className='text-danger text-center' scope="col">GENDER</th>
                                    <th className='text-danger text-center' scope="col">HEIGHT</th>
                                    <th className='text-danger text-center' scope="col">WEIGHT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apiData?.map((item, index) => (
                                    <tr key={index} className='pe-auto' onClick={() => handleRowClick(item)}>
                                        <th className="text-center user-select-none">{item.uniquename}</th>
                                        <td className="text-center user-select-none">{item.age}</td>
                                        <td className="text-center user-select-none">{item.gender}</td>
                                        <td className="text-center user-select-none">{item.height} Feet</td>
                                        <td className="text-center user-select-none">{item.weight} KG</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {selectedRow && (
                            <Modal size='xl' className='p-0' show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Detail</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p><strong>Parent:</strong> {selectedRow.parent}</p>
                                    <p><strong>Column 1:</strong> {selectedRow.col1}</p>
                                    <p><strong>Column 2:</strong> {selectedRow.col2}</p>
                                    <p><strong>Column 3:</strong> {selectedRow.col3}</p>
                                    <p><strong>Column 4:</strong> {selectedRow.col4}</p>
                                    <p><strong>Column 5:</strong> {selectedRow.col5}</p>
                                    <p><strong>Column 6:</strong> {selectedRow.col6}</p>
                                    <ul className='d-flex'>
                                        <li className='me-3'><strong>Name :</strong> {selectedRow.col1}</li>
                                        <li className='mx-3'><strong>Name :</strong> {selectedRow.col2}</li>
                                        <li className='mx-3'><strong>Name :</strong> {selectedRow.col3}</li>
                                    </ul>
                                </Modal.Body>
                            </Modal>
                        )}
                    </Modal.Body>
                </Modal>
            </section>
        </>
    )
}

export default TableFarmData

