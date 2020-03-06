import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCommunities, fetchCommunitiesAverage } from '../../redux/communities/communities.action';

import { Card, Container, Row, Col } from 'react-bootstrap';


const CommunitiesList = (props) => {

    useEffect(() => {
        props.fetchCommunities();
        props.fetchCommunitiesAverage();
    },[]);

    const communitiesRender = () => {
        if(props.communities.communities && props.communities.averages) {
            return props.communities.communities.map( ({id, name, imgUrl, group}) => {
                return(
                    <Col key={id} lg={4} className='mb-5'>
                        <Card>
                            <Card.Header 
                                style={{  
                                    height:'250px',
                                    backgroundImage: `url(${imgUrl ? imgUrl : 'https://dummyimage.com/300x200/ccc/ffffff&text=No+Image' })`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                  }}
                            />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                {group}
                                </Card.Text>
                                {
                                    props.communities.averages.filter(average => average.id === id).map(average => {
                                        return(
                                            <Card.Text>
                                                Average Price <strong>${average.averagePrice}</strong>
                                            </Card.Text>
                                        )
                                    })
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
                
        }
    };

    return(
        <Container className='mt-5'>
        <Row>
            {communitiesRender()}
        </Row>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        communities: state.communities,
        averages: state.communities.averages
    }
}
  
export default connect(
    mapStateToProps,
    {
        fetchCommunities,
        fetchCommunitiesAverage
    }
)(CommunitiesList);