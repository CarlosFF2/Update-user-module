require("express")
const main = require("../components/main/network")
const allRoutes = require("../utils/constants/routes.json")

//hacer saber al servidor nuevas rutas
//arrow functions
const routes = server => { 
    server.use(allRoutes, main)
}


module.exports = routes;