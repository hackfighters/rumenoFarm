import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const TableFarmData = ({ showFarmTableModal, handleCloseFarmTableModal }) => {

    const data = [
        {
            parent: 'Parent 1',
            col1: 'Mark',
            col2: 'Otto',
            col3: '@mdo',
            col4: '@mdo',
            col5: '@mdo',
            col6: '@mdo'
        },
        {
            parent: 'Parent 2',
            col1: 'Jacob',
            col2: 'Thornton',
            col3: '@fat',
            col4: '@fat',
            col5: '@fat',
            col6: '@fat'
        },
        // Add more objects as needed
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // Function to handle row click
    const handleRowClick = (item) => {
        setSelectedRow(item);
        setShowModal(true);
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
                                    <th className='text-danger text-center' scope="col">MILK</th>
                                    <th className='text-danger text-center' scope="col">POST-WEAN</th>
                                    <th className='text-danger text-center' scope="col">VACCINE</th>
                                    <th className='text-danger text-center' scope="col">DEWORM</th>
                                    <th className='text-danger text-center' scope="col">ESTRUS-HEAT</th>
                                    <th className='text-danger text-center' scope="col">FARM-SANITATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className='pe-auto' onClick={() => handleRowClick(item)}>
                                        <th className="text-center user-select-none">{item.parent}</th>
                                        <td className="text-center user-select-none">{item.col1}</td>
                                        <td className="text-center user-select-none">{item.col2}</td>
                                        <td className="text-center user-select-none">{item.col3}</td>
                                        <td className="text-center user-select-none">{item.col4}</td>
                                        <td className="text-center user-select-none">{item.col5}</td>
                                        <td className="text-center user-select-none">{item.col6}</td>
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

