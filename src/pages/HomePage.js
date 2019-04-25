import React, { Component } from 'react';
import Api from '../Api';
import { Container, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import Slider from './homepage/slider';
import PostList from './homepage/postsList';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            posts: [],
        }
    }

    componentDidMount() {
        let api = new Api();

        api.options('homepage_slug').then(options_data => { //homepage_slug is slug of acf
            return options_data.homepage_slug;
        }).then(options_data => {
            api.pages({ id: options_data }).then(page_data => {
                this.setState({
                    data: page_data[0]
                })
            })
        })

        api.posts().then(data =>{
            this.setState({
                posts: data
            })
        })

    }

    render() {

        console.log(this.state.posts)
        const data = this.state.data;

        return (
            <>
                <Container>
                    <Slider slides={data.acf !== undefined ? data.acf.slider_home : null} />
                </Container>
                <Container style={{ marginTop: '2rem' }}>
                    <Row>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <PostList list={this.state.posts}/>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content, lead-in to additional.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content, lead-in to additional.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{ marginTop: '2rem' }}>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

export default HomePage;