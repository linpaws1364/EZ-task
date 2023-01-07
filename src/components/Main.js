import React from "react";
import { useState } from "react";
import "../styles/Main.css";
import profile from "../assets/profile.png";
import pdfImg from "../assets/pdfImg.png";

function Main() {
  const symbol = "<>LucasFilms MOU_signed by George.pdf ";
  return (
    <div className="main">
      <div className="topbar">
        <div>
          <img className="profileImg" src={profile} alt="" />
        </div>
      </div>
      <div className="middlebar">
        <div className="middleTopSection">
          <div className="middleTop">
            <div className="midTopLeft">
              <img className="pdfImg" src={pdfImg} alt="#" />
              <span
                style={{
                  marginLeft: "7px",
                  fontSize: "20px",
                  backgroundColor: "white",
                }}
              >
                Lucas Films Private Limited
              </span>
            </div>
            <div>
              <button className="editButton">Edit</button>
            </div>
          </div>
          <div className="InfoSection">
            <div className="LeftInfo">
              <div style={{ marginBottom: "25px", backgroundColor: "white" }}>
                <div style={{ color: "grey", backgroundColor: "white" }}>
                  Company Code
                </div>
                <div style={{ color: "#112949", backgroundColor: "white" }}>
                  LUCF
                </div>
              </div>
              <div className="RighInfo">
                <div style={{ color: "grey", backgroundColor: "white" }}>
                  Company Logo
                </div>
                <div style={{ color: "#112949", backgroundColor: "white" }}>
                  Unavailable
                </div>
              </div>
            </div>
            <div className="Right Info">
              <div style={{ color: "grey", backgroundColor: "white" }}>
                Domains
              </div>
              <div style={{ color: "#112949", backgroundColor: "white" }}>
                @lucasfilms.com
              </div>
              <div style={{ color: "#112949", backgroundColor: "white" }}>
                @lucasstarwars.com
              </div>
              <div style={{ color: "#112949", backgroundColor: "white" }}>
                @starwars.com
              </div>
              <div style={{ color: "#112949", backgroundColor: "white" }}>
                +5 Others
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabBar">
        <div className="tabs">ENTITIES</div>
        <div className="tabs">INVOICE CODES</div>
        <div className="tabs">USERS</div>
      </div>
      <div className="lastBar">
        <div className="firstB">
          <div style={{ color: "grey", fontSize: "18px",backgroundColor:'white' }}>4 Entries</div>
          <i class="fa-solid fa-square-plus fa-2xl"></i>
        </div>
        <div className="secondB">
          <div style={{ fontSize: "16px", color: "grey", backgroundColor:'white' }}>
            Billing Location
          </div>
          <div style={{ fontSize: "16px", color: "grey", backgroundColor:'white' }}>Entity Name</div>
          <div style={{ fontSize: "16px", color: "grey", backgroundColor:'white' }}>Entity Code</div>
          <div style={{ fontSize: "16px", color: "grey", backgroundColor:'white' }}>
            MSLA Valid through
          </div>
          <div style={{ fontSize: "16px", color: "grey" , backgroundColor:'white'}}>File Sharing</div>
        </div>
        <div className="totalBar">
          <div className="thirdB">
            <span
              style={{
                fontSize: "16px",
                color: "#112949",
                marginRight: "63px",
              }}
            >
              Riyadh, Kingdom of Saudi Arabia
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#112949",
                marginRight: "86px",
              }}
            >
              Lucas Films Private Limited
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#112949",
                marginRight: "215px",
              }}
            >
              LUCF01
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#112949",
                marginRight: "147px",
              }}
            >
              3 June 2022 - 5 June 2030
            </span>
            <span
              style={{ fontSize: "16px", color: "#112949", marginRight: "" }}
            >
              External
            </span>
            <span style={{ marginLeft: "46px" }}>
              <i class="fa-solid fa-angle-up"></i>
            </span>
          </div>
          <div className="totalInfoSection">
            <div style={{ marginRight: "-25px" }}>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Address
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>Line 1</div>
                <div style={{ color: "#112949", fontSize: "16px" }}>Line 2</div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  City, Country
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  ZIP Code
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Charge Code/PO Number
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  Required
                </div>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Company Registration Number
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  UICE87F2T749WEY
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Company Registration Number
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  5 June 2025
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Duration of File Storage
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  90 Days
                </div>
              </div>
            </div>
            <div style={{ marginRight: "-200px" }}>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  TAX Registration Number
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  AHR37T983Q7TRG8FG
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  TRN Validity
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  5 June 2025
                </div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  Currency
                </div>
                <div style={{ color: "#112949", fontSize: "16px" }}>
                  US Dollar ($)
                </div>
              </div>
            </div>
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </div>
          <div className="bottomInfoSection">
            <div>
              <div>
                <div
                  style={{
                    marginBottom: "3px",
                    color: "grey",
                    fontSize: "16px",
                  }}
                >
                  MSLA
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <span
                    style={{
                      color: "#112949",
                      fontSize: "16px",
                      marginRight: "15px",
                    }}
                  >
                    20200916 EZ{symbol}
                  </span>
                  <span>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-sharp fa-solid fa-download"></i>
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginBottom: "3px",
                  color: "grey",
                  fontSize: "16px",
                }}
              >
                Corporate Price as per MSLA
              </div>
            </div>
            <div>
              <div
                style={{
                  marginBottom: "3px",
                  color: "grey",
                  fontSize: "16px",
                }}
              >
                VAT + WHT
              </div>
              <div>5% + 5%</div>
            </div>
          </div>
          <div className="collapseOptions">
            <div className="OptionsTop">
              <div style={{backgroundColor:'white', marginRight: "170px" }}>Service</div>
              <div style={{backgroundColor:'white'}}>Units</div>
              <div style={{backgroundColor:'white'}}>List Price</div>
              <div style={{backgroundColor:'white'}}>Offered Price</div>
              <div style={{backgroundColor:'white'}}>Discount</div>
            </div>
            <div className="OptionsMenu">
              <div style={{ marginLeft: "12px" }}>
                Arabic Language Translation : EZ Assured
              </div>
              <div style={{ marginLeft: "70px" }}>Words</div>
              <div style={{ marginLeft: "125px" }}>0.1 AED</div>
              <div style={{ marginLeft: "140px" }}>0.09 AED</div>
              <div style={{ marginLeft: "162px" }}>10% ( 19% )</div>
            </div>
            <div className="OptionsMenu">
              <div style={{ marginLeft: "12px" }}>
                Arabic Language Translation : EZ Assured
              </div>
              <div style={{ marginLeft: "70px" }}>Words</div>
              <div style={{ marginLeft: "125px" }}>0.1 AED</div>
              <div style={{ marginLeft: "140px" }}>0.09 AED</div>
              <div style={{ marginLeft: "162px" }}>10% ( 19% )</div>
            </div>
            <div className="OptionsMenu">
              <div style={{ marginLeft: "12px" }}>
                Arabic Language Translation : EZ Assured
              </div>
              <div style={{ marginLeft: "70px" }}>Words</div>
              <div style={{ marginLeft: "125px" }}>0.1 AED</div>
              <div style={{ marginLeft: "140px" }}>0.09 AED</div>
              <div style={{ marginLeft: "162px" }}>10% ( 19% )</div>
            </div>
          </div>
        </div>
        <div className="lastOptions" >
          <span
            style={{
              fontSize: "16px",
              color: "#112949",
              marginRight: "63px",
            }}
          >
            Riyadh, Kingdom of Saudi Arabia
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#EA7B2C",
              marginRight: "158px",
            }}
          >
            Lucas Animation
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#EA7B2C",
              marginRight: "220px",
            }}
          >
            DRAFT
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#EA7B2C",
              marginRight: "284px",
            }}
          >
            DRAFT
          </span>
          <span style={{ fontSize: "16px", color: "#EA7B2C", marginRight: "" }}>
            External
          </span>
          <span style={{ marginLeft: "46px" }}>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="lastOptions">
          <span
            style={{
              fontSize: "16px",
              color: "#112949",
              marginRight: "63px",
            }}
          >
            Riyadh, Kingdom of Saudi Arabia
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#112949",
              marginRight: "127px",
            }}
          >
            Star Wars Production
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#112949",
              marginRight: "215px",
            }}
          >
            LUCF02
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#112949",
              marginRight: "147px",
            }}
          >
            3 June 2022 - 5 June 2030
          </span>
          <span style={{ fontSize: "16px", color: "#112949", marginRight: "15px" }}>
            None
          </span>
          <span style={{ marginLeft: "46px" }}>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
