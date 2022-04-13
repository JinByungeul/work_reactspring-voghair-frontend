import React, { Component } from "react";
import ApiService from "../../ApiService";

class EditUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            userNm: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.loadUser = this.loadUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then(res => {
                let user = res.data;
                this.setState({
                    userId: user.userId,
                    userNm: user.userNm
                });
            })
            .catch(err => {
                console.log("loadUser() Error!", err);
            });
    }

    saveUser = (evt) => {
        evt.preventDefault();
        let user = {
            userId: this.state.userId,
            userNm: this.state.userNm
        }
        ApiService.editUser(user)
            .then(res => {
                this.setState({
                    message: user.userNm + "님 정보가 수정되었습니다."
                });
                this.props.history.push("/users");
            })
            .catch(err => {
                console.log("saveUser() 에러", err);
            });
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Edit User</h2>
                <form>
                    <div>
                        <label>
                            User Id:
                            <input type="text" name="userId" readOnly="true"
                                defaultValue={this.state.userId} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            User name:
                            <input type="text" name="userNm" readOnly="true"
                                defaultValue={this.state.userNm} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;