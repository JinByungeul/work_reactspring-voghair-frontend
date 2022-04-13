import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import UserListComponent from "../user/UserListComponent";

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Routes>
                        <Route exact path="/" element={<UserListComponent />} />
                        <Route path="/users" element={<UserListComponent />} />
                        <Route path="/add-user" element={<AddUserComponent />} />
                        <Route path="/edit-user" element={<EditUserComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;