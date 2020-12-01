import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    // const [image,setImage] = useState("")
    // const [url,setUrl] = useState(undefined)

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                />
                {/* <div className="file-field input-field">
                    <div className="btn #64b5f6 blue darken-1">
                        <span>Upload pic</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div> */}
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    
                >
                    SignUP
            </button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>





            </div>
        </div>
    )
}

export default Signup
