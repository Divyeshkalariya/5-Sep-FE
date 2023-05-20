import React from "react";
import { Card, Button, Container, Col,Row } from "react-bootstrap";
import netflix from "../images/Netflix.png"
import disney from "../images/disney+hotstar.png"
import Amazon from "../images//Amazon-Prime.webp"

function BootstrapApp() {

    return (

        <>
            <Container className="mt-5">
            <Row>
                <Card className=" col-md-4 col-sm-12 mt-sm-5">
                    <Card.Img variant="top" src={netflix} className="img-fluid " style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Netflix</Card.Title>
                        <Card.Text align="justify">
                        Netflix Inc. is an American media company based in Los Gatos, California. Founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California, it operates the over-the-top subscription video .
                        </Card.Text>
                        <Button variant="primary" href="https://www.netflix.com/">Watch Here</Button>
                    </Card.Body>
                </Card>

                <Card className=" col-md-4 col-sm-12 mt-sm-5">
                    <Card.Img variant="top" src={disney} className="img-fluid " style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Disney + Hotstar</Card.Title>
                        <Card.Text align="justify">
                        Amazon Prime Video, or simply Prime Video, is an American subscription video on-demand over-the-top streaming and rental service of Amazon offered as a standalone service.
                        </Card.Text>
                        <Button variant="primary" href="https://www.hotstar.com/">Watch Here</Button>
                    </Card.Body>
                </Card>

                <Card className=" col-md-4 col-sm-12 mt-sm-5">
                    <Card.Img variant="top" src={Amazon} className="img-fluid " style={{height:"200px"}}/>
                    <Card.Body>
                        <Card.Title>Amazon Prime</Card.Title>
                        <Card.Text align="justify">
                        Disney+ Hotstar is an Indian subscription video on-demand over-the-top streaming service owned by Novi Digital Entertainment of Disney Star and operated by Disney Streaming.
                        </Card.Text>
                        <Button variant="primary" href="https://www.primevideo.com/">Watch Here</Button>
                    </Card.Body>
                </Card>
            </Row>
            </Container>
        </>
    )
}


export default BootstrapApp;