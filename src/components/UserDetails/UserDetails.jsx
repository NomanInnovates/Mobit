import React from "react";
import "./UserDetails.scss"


const UserDetails = (props) => {

    const updateName = (e) => {
        props.onChange({...props.user, name: e.target.value})
    }

    const updateEmail = (e) => {
        props.onChange({...props.user, email: e.target.value})
    }
    const updateAge = (e) => {
        props.onChange({...props.user, age: +e.target.value})
    }

    const updatePhone = (e) => {
        props.onChange({...props.user, phone: +e.target.value})
    }

    const saveUserDetails = (e) => {
        e.preventDefault()
        props.onSave(props.user)
    }

    return (
        <form className="user-details-form">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"
                           value={props?.user?.name || ''} onChange={updateName}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"
                           value={props?.user?.email || ''} onChange={updateEmail}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Age</label>
                    <input type="number" className="form-control" id="inputEmail" placeholder="Age"
                           value={props?.user?.age || ''} onChange={updateAge}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword">Cell Phone</label>
                    <input type="number" className="form-control" id="Phone" placeholder="Phone"
                           value={props?.user?.phone || ''} onChange={updatePhone}/>
                </div>
            </div>
           
            <button type="submit" className="btn btn-primary" onClick={saveUserDetails}>Save</button>
        </form>
    )
};

export default UserDetails;
