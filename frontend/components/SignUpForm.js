const SignUpForm = ()=>{
    return(
        <div className="signup">
            <form>
                <div className="avatar">
                    <img />
                    <div className="labels">
                        <label className="userHandle">USERHANDLE</label>
                        <label className="actualName">ACTUAL NAME</label>
                    </div>
                    <select className="input">
                        <option>DESIGNER</option>
                        <option>DEVELOPER</option>
                    </select>
                </div>
                <div className="form-floating">
                    <label>ENROLLMENT NO</label>
                    <input type="text" placeholder="ENTER ENROLLMENT NO." className="input"/>
                </div>
                <div className="form-floating">
                    <label>CONTACT NO</label>
                    <input type="text" placeholder="ENTER CONTACT NO." pattern="[0-9]{10}" className="input"/>
                </div>
                <div className="form-floating">
                    <label>EMAIL ID</label>
                    <input type="email" placeholder="ENTER EMAIL ID" className="input"/>
                </div>
                <div className="form-floating">
                    <label>GITHUB HANDLE</label>
                    <input type="text" placeholder="ENTER GITHUB HANDLE" className="input"/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;