import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        charecherst: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
              },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeCharecter = index  => {
        const {charechters} = this.state;

        this.setState({
            charechters: charechters.filter((charechter, i) => {
                rturn i !== index;
            })
        });
    }
    render() {
        const charechters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

        return (
            <div className="container">
                <Table charechterData={charechters}/>
            </div>
        );
    }
}

export default App;