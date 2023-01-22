const express = require('express')
const route = express.Router()

const services =  require('../services/render');
const controller = require('../controller/controller')



/**
 * @description Root Route
 * @n=method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add store
 * @n=method GET/add_store
 */

route.get('/add-store',services.add_store)

/**
 * @description update store
 * @n=method GET/ update_store
 */
route.get('/update-store', services.update_store)

/**
 * @description search store
 * @n=method GET/ search_store
 */
 route.get('/search-store', services.search_store)



//API

route.post('/api/stores', controller.create);
route.get('/api/stores', controller.find);
route.put('/api/stores/:id', controller.update);
route.delete('/api/stores/:id', controller.delete);


module.exports = route


