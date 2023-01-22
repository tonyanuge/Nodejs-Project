var storedb = require('../model/model');

// create and save new store
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new store
    const store= new storedb({
        type : req.body.type,
        name : req.body.name,
        address: req.body.address,
        address2: req.body.address2,
        city : req.body.city,
        state : req.body.state,
        zip : req.body.zip,
        location : req.body.location,
        hours : req.body.hours,
        services : req.body.services
    })

    // save store in the database
    store
        .save(store)
        .then(data => {
            //res.send(data)
            res.redirect('/add-store');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


// retrieve and return all stores/ retrive and return a single store
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        storedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found store with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving store with id " + id})
            })

    }else{
        storedb.find()
            .then(store => {
                res.send(store)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving store information" })
            })
    }

    
}

// Update a new idetified store by storeid
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    storedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update storet with ${id}. Maybe store not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update store information"})
        })
}

// Delete a store with specified store id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    storedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "store was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete store with id=" + id
            });
        });
}


exports.search = (req, res)=>{

    if(req.query.name){
        const name = req.query.name;

        storedb.searchByName(name)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found store with name "+ name})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving store with name " + name})
            })

        }
    }

    