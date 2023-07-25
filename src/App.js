import React from "react"
import Header from "./components/Header.js"
import Users from "./components/Users.js"
import AddUser from "./components/AddUser.js"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
        })

        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    render() {
        return (<div>
                <Header title="User list"/>
                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        )
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }
}

export default App