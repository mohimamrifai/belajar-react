import React, {useState} from "react";
import axios from "axios";

function ModalBox () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nim, setNim] = useState('')
    const [gender, setGender] = useState('laki-laki')




    const saveUser = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                nim,
                gender
            });
            window.location.assign("http://localhost:3000")

        } catch (error) {
            console.log(error)
        }
    }






    return (
        
        <div className="mt-5 col-8 m-auto">
             <button type="button" className="btn btn-primary" data-bs-toggle="modal"       data-bs-target="#exampleModal">
                Tambah Data
            </button>
        
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Tambah Data</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form autoComplete="off" onSubmit={saveUser}>

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
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        <button type="submit" className="btn btn-primary">Tambah</button>
                    </div>
                </form>
            </div>
            
            </div>
        </div>
            </div>
        </div>
        
    )
}

export default ModalBox;