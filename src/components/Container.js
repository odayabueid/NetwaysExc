import React from 'react';
import UsersList from './UsersList'
import UserDetails from './UserDetails'
class Container extends React.Component {
  state = {
    userSelected: null,
    userId: null,
    userObj: '',
    addUserObj: ''
  }
  selectCard = (card) => {
    this.setState({
      userSelected: card
    })
  }

  deleteUser = (userId) => {
    this.setState({
      userId: userId
    })
  }
  updatedUser = (userObj) => {
    this.setState({
      userObj: userObj
    })
  }

  addUser = (userObj) => {
    this.setState({
      addUserObj: userObj
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ backgroundColor: "#f8f8f8", minHeight: "720px" }}>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <UsersList selectCard={(user) => this.selectCard(user)} deleteUserFromListId={this.state.userId} updateUser={this.state.userObj} addUser={this.state.addUserObj} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
          <UserDetails addUser={(userObj) => { this.addUser(userObj) }} userSelected={this.state.userSelected} deleteUser={(userId) => { this.deleteUser(userId) }} updatedUser={(userObj) => {
            this.updatedUser(userObj)
          }} />
          {/* <CardInfo cardSelected={this.state.cardSelected} applyed={this.applyed} /> */}
        </div>
      </div>
    );
  }
}
export default Container