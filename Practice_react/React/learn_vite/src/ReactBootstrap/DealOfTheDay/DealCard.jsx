import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BiChevronRightCircle } from 'react-icons/bi';
import './DealCard.css'


function DealCard(props) {
    return (
        <>
            <div className="card-margin" style={{ margin: '7px', display: 'inline-flex' }}>
                <Card style={{ width: '18rem', padding: '10px', backgroundColor: '',  }}>
                    <Card.Img variant="top" src={props?.dataDeal?.img} className='dealcardimg' />
                    <Card.Body style={{ padding: '0px' }}>
                        <Card.Text className='mb-0'>
                            {props?.dataDeal?.title}
                        </Card.Text>
                        <Card.Title>{props?.dataDeal?.price}</Card.Title>
                    </Card.Body>
                    <button style={{ borderRadius: '10px', backgroundColor: 'lightsalmon', border: '1px solid black' }}><BiChevronRightCircle /></button>
                </Card>
            </div>
        </>
    );
}

export default DealCard;