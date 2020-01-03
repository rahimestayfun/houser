import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses();
    }
    getHouses=()=>{
        axios.get('/api/houses')
            .then(response => {this.setState({ houses: response.data })})
            .catch(error => console.log(error))

    }
    deleteHouse = (id) =>{
        axios.delete(`/api/house/${id}`)
        .then(()=>{this.getHouses()})
        .catch(error => console.log(error))
    }

    render() {
        let mappedHouse = this.state.houses.map((element, index) => {
            return (
                <div key={index}>
                    <House
                        name={element.name}
                        address={element.address}
                        city={element.city}
                        state={element.city}
                        zip={element.zip}
                        deleteHouse= {this.deleteHouse}
                        id={element.id}
                    />
                </div>
            )
        })
        return (
            <div>
                <h1>DASHBOARD</h1>
                <Link to='/wizard/step1'><button>Add New Property</button> </Link>
                {mappedHouse}

            </div>
        )
    }
}
