import React, { Component } from "react";
import Component1 from "./component1";
import Component2 from "./component2";
import "./index.css";
import ReactPaginate from "react-paginate";
import Footer from "./footer";

class Combine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Job: [
        {
          JobTitle: "Web Development",
          Location: "Lahore",
          Rate: 132341,
          Percentage: "99%",
          Title: "Web Development",
          PerHrRate: "26$",
          StartingRate: "800$",
          Description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
          Empoyeers: 5,
          Invoices: 10,
          Largest: 50000,
        },
        {
          JobTitle: "Web Development",
          Location: "Lahore",
          Rate: 132341,
          Percentage: "99%",
          Title: "Web Development",
          PerHrRate: "26$",
          StartingRate: "800$",
          Description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
          Empoyeers: 5,
          Invoices: 10,
          Largest: 50000,
        },
        {
          JobTitle: "Algorithm",
          Location: "Chennai",
          Rate: 132341,
          Percentage: "99%",
          Title: "DSA",
          PerHrRate: "26$",
          StartingRate: "800$",
          Description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
          Empoyeers: 7,
          Invoices: 50,
          Largest: 100000,
        },
      ],

      offset: 0,
      data: [],
      perPage: 2,
      currentPage: 0,
      Category: "",
      Location: " ",
      Earning: 0,
      Employeers: 0,
      Invoices: 0,
      Largest: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handlecallbackLocation = this.handlecallbackLocation.bind(this);
    this.handlecallbackFilter = this.handlecallbackFilter.bind(this);
  }

  handlecallback = (ChildData) => {
    this.setState({ Category: ChildData }, () => {
      console.log("Category = ", this.state.Category);
    });
  };

  handlecallbackLocation = (ChildData) => {
    this.setState({ Location: ChildData }, () => {
      console.log("Location = ", this.state.Location);
    });
  };

  handlecallbackFilter = (ChildData, ChildData1, ChildData2, ChildData3) => {
    this.setState(
      {
        Earning: ChildData,
        Employeers: ChildData1,
        Invoices: ChildData2,
        Largest: ChildData3,
      },
      () => {
        console.log("Employeers = ", ChildData1);
      }
    );
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should mount called............");
    this.forceUpdate(() => {
      this.receivedData();
    });
    return this.state.Category != nextState.Category;
  }

  // componentDidUpdate() {
  //     this.forceUpdate();
  // }

  componentDidMount() {
    console.log("Mount Invoked ...........");

    this.forceUpdate(() => {
      this.receivedData();
    });
  }

  receivedData() {
    // console.log("state of category = ", this.state.Category);
    // console.log("state of Location = ", this.state.Location);

    console.log("Invoices = ", this.state.Invoices);
    let data = this.state.Job;

    if (this.state.Category.localeCompare(" ")) {
      data = this.state.Job.filter((name) => {
        return name.JobTitle.includes(this.state.Category);
      });
    }

    if (this.state.Location.localeCompare(" ")) {
      data = this.state.Job.filter((name) => {
        return (
          name.Location.includes(this.state.Location) &&
          name.Rate > this.state.Earning &&
          name.Empoyeers > this.state.Employeers &&
          name.Invoices > this.state.Invoices &&
          name.Largest > this.state.Largest
        );
      });
    }

    // // Filter box
    // data = this.state.Job.filter((name) => {
    //   return (
    //     name.Rate > this.state.Earning &&
    //     name.Empoyeers > this.state.Employeers &&
    //     name.Invoices > this.state.Invoices &&
    //     name.Largest > this.state.Largest
    //   );
    // });

    console.log("Filter Invoices = ", data);

    console.log("Data from Filter ", this.data);

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    // console.log("SLice = ", slice);

    // console.log("Updated", this.state.Category);
    const postData = slice.map((counter) => (
      <Component1
        Location={counter.Location}
        Rate={counter.Rate}
        Percentage={counter.Percentage}
        Title={counter.Title}
        PerHrRate={counter.PerHrRate}
        StartingRate={counter.StartingRate}
        Description={counter.Description}
        JobTitle={counter.JobTitle}
        selected={true}
      />
    ));

    // console.log("Post Data", postData);

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData,
    });

    // console.log("Page Count = ", this.state.pageCount);
    this.forceUpdate();
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  render() {
    return (
      <div>
        <Component2
          parentCallBack={this.handlecallback}
          parentLocationCallBack={this.handlecallbackLocation}
          parentFilterCallBack={this.handlecallbackFilter}
        />
        <div>
          {this.state.postData}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Combine;
