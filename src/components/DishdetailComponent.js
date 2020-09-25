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
                    <li>-- {comment.author}, {this.formatDate(comment.date)}</li>
                    <br />
                </ul>)
            })
        }
        else{
            return(<div></div>);
        }
    }

    formatDate = date => {
        const option = {year: 'numeric', month: 'short', day: 'numeric' };
        date = new Date(date).toLocaleDateString('en-Us', option);
        return date; 
    }

    render() {
        const {dish} = this.props;
            return(    
                this.renderDish(dish)
            );
        }
}


export default DishDetail;