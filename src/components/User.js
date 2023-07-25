import React from "react"
import AddUser from "./AddUser.js"
import {AiFillDelete, AiFillEdit} from "react-icons/ai/index.js"


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    user = this.props.user

    render() {
        return (
            <div className="user">
                <AiFillDelete onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <AiFillEdit onClick={() => {
                    this.setState({editForm: !this.state.editForm})
                }} className="edit-icon"/>

                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <img src={this.user.avatar} />
                <p>{this.user.email}</p>
                <b>{this.user.isHappy ? ':)' : ':('}</b>

                {this.state.editForm && <AddUser  user={this.user} onAdd={this.props.odEdit}/>}
            </div>
        )
    }
}

export default User