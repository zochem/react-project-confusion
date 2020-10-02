import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function RenderDish ({dish}) {
    console.log(dish);
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            );
    };

function RenderComments ({comments}) {
    console.log(comments);
        if(comments !== null){
            return comments.map(comment => {
                return(<ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                    <li>-- {comment.author}, { Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    <br />
                </ul>)
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
                    <RenderDish dish={props.dish} />
                </div>
            );
        }
        else 
            return(<div></div>)
}


export default DishDetail;