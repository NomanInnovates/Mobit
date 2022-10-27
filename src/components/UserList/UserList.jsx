import React from 'react';
import "./UserList.scss"

const UserList = (props) => {

    const handleFilterPatternChange = (e) => {
        props.onFilterPatternChange(e.target.value)
    }
    
    return (
        <div className="list-group list-group-flush">
            <div className="list-group-item">
                <div className="top-container">
                
                    <input type="text" className="form-control user-search-box" placeholder="Find user..."
                        aria-label="Find user..." value={props.filterPattern} onChange={handleFilterPatternChange} />
                </div>
            </div>
            {props.users && props.users.map((u) =>
                <div key={u.id} className="list-group-item user" onClick={() => props.onUserSelect(u.id)}>
                    <span > {u.name}</span> <span>{u.email}</span>
                </div>
            )}
        </div>
    )
};

export default UserList;