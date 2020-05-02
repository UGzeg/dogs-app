import React, { useState } from 'react';
import dogs from "../dogsdata";
import { Collapse, CardBody, Card, CardHeader, CardImg, Row, Col, Button } from 'reactstrap';

const FilteredDogs = (props) => {
    const secilenTur = props.match.params.yazilanTur;
    const filteredDogs = dogs.filter((dog) => dog.breedSlug === secilenTur);
    const [isOpen, setIsOpen] = useState(false);
    const acKapa = () => setIsOpen(!isOpen);
    return (
            <Card>
                    {
                        
                        filteredDogs.map((dog) => {
                            
                            return (
                                <>
                                <CardHeader onClick={acKapa} size="sm" key={dog.id}>{dog.name} </CardHeader>
                                <Collapse isOpen={isOpen}>
                                <CardBody>
                                <Row>
                                <Col xs="3">
                                <CardImg top width="350px !important" src={dog.image}/>
                                </Col>
                                <Col xs="9">
                                    <h5>Ad: {dog.name}</h5>
                                    <h5>Tür: {dog.breed}</h5>
                                    <h5>Yaş: {dog.age}</h5>
                                    <Button color="primary" size="sm" href={`/detail/${dog.id}`}>Detaylı Bilgi...</Button>
                                </Col>
                                </Row>
                                </CardBody>
                                </Collapse>
                                </>
                                )
                        })
                    }
            </Card>
    );
};

export default FilteredDogs;