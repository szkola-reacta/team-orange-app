// import React, { Component } from 'react';


// class Assets extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             assetList: [],
//             errorMessage: ''
//         };
//     }

//     componentDidMount() {
//         const DATABASE = '/database.json';
//         axios.get(DATABASE)
//             .catch(function (error) {
//                 if (error.response.status) {
//                     this.setState(
//                         { errorMessage: error.response.status }
//                     )
//                 }
//             })
//             .then(response => this.setState({
//                 assetList: response.data.assets,
//             }))
//     }

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default Assets;