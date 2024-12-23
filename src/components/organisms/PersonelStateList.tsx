import React from 'react'
import { IKUseSelector } from '../../store';

function PersonelStateList() {

    const PersonelList = IKUseSelector(state => state.companyManagement.companyPersonelList);

    return (
        <div className='col'>
            <div className="card">
                <div className="card-header">
                    <h5>Personel Listesi </h5>
                </div>
                <div className="card-body table-responsive p-0 mb-5">
                    <table className="table text-nowrap text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Doğum Tarihi</th>
                                <th>İşe Alınma Tarihi</th>
                                <th>Departman</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PersonelList.map((personel, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{personel.id}</td>
                                            <td>{personel.firstName}</td>
                                            <td>{personel.lastName}</td>
                                            <td>{personel.birthDate}</td>
                                            <td>{personel.hireDate}</td>
                                            <td>{personel.departmentType}</td>
                                            <td>
                                                <button className='btn btn-success me-2'>Aktif</button>
                                                <button className='btn btn-danger'>Pasif</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PersonelStateList