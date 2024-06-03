const dataMapper = require('../dataMapper.js');
const moment = require('moment');

const mainController = {
  recentCoffees: async (req, res) => {
    try {
      const coffees = await dataMapper.getRecentCoffees();
      res.render('index',{coffees});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  allCoffees: async(req,res)=>{
    try {
        const cofs = await dataMapper.getRecentCoffees();
        const coffees = await dataMapper.getAllCoffees();
        res.render('catalogue',{coffees,cofs});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },
   OneCoffe: async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const coffee = await dataMapper.getOneCoffees(id);
        coffee.status = coffee.disponible ? 'disponible': 'Indisponible';
        coffee.date = moment(coffee.date).format('DD/MM/YYYY')
        res.render('produit',{coffee});
      } catch (error) {
        console.error(error);
        res.status(500).send(`An error occured with the database :\n${error.message}`);
      }
    },
};

module.exports = mainController;
