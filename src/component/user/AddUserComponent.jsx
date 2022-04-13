import React, { Component } from "react";
import ApiService from "../../ApiService";

class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userNm: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    saveUser = (evt) => {
        evt.preventDefault();
        let user = {
            userId: this.state.userId,
            userNm: this.state.userNm
        }

        ApiService.addUser(user)
            .then(res => {
                this.setState({
                    message: user.userNm + "님이 성공적으로 등록되었습니다."
                });
                console.log(this.state.message);
                this.props.history.push("/users");
            })
            .catch(err => {
                console.log("saveUser() Error!", err);
            });
    }

    render() {

        return (
            <div>
                <h2>Add User</h2>
                <form>
                    <div>
                        <label>User Id:
                            <input type="text" placeholder="please input user id" name="userId"
                                value={this.state.userId} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>User Name:
                            <input type="text" placeholder="please input user name" name="userId"
                                value={this.state.userNm} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;