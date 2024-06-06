const dataMapper = require('../dataMapper.js');

const filtreController = {
  allCategory: async (req, res) => {
    try {
      const category = req.query.category 
      const categories = await dataMapper.getAllCategory(category);
      res.render('filtre',{categories, selectedCategory: category});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = filtreController;
