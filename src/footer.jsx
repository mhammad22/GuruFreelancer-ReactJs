import React, { Component } from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import foot from "./Images/foot.png";
import facebook from "./Images/fb.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="whole_table_div">
          <div className="table_tags container">
            <h2 className="heading_table">
              <b>Top Search Related Skills</b>
            </h2>
            <ul className="table_unordered_list">
              <li className="table_List_index">AI Engineers</li>
              <li className="table_List_index">Android Developers</li>
              <li className="table_List_index">Angular Developers</li>
              <li className="table_List_index">AWS Developers</li>
              <li className="table_List_index">Back-EndDevelopers</li>
              <li className="table_List_index">C# Developer</li>
              <li className="table_List_index">AI Engineers</li>
              <li className="table_List_index">Android Developers</li>
              <li className="table_List_index">Angular Developers</li>
              <li className="table_List_index">AWS Developers</li>
              <li className="table_List_index">Back-EndDevelopers</li>
              <li className="table_List_index">AI Engineers</li>
              <li className="table_List_index">Android Developers</li>
              <li className="table_List_index">Angular Developers</li>
              <li className="table_List_index">AWS Developers</li>
              <li className="table_List_index">Back-EndDevelopers</li>
              <li className="table_List_index">C# Developer</li>
              <li className="table_List_index">AI Engineers</li>
              <li className="table_List_index">Android Developers</li>
              <li className="table_List_index">Angular Developers</li>
              <li className="table_List_index">AWS Developers</li>
              <li className="table_List_index">Back-EndDevelopers</li>
              <li className="table_List_index">C# Developer</li>
              <li className="table_List_index">
                <a className="view_more">View More Freelance Developers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ImgFooter">
          <img src={foot}></img>
        </div>

        <footer className="footer_mainDiv">
          <div className="footer_innerDiv">
            <h2 className="headingFooter"></h2>
            <div className="Overall_div_footer">
              <div className="Individual_div">
                <h3 className="Individual_div_heading">Navigate</h3>
                <ul className="PaddingLeft">
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                </ul>
              </div>
              <div className="Individual_div">
                <h3 className="Individual_div_heading">Company Info</h3>
                <ul className="PaddingLeft">
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                </ul>
              </div>
              <div className="Individual_div">
                <h3 className="Individual_div_heading">Resources</h3>
                <ul className="PaddingLeft">
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                </ul>
              </div>
              <div className="Individual_div">
                <h3 className="Individual_div_heading">Policies</h3>
                <ul className="PaddingLeft">
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                  <li className="List_footer">
                    <a className="Link_tag_footer">Ios Developer</a>
                  </li>
                </ul>
              </div>
              <div className="Individual_div">
                <h3 className="Individual_div_heading">Connect With us</h3>
                <img src={facebook}></img>
              </div>
            </div>
          </div>
          <div className="footer_end">
            <div className="straightLine"></div>
            <div className="Logo_MainFooter">
              <div className="Logo_InnerDiv">
                <h6> Get Work Done</h6>
              </div>

              <ul className="Footer_Ulist">
                <li className="Footer_IndexList">
                  Copyright 2010 - 2021 Guru, LLC &nbsp; &nbsp; |
                </li>
                <li className="Footer_IndexList">Privacy Policy</li>
                <li className="Footer_IndexList">Website Terms</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
