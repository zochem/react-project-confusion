import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

function RenderDish ({dish}) {
            return (
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
    };

function RenderComments ({comments}) {
    console.log(comments);
        if(comments !== null){
            return comments.map(comment => {
                return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul key={comment.id} className="list-unstyled">
                        <li className="mb-2">{comment.comment}</li>
                        <li>-- {comment.author}, { Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        <br />
                    </ul>
                </div>
                )
            })
        }
        else{
            return(<div></div>);
        }
    }

const DishDetail = props => {
        if(props.dish !== undefined){
            return(    
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>{props.dish.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        else 
            return(<div></div>)
}


export default DishDetail;