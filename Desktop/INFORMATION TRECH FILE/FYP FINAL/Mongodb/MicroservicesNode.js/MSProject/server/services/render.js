const axios = require('axios');


exports.homeRoutes = (req, res) =>{
    //Make a get request to /api/stores
   axios.get('http://localhost:3000/api/stores')
    .then(function(response){
    res.render('index', {stores: response.data});
})
.catch(err =>{
    res.send(err);

})

}

exports.add_store = (req, res) =>{
    res.render('add_store')
}


exports.update_store = (req, res) =>{
    axios.get('http://localhost:3000/api/stores', {params: {id: req.query.id}})
    .then(function(storedata){
        res.render("update_store", {stores: storedata.data})
    })
   .catch(err =>{
       res.send(err);
   })
}

exports.search_store = (req, res) =>{
    axios.get('http://localhost:3000/api/stores', {params: {id: req.query.id}})
    .then(function(response){
        res.render("search_store", {stores: storedata.data})
    })
   .catch(err =>{
       res.send(err);
   })
}