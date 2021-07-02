import React, {useState} from 'react';
import {Col, Row, Button, FormGroup, Label, Input} from 'reactstrap';

const home = (props) => {
    const vehicles = props.vehicles;

    const [get, set] = useState({
        counter: 1,
        vehicles: vehicles[0]
    });

    function shouldIncreaseOrDecrease(increase = true) {
        let counter = get.counter;
        counter = increase
            ? counter + 1
            : counter - 1;
        if (counter > 0 && counter <= vehicles.length) {
            set({counter: counter, vehicles: vehicles[counter - 1]});
        }
    }

    return (
        <div>
            <Row>
                <Col md={12}>
                    <FormGroup>
                        <Label>
                            Ad title
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Name}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label>
                            URL
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.URL}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Registration date
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.DateOfFirstRegistration}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            HP
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.HorsePower}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Transmission
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Transmission}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Brand
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.RawBrand}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Engine
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Engine}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Fuel Type
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.FuelType}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Model
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.RawModel}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Engine capacity
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.EngineCapacity}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Drive train
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.DriveTrain}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Country
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Country.country}
                               disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label>
                            Id
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Id}
                               disabled
                        />
                    </FormGroup>
                </Col>
            </Row>
            <div className='border-top border-secondary m-4'/>
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            brand
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Brand}
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Model
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Model}
                        />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label>
                            Version
                        </Label>
                        <Input type="text"
                               placeholder={get.vehicles._source.Version}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Button color="info"
                    onClick={() => shouldIncreaseOrDecrease(false)}
            >
                Previous
            </Button>
            <Button color="info"
                    onClick={shouldIncreaseOrDecrease}
            >
                Next
            </Button>
            <Button color="success">
                Save
            </Button>
            <div>
                {get.counter} / {props.vehicles.length}
            </div>
        </div>
    );
}

export default home;