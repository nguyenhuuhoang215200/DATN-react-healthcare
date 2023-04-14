import React, { useCallback, useState } from 'react'
import { Modal } from 'reactstrap';
import './SearchModal.scss'
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpenModal, setIsOpenModal, doctorData }) => {
    return (
        <Modal isOpen={isOpenModal} className='confirm-modal' centered={true}>
            <div className="modal-header">
                <div className="modal-title">
                    Search result
                </div>
                <div className="col-auto">
                    <button onClick={() => setIsOpenModal(!isOpenModal)} className="btn btn-close" >
                        x
                    </button>
                </div>
            </div>
            <div className="modal-body gappp">
                {
                    doctorData.map((doctor, index) => {
                        let imageBase64 = ''
                        if (doctor.image) {
                            imageBase64 = new Buffer(doctor.image, 'base64').toString('binary')
                        }
                        return (
                            <Link style={{ textDecoration: 'none' }} to={`/detail-doctor/${doctor.id}`}>
                                <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }} className="confirm-modal-content flex">
                                    <div className='image-doctor' style={{ backgroundImage: `url(${imageBase64})` }} />
                                    <div className='name-doctor'>
                                        <p>{doctor.firstName} {doctor.lastName}</p>
                                        <div>
                                            {/* <p>{doctor.Markdown}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </Modal >
    )
}

export default SearchModal