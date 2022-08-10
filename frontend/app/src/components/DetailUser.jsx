import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'





const DetailUser = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nim, setNim] = useState('')
    const [gender, setGender] = useState('laki-laki')
    const {id} = useParams();
    const navigate = useNavigate();




    const getById = async () => {
       const response = await axios.get(`http://localhost:5000/users/${id}`)
        try {
            setName(response.data.name)
            setEmail(response.data.email)
            setNim(response.data.nim)
            setGender(response.data.gender)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getById();
    }, []);


    const deleteUser = async () => {
        
        try {
            const response = await axios.delete(`http://localhost:5000/users/${id}`)
            if(response) navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    const updateUser = async () => {
        try {
            const response = await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                nim,
                gender
            });
            if(response) navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='mt-4 ms-5'> 
        <div className="card" style={{width: 400}}>
            <div className="card-body">
                <h5 className="card-title">Nama Lengkap : {name}</h5>
                <h5 className="card-title">Alamat Email : {email}</h5>
                <h5 className="card-title">Nomor Induk Mahasiswa : {nim}</h5>
                <h5 className="card-title">Jenis kelamin : {gender}</h5>
                <div>
                <Link to={'/'} className="btn btn-sm btn-success mx-1">Back</Link>
                <button className="btn btn-sm btn-danger" onClick={() => window.confirm('apakah kamu yakin ? ') ? deleteUser() : false} >Delete</button>
                <button type="button" className="btn btn-primary btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </div>
                {/* <!-- Modal --> */}
                
            </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateUser}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="Email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">NIM</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your NIM" value={nim} onChange={(e) => setNim(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                        <select className="form-select" id="inputGroupSelect01" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="laki-laki">Laki - laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default DetailUser
