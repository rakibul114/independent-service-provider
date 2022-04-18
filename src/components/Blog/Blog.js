import React from 'react';
import './Blog.css';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
      <div className="container">
        <div className="faq-title">
          <h1>Frequently Ask Question? FAQ</h1>
        </div>
        <div>
          <Accordion
            className="accordian-boxs"
            defaultActiveKey={["0"]}
            alwaysOpen
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What are the difference between Authentication and
                Authorization? #1
              </Accordion.Header>
              <Accordion.Body>
                <h4>Authentication:</h4>
                <ul>
                  <li>
                    In authentication process, the identity of users are checked
                    for providing the access to the system.
                  </li>
                  <li>
                    In authentication process, users or persons are verified.
                  </li>
                  <li>It is done before the authorization process.</li>
                  <li>It needs usually user’s login details.</li>
                  <li>
                    {" "}
                    Authentication determines whether the person is user or not.
                  </li>
                </ul>
                <h4>Authorization:</h4>
                <ul>
                  <li>
                    While in authorization process, person’s or user’s
                    authorities are checked for accessing the resources.
                  </li>
                  <li>
                    While in this process, users or persons are validated.
                  </li>
                  <li>
                    While this process is done after the authentication process.
                  </li>
                  <li>While it needs user’s privilege or security levels.</li>
                  <li>While it determines What permission do user have?</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Why are you using firebase? What other options do you have to
                implement authentication? #2
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Firebase is a Backend-as-a-Service (Baas). It provides
                  developers with a variety of tools and services to help them
                  develop quality apps, grow their user base, and earn profit.
                  It is built on Google’s infrastructure. Firebase is
                  categorized as a NoSQL database program, which stores data in
                  JSON-like documents.
                            </p>
                            <p>As a beginner I am using firebase for authentication and hosting my app.</p>
                <div>
                  <div>
                    <h4>List of other authentication options:</h4>
                    <ol>
                      <li>
                        Parse:
                        <span>
                          {" "}
                          <a
                            className="text-decoration-none"
                            href="https://parseplatform.org/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        Back4App:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://www.back4app.com/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        AWS Amplify:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://aws.amazon.com/amplify/?tag=rigorousthemes-20"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        Kuzzle:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://kuzzle.io/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        Couchbase:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://www.couchbase.com/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        NativeScript:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://nativescript.org/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        Reactive Database or RxDB:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://rxdb.info/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        Flutter:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://flutter.dev/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        LoopBack:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://loopback.io/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                      <li>
                        SashiDo:{" "}
                        <span>
                          <a
                            className="text-decoration-none"
                            href="https://www.sashido.io/en/"
                            target="blank"
                          >
                            Click here to explore
                          </a>
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What other services does firebase provide other than
                authentication? #3
              </Accordion.Header>
              <Accordion.Body>
                <h4>Top functionalities of firebase are:</h4>
                <ul>
                  <li>
                    <b>Authentication:</b> It supports authentication using
                    passwords, phone numbers, Google, Facebook, Twitter, and
                    more. The Firebase Authentication (SDK) can be used to
                    manually integrate one or more sign-in methods into an app.
                  </li>
                  <li>
                    <b>Realtime database:</b> Data is synced across all clients
                    in realtime and remains available even when an app goes
                    offline.
                  </li>
                  <li>
                    <b>Hosting:</b> Firebase Hosting provides fast hosting for a
                    web app; content is cached into content delivery networks
                    worldwide.
                  </li>
                  <li>
                    <b>Test lab:</b> The application is tested on virtual and
                    physical devices located in Google’s data centers.
                  </li>
                  <li>
                    <b>Notifications:</b> Notifications can be sent with
                    firebase with no additional coding.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
};

export default Blog;