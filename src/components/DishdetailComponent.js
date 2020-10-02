import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class DishDetail extends Component{
    renderDish = dish => {
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
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
    };

    renderComments = comments => {
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

    render() {
        console.log(this);
        const {dish} = this.props;
        if(dish !== undefined){
            return(    
                <div className="container">
                    {this.renderDish(dish)}
                </div>
            );
        }
        else 
            return(<div></div>)
        }
}


export default DishDetail;