import React, {useState} from 'react';
import FavoriteActions from "./FavoriteActions";
import { Collapse, CardBody, Card, CardHeader, CardImg, Row, Col, Button } from 'reactstrap';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 
const Dog = ({id, name, toggle, getStatus, toggleActive, loadingFavorites, image, breed, age}) => {
    const [isOpen, setIsOpen] = useState(false);
    const acKapa = () => setIsOpen(!isOpen);
    return(
        <>

            {/*<ListGroup>
            <ListGroupItem key={id}>*/}
                    <Card key={id}>
                        <CardHeader onClick={acKapa} size="sm">{name} {getStatus(id) ? <FontAwesomeIcon icon={fasStar}/> : ""}</CardHeader>
                        <Collapse isOpen={isOpen}>
                            <CardBody>
                                <Row>
                                <Col xs="3">
                                <CardImg top width="350px !important" src={image}/>
                                </Col>
                                <Col xs="9">
                                    <h5>Ad: {name} <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} toggleActive={toggleActive} /></h5>
                                    <h5>Tür: {breed}</h5>
                                    <h5>Yaş: {age}</h5>
                                    <Button color="primary" size="sm">Detaylı Bilgi...</Button>
                                </Col>
                                </Row>
                            </CardBody>
                        </Collapse>
                    </Card>
                {/*</ListGroupItem>
        </ListGroup>*/}
        
        {/*<ListGroup>
      <ListGroupItem key={id}>
        {name} <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} toggleActive={toggleActive} />
        </ListGroupItem>
     </ListGroup>*/}
        </>
    )
};

export default Dog;