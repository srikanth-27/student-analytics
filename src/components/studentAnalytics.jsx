import React, { useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import Graph from "./graph";
import Extended from "./Extended";
const Page = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="m-5">
      {seeMore ? (
        <Extended />
      ) : (
        <div>
          <h2>Student Analytics</h2>
          <Tabs
            //defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="m-3"
            variant="pills"
          >
            <Tab eventKey="home" title="Video Analytics">
              <div className="m-4">
                <h3 className="mb-4">Video Analytics for period of time</h3>
                <Tabs className="mb-3">
                  <Tab
                    eventKey="home"
                    title={
                      <div>
                        <p>No of videos watched</p>
                        <h4>15.4K</h4>
                      </div>
                    }
                  >
                    <Graph />
                  </Tab>
                  <Tab
                    eventKey="profile"
                    title={
                      <div>
                        <p>Hours spent watching the video's </p>
                        <h4>135.4K</h4>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    eventKey="contact2"
                    title={
                      <div>
                        <p>Trainings/courses enrolled</p>
                        <h4>24</h4>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    eventKey="contact1"
                    title={
                      <div>
                        <p>Assignments Submitted</p>
                        <h4>213</h4>
                      </div>
                    }
                  ></Tab>
                </Tabs>
              </div>
            </Tab>
            <Tab eventKey="home1" title="Behavior Analytics">
              Behavior Analytics
            </Tab>
            <Tab eventKey="contact" title="Performance Analytics">
              Performance Analytics
            </Tab>
            <Tab eventKey="botAnalytics" title="Bot Analytics">
              Bot Analytics
            </Tab>
          </Tabs>
          <Button
            variant="outline-secondary"
            onClick={() => setSeeMore(!seeMore)}
          >
            see more
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
