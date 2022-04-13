import React, { Component } from "react";
import ApiService from "../../ApiService";
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

class UserListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            message: null
        }
        this.reloadUserList = this.reloadUserList.bind(this); 
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log("reloadUserList() Error!", err);
            })
    }

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
            .then(res => {
                this.setState({
                    message: "User Deleted Successfully!"
                });
                this.setState({
                    users: this.state.users.filter(user =>
                        user.userId !== userId
                    )
                });
            })
            .catch(err => {
                console.log("deleteUser() Error!", err);
            });
    }

    editUser = (userId) => {
        window.localStorage.setItem("userId", userId);
        this.props.history.push("/edit-user");
    }

    addUser = () => {
        window.localStorage.removeItem("userId");
        this.props.history.push("/add-user");
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>User List</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}>Add User</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user => 
                            <TableRow key={user.userId}>
                                <TableCell component="th" scope="user">{user.userId}</TableCell>
                                <TableCell>{user.userNm}</TableCell>
                                <TableCell>
                                    <Button onClick={() => this.editUser(user.userId)}>Edit</Button>
                                    <Button onClick={() => this.deleteUser(user.userId)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const style = {
    display: "flex",
    justifyContent: "center"
}

export default UserListComponent;