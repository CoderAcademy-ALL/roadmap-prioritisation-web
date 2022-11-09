import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormSelect,
  FormControl,
  Button,
} from "react-bootstrap";

import axios from "../../config/api";
const INITIATIVE_URL = "/api/v1/initiatives/";
const defaultInputFields = {
  _id: "",
  ticke_id: "",
  impact: "",
  confidence: "",
  effort: "",
  iceScore: 0,
  priority: "",
  target: "",
  target_launch: "",
  comment: "",
};
const InitiativeItem = () => {
  let params = useParams();

  const [initiative, setInitiative] = useState(defaultInputFields);

  const {
    _id,
    ticket_id,
    impact,
    confidence,
    effort,
    ice_score,
    priority,
    target,
    target_launch,
    launchDate,
    comment,
  } = initiative;

  useEffect(() => {
    const fetchData = async () => {
      const fetchInitiativeURL = INITIATIVE_URL + params.id;
      try {
        const response = await axios.get(fetchInitiativeURL);
        const responseInitiative = response.data.data;
        setInitiative(responseInitiative);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  console.log(initiative);
  const handleOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
  };
  return (
    <Container>
      <h1>Initiatives</h1>
      <h2>Table goes here</h2>
      <hr />
      <h3> Additional Information:</h3>
      <Row className="mb-3">
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formImpact" className="mx-2">
            <FormLabel>Impact</FormLabel>
            <FormSelect name="impact" value={impact} onChange={handleOnChange}>
              <option>xSmall</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>xLarge</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formConfidence" className="mx-2">
            <FormLabel>Confidence</FormLabel>
            <FormSelect
              name="confidence"
              value={confidence}
              onChange={handleOnChange}
            >
              <option>xSmall</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>xLarge</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formEffort" className="mx-2">
            <FormLabel>Effort</FormLabel>
            <FormSelect name="effort" value={effort} onChange={handleOnChange}>
              <option>xSmall</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>xLarge</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formICEscore" className="mx-2">
            <FormLabel>ICE Score</FormLabel>
            <FormControl
              type="text"
              name="iceScore"
              xs={3}
              value={ice_score}
              disabled
            />
          </FormGroup>
        </Col>
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formPriority" className="mx-2">
            <FormLabel>Priority</FormLabel>
            <FormSelect
              name="priority"
              value={priority}
              onChange={handleOnChange}
            >
              <option>P-0</option>
              <option>P-1</option>
              <option>P-2</option>
              <option>P-3</option>
              <option>P-4</option>
              <option>P-5</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formTarget" className="mx-2">
            <FormLabel>Target</FormLabel>
            <FormSelect name="target" value={target} onChange={handleOnChange}>
              <option>Edu</option>
              <option>P-1</option>
              <option>P-2</option>
              <option>P-3</option>
              <option>P-4</option>
              <option>P-5</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col className="mb-3" xs={2}>
          <FormGroup controlId="formTargetLaunchDate" className="mx-2">
            <FormLabel>Target Launch Date</FormLabel>
            <FormSelect
              name="target_launch"
              value={target_launch}
              onChange={handleOnChange}
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>Octorber</option>
              <option>November</option>
              <option>December</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <FormGroup controlId="formComment" className="mx-2">
          <FormLabel>Comment:</FormLabel>
          <FormControl as="textarea" row={3} onChange={handleOnChange} />
        </FormGroup>
      </Row>
      <Row className="mb-3">
        <Col xs={4}>
          <Button style={{ width: "12rem" }}> Clear</Button>
        </Col>
        <Col xs={4}>
          <Button style={{ width: "12rem" }}> Save </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InitiativeItem;
