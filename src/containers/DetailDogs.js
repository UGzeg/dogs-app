import React from 'react';
import dogs from "../dogsdata";
import { CardBody, Card, CardHeader, CardImg, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const DetailDog = (props) => {
    const secilenKopek = props.match.params.id;
    const detailDog = dogs.filter((dog) => secilenKopek === dog.id);

    return (
        <>
            {
                
                detailDog.map((dog)=>{
                    return(<>
                        <Card>
                            <CardHeader size="sm"><h3>{dog.name}</h3></CardHeader>
                            <CardBody>
                                <Row>
                                <Col xs="3">
                                <CardImg top width="350px !important" src={dog.image}/>
                                </Col>
                                <Col xs="9">
                                <ListGroup>
                                    <ListGroupItem><h5>Açıklama:</h5> {dog.description}</ListGroupItem>
                                    <ListGroupItem><h5>Tür:</h5> {dog.breed}</ListGroupItem>
                                    <ListGroupItem><h5>Yaş:</h5> {dog.age}</ListGroupItem>
                                </ListGroup>
                                </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </>)
                })
            }
        </>
    );
};

export default DetailDog;