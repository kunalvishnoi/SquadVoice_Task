import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Modal from "react-modal";
class App extends Component {
  state = {
    currentState: "$300K - $400K",
    modalOpen: false,
    selectedPlan: "",
    name: "",
    email: "",
    phone: "",
    lpm: "",
    totalleads: "",
    crm: "",
    agents: "",
    leadsource: "",
    hear: ""
  };

  handleOpenModal = value => {
    this.setState({
      modalOpen: true,
      selectedPlan: value
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  setCurrentState = data => {
    this.setState({
      currentState: data
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      lpm,
      totalleads,
      crm,
      agents,
      leadsource,
      hear
    } = this.state;

    alert(
      `name: ${name} email: ${email} , phone: ${phone} , Monthly Leads: ${lpm} , Total Leads: ${totalleads} , CRM: ${crm} , Agents: ${agents} , Biggest Lead Source: ${leadsource} , hear: ${hear}`
    );

    this.setState({
      modalOpen: false,
      name: "",
      email: "",
      phone: "",
      lpm: "",
      totalleads: "",
      crm: "",
      agents: "",
      leadsource: "",
      hear: ""
    });
  };

  render() {
    const data = {
      "$100K - $200K": [
        {
          name: "Qualified 20",
          lpm: 20,
          price: "$69",
          totalqprice: "$1,380",
          tptalpprice: "$299",
          finalprice: "$1,679"
        },
        {
          name: "Qualified 40",
          lpm: 40,
          price: "$67",
          totalqprice: "$2,680",
          tptalpprice: "$599",
          finalprice: "$3,279"
        },
        {
          name: "Qualified 60",
          lpm: 60,
          price: "$65",
          totalqprice: "$3,900",
          tptalpprice: "$699",
          finalprice: "$4,599"
        },
        {
          name: "Qualified 80",
          lpm: 80,
          price: "$63",
          totalqprice: "$5,040",
          tptalpprice: "$799",
          finalprice: "$5,839"
        }
      ],
      "$200K - $300K": [
        {
          name: "Qualified 20",
          lpm: 20,
          price: "$79",
          totalqprice: "$1,580",
          tptalpprice: "$299",
          finalprice: "$1,879"
        },
        {
          name: "Qualified 40",
          lpm: 40,
          price: "$77",
          totalqprice: "$3,080",
          tptalpprice: "$599",
          finalprice: "$3,679"
        },
        {
          name: "Qualified 60",
          lpm: 60,
          price: "$74",
          totalqprice: "$4,440",
          tptalpprice: "$699",
          finalprice: "$5,139"
        },
        {
          name: "Qualified 80",
          lpm: 80,
          price: "$72",
          totalqprice: "$5,760",
          tptalpprice: "$799",
          finalprice: "$6,559"
        }
      ],
      "$300K - $400K": [
        {
          name: "Qualified 20",
          lpm: 20,
          price: "$99",
          totalqprice: "$1,980",
          tptalpprice: "$299",
          finalprice: "$2,279"
        },
        {
          name: "Qualified 40",
          lpm: 40,
          price: "$96",
          totalqprice: "$3,840",
          tptalpprice: "$599",
          finalprice: "$4,439"
        },
        {
          name: "Qualified 60",
          lpm: 60,
          price: "$93",
          totalqprice: "$5,580",
          tptalpprice: "$699",
          finalprice: "$6,279"
        },
        {
          name: "Qualified 90",
          lpm: 80,
          price: "$90",
          totalqprice: "$7,200",
          tptalpprice: "$799",
          finalprice: "$7,999"
        }
      ],
      "$400K - $500K": [
        {
          name: "Qualified 20",
          lpm: 20,
          price: "$109",
          totalqprice: "$2,180",
          tptalpprice: "$299",
          finalprice: "$2,479"
        },
        {
          name: "Qualified 40",
          lpm: 40,
          price: "$106",
          totalqprice: "$4,240",
          tptalpprice: "$599",
          finalprice: "$4,839"
        },
        {
          name: "Qualified 60",
          lpm: 60,
          price: "$102",
          totalqprice: "$6,120",
          tptalpprice: "$699",
          finalprice: "$6,819"
        },
        {
          name: "Qualified 80",
          lpm: 80,
          price: "$99",
          totalqprice: "$7,920",
          tptalpprice: "$799",
          finalprice: "$8,719"
        }
      ],
      "$500K+": [
        {
          name: "Qualified 20",
          lpm: 20,
          price: "$129",
          totalqprice: "$2,580",
          tptalpprice: "$299",
          finalprice: "$2,879"
        },
        {
          name: "Qualified 40",
          lpm: 40,
          price: "$125",
          totalqprice: "$5,000",
          tptalpprice: "$599",
          finalprice: "$5,599"
        },
        {
          name: "Qualified 60",
          lpm: 60,
          price: "$121",
          totalqprice: "$7,260",
          tptalpprice: "$699",
          finalprice: "$7,959"
        },
        {
          name: "Qualified 80",
          lpm: 80,
          price: "$117",
          totalqprice: "$9,360",
          tptalpprice: "$799",
          finalprice: "$10,159"
        }
      ]
    };

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    const { name, email, phone, lpm, totalleads, crm, agents } = this.state;

    return (
      <>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 className="text-center mx-3">Get Started with SquadVoice</h3>
          <hr />
          <p className="modalname">
            <b>Plan Selected: </b>
            {this.state.selectedPlan}
          </p>

          <form onSubmit={this.handleSubmit}>
            <label className="small-label">Name</label>
            <input
              className="form-control"
              value={name}
              type="text"
              onChange={this.handleChange}
              name="name"
              required
            ></input>
            <div className="row mt-2">
              <div className="col-7">
                <label className="small-label">E-mail Address</label>
                <input
                  className="form-control"
                  value={email}
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  required
                ></input>
              </div>

              <div className="col-5">
                <label className="small-label">Phone No.</label>
                <input
                  className="form-control"
                  value={phone}
                  type="text"
                  onChange={this.handleChange}
                  name="phone"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-7">
                <label className="small-label">
                  No. of leads you generate in a month
                </label>
                <input
                  className="form-control"
                  value={lpm}
                  type="number"
                  onChange={this.handleChange}
                  name="lpm"
                  required
                ></input>
              </div>

              <div className="col-5">
                <label className="small-label">Total leads in your CRM</label>
                <input
                  className="form-control"
                  value={totalleads}
                  type="number"
                  onChange={this.handleChange}
                  name="totalleads"
                  required
                ></input>
              </div>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col-7">
                <label className="small-label">Which CRM do you use?</label>
                <input
                  className="form-control"
                  value={crm}
                  type="text"
                  onChange={this.handleChange}
                  name="crm"
                  required
                ></input>
              </div>

              <div className="col-5">
                <label className="small-label">No. of Agents</label>
                <input
                  className="form-control"
                  value={agents}
                  type="number"
                  onChange={this.handleChange}
                  name="agents"
                  required
                ></input>
              </div>
            </div>
            <label lassName="small-label">
              What are your biggest lead sources?
            </label>
            <br />
            <input
              type="radio"
              name="leadsource"
              value="Zillo"
              className="mr-1"
              onChange={this.handleChange}
            />{" "}
            <span>Zillo</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="leadsource"
              value="Realtor"
              onChange={this.handleChange}
            />
            <span>Realtor</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="leadsource"
              value="Ylopo"
              onChange={this.handleChange}
            />
            <span>Ylopo</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="leadsource"
              value="Others"
              onChange={this.handleChange}
            />
            <span>Others</span>
            <br />
            <label className="small-label">How did you hear you about us</label>
            <br />
            <input
              type="radio"
              name="hear"
              value="Google"
              className="mr-1"
              onChange={this.handleChange}
            />{" "}
            <span>Google</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="hear"
              value="Facebook"
              onChange={this.handleChange}
            />
            <span>Facebook</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="hear"
              value="Email"
              onChange={this.handleChange}
            />
            <span>Email</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="hear"
              value="Friends"
              onChange={this.handleChange}
            />
            <span>Friends</span>
            <input
              className="mr-1 ml-2"
              type="radio"
              name="hear"
              value="Real Closers"
              onChange={this.handleChange}
            />
            <span>Real Closers</span>
            <br />
            <button className="btn btn-submit mt-2">Submit</button>
          </form>
        </Modal>
        <div className="container">
          <div className="options mb-5">
            {Object.keys(data).map((data, index) => {
              return (
                <div
                  key={index}
                  className={`items ${
                    data === this.state.currentState ? "activeItem" : ""
                  }`}
                >
                  <span onClick={() => this.setCurrentState(data)}>{data}</span>
                </div>
              );
            })}
          </div>

          <div className="row mt-5">
            {data[this.state.currentState].map((data, index) => {
              return (
                <div key={index} className="col-md-3 col-6 mt-3">
                  <div className="ratecard">
                    <div className="topbottom-card">{data.name}</div>
                    <div className="middle-card">
                      <span className="rate mt-3">{data.price}</span>
                      <span className="dotted-bottom pb-2">
                        Per Qualified lead
                      </span>
                      <span className="pt-2 ">Qualified Leads Per Month</span>
                      <span className="dotted-bottom pb-2 font-weight-bold">
                        {data.lpm}
                      </span>
                      <span className="pt-2">Platform Fee Per Month</span>
                      <span className="font-weight-bold pt-2">
                        {data.tptalpprice}
                      </span>
                    </div>
                    <div className="topbottom-card mt-4">
                      {data.finalprice} / month
                    </div>
                    <button
                      onClick={this.handleOpenModal.bind(this, data.name)}
                      className="btn mt-2 trial-btn"
                    >
                      Start Your Trial
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
