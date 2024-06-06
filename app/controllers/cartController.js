const dataMapper = require('../dataMapper.js');

const cartsController = {

    cartsInit: (request, response, next) => {
        if (!request.session.carts) {
          request.session.carts = [];
        }
        next();
      },

  // méthode pour afficher les favoris
  cartPage: async (request, response) => {
    try {
      const carts = request.session.carts;
      response.render('cart', { carts }); 
    } catch (error) {
      console.log(error);
      response.status(500).send('oupsi on est nul !');
    }
  },
  cartsAdd: async (request,response) => {
    try{
    const id = parseInt(request.params.id);

    if(!request.session.carts){
      request.session.carts = []
    }

    if(!request.session.carts.includes(id)){
      const coffee = await dataMapper.getOneCoffees(id)
      request.session.carts.push(coffee) 
    }else{  
      arlerte("cette figurine y est deja dans votre panier, espece d'idiot.")
    } 
    response.redirect('/panier')
  }catch(error){
    console.log(error)
    response.status(500).send('oupsi on est nul !')
  }
  },

cartsDelete: (request,response) => {
    const id = parseInt(request.params.id);
    request.session.carts = request.session.carts.filter((coffee) => coffee.id !== id);
    response.redirect('/panier')   
  },  
}
module.exports = cartsController;
