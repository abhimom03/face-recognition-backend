//clarifai api

// const handleApiCall = (req, res) => {
//     fetch(`https://api.clarifai.com/v2/models/face-detection/outputs`, {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Key ' + 'e5c122ec6f3045a49898ca6d909b602e'
//       },
//       body: JSON.stringify({
//         "inputs": [
//             {
//                 "data": {
//                     "image": {
//                         "url": `${req.body.input}`
//                     }
//                 }
//             }
//         ]
//       })
//   })
//   .then(response => res.json(response))
//   .catch(err => res.status(400).json('unable to work with API'))
// }

const handleImageGet = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries)
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImageGet,
    // handleApiCall
}   