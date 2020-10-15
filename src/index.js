import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)

//     );

//     return (
//         <div>
//            Latitude : 
//         </div>
//     );
// };
class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }
    //Runs through babel
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //react says we have to define render
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay  lat={this.state.lat}/>
            // return (
            //     <div>
            //         Latitude : {this.state.lat}
            //     </div>
            // )
        }
        return <div>loading</div>;

    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);