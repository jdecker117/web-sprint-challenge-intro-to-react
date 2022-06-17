// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// export default function Deets(props) {
//     const {characterID, close} = props;
//     const [deets, setDeets] = useState(null);

//     useEffect(() => {
//         axios.get(`https://swapi.dev/api/1`)
//           .then(res => { 
//             console.log(res);
//             setDeets(res.data) })
//           .catch(err => { console.log("Done goofed again") })
//       }, [characterID])

//       return (
        // <h2>Info:</h2>
        // {
        //     deets &&
        // <>
        // <p>Birth Year: ${deets.birth_year}</p>
        // <p>Eye Color: ${deets.eye_color}</p>
        // <p>Gender: ${deets.gender}</p>
        // <p>Height: ${deets.height}</p>
        // </>
        // }
//       )
// }