import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import UpdateIcon from '@material-ui/icons/Update';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class UsersDetails extends React.Component {
  state = {
    userDetails: "",
    loginName: '',
    displayName: '',
    address: '',
    salary: '',
    country: '',
    activeUpdateButton: false,
    dateOfBirth: '',
    activeUrlField: false,
    countriesArr: [
      { label: "UAE", value: 'UAE' },
      { label: "Jordan", value: 'Jordan' },
      { label: "KSA", value: 'KSA' },
      { label: "Syria", value: 'Syria' },
    ],
    active: false
  }

  componentDidUpdate = (prevProps, props) => {
    if (prevProps.userSelected != this.props.userSelected) {
      this.setState({
        loginName: this.props.userSelected.loginName,
        displayName: this.props.userSelected.displayName,
        address: this.props.userSelected.address,
        salary: this.props.userSelected.salary,
        country: this.props.userSelected.country,
        dateOfBirth: this.props.userSelected.dateOfBirth,
        profilePic: this.props.userSelected.profilePic,
        userDetails: this.props.userSelected,
        disabled: true,
        activeUrlField: false,
        activeUpdateButton: false,
        active: this.props.userSelected.isActive
      })
    }
  }

  changeTextHandler = (name, e) => {
    this.setState({
      [name]: e.target.value
    })
  }

  activeUpdateUser = (userId) => {
    this.setState({
      disabled: false,
      activeUpdateButton: true,
      activeUrlField: false
    })
  }

  updatedUser = () => {

    const { active, userDetails, loginName, displayName, address, salary, country, dateOfBirth, profilePic } = this.state
    let userObj = {
      id: userDetails.id, loginName: loginName, displayName: displayName,
      address: address, salary: salary, country: country, dateOfBirth: dateOfBirth, profilePic: profilePic, isActive: active
    }
    this.props.updatedUser(userObj)
    this.setState({
      userDetails: ''
    })
  }

  addUser = () => {
    this.setState({
      loginName: '',
      displayName: '',
      address: '',
      salary: '',
      country: '',
      activeUpdateButton: false,
      activeUrlField: true,
      dateOfBirth: '',
      disabled: false,
      profilePic: '',
      active: true
    })

  }
  addNewUser = () => {

    const { active, userDetails, loginName, displayName, address, salary, country, dateOfBirth, profilePic } = this.state
    let userObj = {
      id: userDetails.id, loginName: loginName, displayName: displayName,
      address: address, salary: salary, country: country, dateOfBirth: dateOfBirth, profilePic: profilePic, isActive: active
    }
    this.props.addUser(userObj)
    this.setState({
      userDetails: ''
    })
  }
  handleRadioChange = (event) => {
    if (event.target.value === 'Active') {
      this.setState({
        active: true
      })
    }
    if (event.target.value === 'InActive') {
      this.setState({
        active: false
      })
    }
  }
  render() {
    return (
      <div style={styles.content}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", backgroundColor: "#3995d2", minHeight: "40px" }}>

        </div>
        {this.state.userDetails ?
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: '-webkit-center', marginTop: "20px" }}>
              <Avatar alt="Remy Sharp" src={this.state.profilePic} style={styles.avatar} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", marginTop: '40px' }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <TextField onChange={(event) => {
                  this.changeTextHandler('loginName', event)
                }} value={this.state.loginName} style={styles.inputField} id="outlined-basic" label="Login Name" variant="outlined" disabled={this.state.disabled} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <TextField onChange={(event) => {
                  this.changeTextHandler('displayName', event)
                }} value={this.state.displayName} style={styles.inputField} id="outlined-basic" label="Display Name" variant="outlined" disabled={this.state.disabled} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", marginTop: '10px' }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <TextField onChange={(event) => {
                  this.changeTextHandler('address', event)
                }} value={this.state.address} style={styles.inputField} id="outlined-basic" label="Address" variant="outlined" disabled={this.state.disabled} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <TextField onChange={(event) => {
                  this.changeTextHandler('salary', event)
                }} value={this.state.salary} style={styles.inputField} id="outlined-basic" type="number" label="Salary" variant="outlined" disabled={this.state.disabled} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ padding: "0px", marginTop: '10px' }}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <TextField style={styles.inputField}
                  id="outlined-select-currency-native"
                  select
                  disabled={this.state.disabled}
                  label="country"
                  value={this.state.country}
                  onChange={(event) => {
                    this.changeTextHandler('country', event)
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  <option value={this.state.country}>
                    {this.state.country}
                  </option>
                  {(this.state.activeUpdateButton || this.state.activeUrlField) &&
                    this.state.countriesArr.map(el => {
                      return <option value={el.value}>
                        {el.label}
                      </option>
                    })
                  }
                </TextField>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10px' }}>
                <form style={{ display: 'flex', flexWrap: 'wrap' }} noValidate>
                  <TextField
                    style={styles.inputField}
                    id="date"
                    label="Birthday"
                    type="date"
                    onChange={(event) => {
                      this.changeTextHandler('dateOfBirth', event)
                    }}
                    value={this.state.dateOfBirth}
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled={this.state.disabled}
                  />
                </form>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: '15px' }}>
                <RadioGroup value={this.state.animationRadio} onChange={this.handleRadioChange}>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <FormControlLabel checked={this.state.active} disabled={this.state.disabled} value="Active" control={<Radio style={styles.checkBoxStyle}
                    />} label="Active" />
                    <FormControlLabel checked={!this.state.active} disabled={this.state.disabled} value="InActive" control={<Radio style={styles.checkBoxStyle}
                    />} label="InActive" />
                  </div>
                </RadioGroup>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginTop: "15px" }}>
                {this.state.activeUrlField &&
                  <div>
                    <TextField onChange={(event) => {
                      this.changeTextHandler('profilePic', event)
                    }} style={styles.inputField} id="outlined-basic" label="Image Url" variant="outlined" />
                    <Button variant="contained" color="primary" style={{ float: 'right', marginTop: "15px" }} onClick={() => {
                      this.addNewUser()
                    }}>
                      Add
                    </Button>
                  </div>
                }
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: "10px" }}>
              {this.state.activeUpdateButton &&
                <Button
                  variant="contained"
                  color="primary"
                  // size="large"
                  style={{ float: 'right', marginTop: "10px" }}
                  startIcon={<SaveIcon />}
                  onClick={() => {
                    this.updatedUser()
                  }}
                >
                  Save
              </Button>
              }
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Button onClick={() => {
                this.addUser()
              }}
                variant="contained"
                color="primary"
                // className={classes.button}
                startIcon={<AddCircleIcon />}
              >
                Add User
              </Button>
              <Button
                style={{ margin: "0px 18px" }}
                variant="contained"
                color="secondary"
                startIcon={<UpdateIcon />}
                onClick={() => {
                  this.activeUpdateUser(this.state.userDetails)
                }}
              >
                Update
              </Button>
              <Button onClick={() => {
                this.props.deleteUser(this.state.userDetails.id)
                this.setState({
                  userDetails: ''
                })
              }}
                variant="contained"
                color="default"
                // className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>

              {/* <button onClick={() => {
                this.addUser()
              }}>
                ADD
              </button> */}

            </div>

          </div>
          : <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center', marginTop: "70px" }}><h2>click on user for more Details</h2></div>
          </div>
        }
      </div>
    )
  }
}

export default UsersDetails

const styles = {
  content: {
    minHeight: "700px",
    backgroundColor: "#fff",
    marginTop: "15px"
  }, avatar: {
    height: "150px",
    width: "150px"
  },
  inputField: {
    width: "100%"
  },
  checkBoxStyle: {
    color: "#3995d2"
  }
}