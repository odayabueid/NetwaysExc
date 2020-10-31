import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class UsersList extends React.Component {

  state = {
    usersArr: [
      {
        id: 1, loginName: 'John James', displayName: 'John James',
        dateOfBirth: '1992-06-01', country: 'USA', address: 'NEWYourk',
        isActive: true, salary: 5000, profilePic: 'https://cdn3.vectorstock.com/i/1000x1000/64/77/doctor-cartoon-character-person-on-white-vector-13566477.jpg'
      },
      {
        id: 2, loginName: 'YazanAbueid', displayName: 'YazanAbueid',
        dateOfBirth: '1982-05-24', country: 'Jordan', address: 'Amman-Jordan',
        isActive: true, salary: 1000, profilePic: 'https://cdn1.vectorstock.com/i/1000x1000/79/30/business-man-cartoon-character-young-handsome-vector-14427930.jpg'
      },
      {
        id: 3, loginName: 'OdayAbueid', displayName: 'OdayAbueid',
        dateOfBirth: '1992-03-15', country: 'Jordan', address: 'Amman-Jordan',
        isActive: false, salary: 3000, profilePic: 'https://i.graphicmama.com/uploads/2019/7/5d1f4b0c0fffe-japanese-businessman-cartoon-vector-character-1.png'
      },
      {
        id: 4, loginName: 'GeorgeEdward', displayName: 'GeorgeEdward',
        dateOfBirth: '1985-01-13', country: 'USA', address: 'California',
        isActive: true, salary: 7000, profilePic: 'https://cdn2.iconfinder.com/data/icons/businessman-mascot/180/9-512.png'
      },
      {
        id: 5, loginName: 'SamerKhaleel', displayName: 'SamerKhaleel',
        dateOfBirth: '1996-2-28', country: 'Jordan', address: 'Amman-Jordan',
        isActive: true, salary: 300, profilePic: 'https://static.vectorcharacters.net/uploads/2012/05/Boy_Cartoon_Character_Preview_Big.jpg'
      },
      {
        id: 6, loginName: 'RamaAhmed', displayName: 'RamaAhmed',
        dateOfBirth: '1995-07-22', country: 'Jordan', address: 'Irbid-Jordan',
        isActive: true, salary: 700, profilePic: 'https://cdn6.f-cdn.com/contestentries/1037616/24755936/592e6daf613fe_thumb900.jpg'
      },
      {
        id: 7, loginName: 'LisaOmar', displayName: 'LisaOmar',
        dateOfBirth: '1999-08-20', country: 'Jordan', address: 'Irbid-Jordan',
        isActive: true, salary: 500, profilePic: 'https://image.freepik.com/free-vector/business-woman-character_69773-1.jpg'
      },
      {
        id: 8, loginName: 'SalamRami', displayName: 'SalamRami',
        dateOfBirth: '1995-11-10', country: 'UAE', address: 'Dubai-UAE',
        isActive: true, salary: 2000, profilePic: 'https://image.shutterstock.com/image-illustration/legal-blonde-business-woman-illustration-260nw-599251400.jpg'
      },
      {
        id: 9, loginName: 'TuleenHamed', displayName: 'TuleenHamed',
        dateOfBirth: '2000-11-3', country: 'Jordan', address: 'Irbid-Jordan',
        isActive: true, salary: 650, profilePic: 'https://png.pngitem.com/pimgs/s/54-547946_business-woman-animation-png-transparent-png.png'
      }
    ],
    search: '',
    homePage: false
  }
  componentDidUpdate = (prevProps, props) => {
    if (prevProps.deleteUserFromListId != this.props.deleteUserFromListId) {
      this.deleteUserFromList(this.props.deleteUserFromListId)
    }
    if (prevProps.updateUser != this.props.updateUser) {
      this.updateUser(this.props.updateUser)
    }
    if (prevProps.addUser != this.props.addUser) {
      this.addUser(this.props.addUser)
    }
  }
  // add user to main list
  addUser = (addUser) => {
    addUser.id = this.state.usersArr.length + 1
    var adduserArr = this.state.usersArr
    adduserArr.unshift(addUser)
    this.setState({
      usersArr: adduserArr
    })
  }
  // update user on the list
  updateUser = (userObj) => {
    var updateUser = []
    this.state.usersArr.forEach(el => {
      if (el.id == userObj.id) {
        updateUser.push(userObj)
      } else {
        updateUser.push(el)
      }
    })
    this.setState({
      usersArr: updateUser
    })
  }
  // delete user from list
  deleteUserFromList = (userId) => {
    var deleteUserFromArr = []
    this.state.usersArr.forEach(el => {
      if (el.id != userId) {
        deleteUserFromArr.push(el)
      }
    })
    this.setState({
      usersArr: deleteUserFromArr
    })
  }
  //handle the search
  changeTextHandler = (name, event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  goToHomePage = () => {
    this.setState({
      homePage: true
    })
  }
  renderRedirect = () => {
    if (this.state.homePage) {
      return <Redirect to={{
        pathname: "/"
      }} />
    }
  }

  render() {
    let filtered = this.state.usersArr.filter(
      (fil) => {
        return fil.displayName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      })
    return (
      <div style={styles.content}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", backgroundColor: "#3995d2", minHeight: "40px" }}>
          <ArrowBackIcon style={{ fontSize: "35px", color: "#fff", cursor: "pointer", margin: '2px' }} onClick={this.goToHomePage} />
          {this.renderRedirect()}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.search}>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <TextField autoComplete="off" onChange={(event) => {
              this.changeTextHandler('search', event)
            }} value={this.state.search} style={styles.inputField} id="outlined-basic" label="Search" variant="outlined" />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", height: "700px", overflowY: 'auto' }}>
          {filtered.map((user, index) => {
            return <div style={{ marginTop: "15px" }} className="col-xs-6 col-sm-6 col-md-3 col-lg-3" onClick={() => {
              this.props.selectCard(user)
            }}>

              <Card
                style={{ maxWidth: "245px" }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: "140px" }}
                    image={user.profilePic}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.displayName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <div className="col-xs-12" style={{ padding: "0px", marginBottom: "5px" }}>
                        {user.country}
                      </div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default UsersList

const styles = {
  content: {
    height: "700px",
    backgroundColor: "#fff",
    marginTop: "15px",

  }, avatar: {
    height: "150px",
    width: "150px"
  },
  inputField: {
    width: "100%"
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "15px"
  }
}