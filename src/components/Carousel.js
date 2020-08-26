import React from 'react';

import Card from '../components/Card';

import scf from '../assets/images/scf.png';
import burger from '../assets/images/burger.png';
import noteTaker from '../assets/images/noteTaker.png';
import soon from '../assets/images/soon.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'SCF Arcade',
                    subTitle: 'Shall we play a game?',
                    imgSrc: scf,
                    link: 'https://tylerroth15.github.io/Salty-Cloud-Frogs-Project-1/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Eat-Da-Burger',
                    subTitle: 'Would you like to eat all of the burgers?',
                    imgSrc: burger,
                    link: 'https://enrightcw-eat-da-burger.herokuapp.com/burgers',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Note Taker',
                    subTitle: 'Never lose track of your thoughts.',
                    imgSrc: noteTaker,
                    link: 'https://enrightcw-note-taker.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Grubble',
                    subTitle: 'Taking the "I Don\'t Know" out of a night\'s plans.',
                    imgSrc: soon,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;