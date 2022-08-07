import React, { useState, useEffect } from 'react';

function Data () {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(result => setItems(result), (error) => {
            throw error;
        });
    }, []);

    return (
        
        <div className="row mt-3">
            <div className="col-8 m-auto">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nim</th>
                    <th scope="col">jenis kelamin</th>
                    <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map((item, index) => (
                        
                    <tr key={item.id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.nim}</td>
                        <td>{item.gender}</td>
                        <td>
                            <button className='btn btn-sm btn-success'>Detail</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Data;