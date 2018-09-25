import React from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./Timeline";

class Timeline extends React.Component {
  render() {
    return (
      <div className="ui-timeline">
        <ul className="timeline">
          <li>
            <p className="empty-timeline" />
          </li>
          <li>
            <i className="timeline-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </i>
            <div className="timeline-content">
              <h4 className="title">Title</h4>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.
              </p>
            </div>
          </li>
          <li>
            <i className="timeline-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </i>
            <div className="timeline-content">
              <h4 className="title">Title</h4>
              <p className="content">
                Sed ut perspiciatis unde omnis iste natus error sitvoluptatem.
              </p>
            </div>
          </li>
          <li>
            <Button size="lg" color="success" className="submit-button">
              Next
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Timeline;
