/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from "react";
import {
  AiOutlineUser,
  AiOutlineFall,
  AiOutlineRise,
  AiOutlineTrophy,
} from "react-icons/ai";
import { RiStickyNoteLine, RiAddLine, RiEditLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";

import "./index.scss";
import { Col, Row, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import Metric from "../Common/Widgets/Metric";
import Graph from "../Common/Widgets/Graph";
import ListWithGraph from "../Common/Widgets/ListWithGraph";
import List from "../Common/Widgets/List";
import {
  getStudentCount,
  getAverageMark,
  getUnderPerforming,
  getFinished,
  getLectionsLeft,
  getHourSpend,
  getStudentAverage,
  getStudentNumberByMonth,
  studentByType,
} from "../../utils/service/widgetsService";
import SimpleModal from "../Common/SimpleModal";
import { renderMarkDetails } from "../../utils/healper";

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.simpleModalRef = React.createRef();
  }

  renderIcon = (Icon, style = {}) => {
    return <Icon style={style} />;
  };

  studentClicked = value => {
    if(this.simpleModalRef.current.setStateData){
      this.simpleModalRef.current.setStateData('Mark List', () => renderMarkDetails(value))
    }
  };

  render() {
    return (
      <div className="dashboard-conatiner">
        <Row>
          <Col>
            <h2>Dashboard</h2>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Mobile UX</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>UI Design cource</BreadcrumbItem>
            </Breadcrumb>
          </Col>
          <Col>
            <Button className="pull-right" color="primary">
              <RiAddLine className="mr-2" />
              Create New Dashboard
            </Button>
            <Button className="pull-right mr-3" outline color="primary">
              <RiEditLine className="mr-2" /> Manage Dashboar
            </Button>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col sm={6} md={3} xs={12}>
            <Metric
              name="Students"
              icon={(style) => this.renderIcon(AiOutlineUser, style)}
              value={0}
              color="rgba(113, 59, 219, 0.05)"
              iconClr="#6F52ED"
              caller={getStudentCount}
            />
          </Col>
          <Col sm={6} md={3} xs={12}>
            <Metric
              name="Average Mark"
              value={0}
              icon={(style) => this.renderIcon(AiOutlineRise, style)}
              color="rgba(51, 214, 159, 0.07)"
              iconClr="#21B8C7"
              caller={getAverageMark}
            />
          </Col>
          <Col sm={6} md={3} xs={12}>
            <Metric
              name="Underperforming students"
              icon={(style) => this.renderIcon(AiOutlineFall, style)}
              value={0}
              color="rgba(55, 76, 97, 0.05)"
              iconClr="#FF4C61"
              caller={getUnderPerforming}
            />
          </Col>
          <Col sm={6} md={3} xs={12}>
            <Metric
              name="Finished homeworks"
              value={0}
              icon={(style) => this.renderIcon(RiStickyNoteLine, style)}
              color="rgba(76, 184, 255, 0.07)"
              iconClr="#4CB8FF"
              caller={getFinished}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Row>
              <Col sm={12} className="mb-5">
                <Graph
                  title="Student number change per month"
                  caller={getStudentNumberByMonth}
                  data={[]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Metric
                  name="Lections left"
                  value={0}
                  color="rgba(255, 184, 0, 0.07)"
                  icon={(style) => this.renderIcon(AiOutlineTrophy, style)}
                  iconClr="#FFB800"
                  caller={getLectionsLeft}
                />
              </Col>
              <Col md={6} xs={12}>
                <Metric
                  name="Hours Spend On Lections"
                  value={0}
                  color="rgba(6, 184, 255, 0.07)"
                  icon={(style) => this.renderIcon(IoIosTimer, style)}
                  iconClr="#4CB8FF"
                  caller={getHourSpend}
                />
              </Col>
            </Row>
          </Col>
          <Col sm={6} md={3} xs={12}>
            <List
              title="Students by average mark"
              data={[]}
              caller={getStudentAverage}
              onRowClick={this.studentClicked}
            />
          </Col>
          <Col sm={6} md={3} xs={12}>
            <ListWithGraph
              title="Students by type of studying"
              data={{
                data: [],
                graph: {},
              }}
              caller={studentByType}
            />
          </Col>
        </Row>
        <SimpleModal ref={this.simpleModalRef} />
      </div>
    );
  }
}

export default Dashboard;
