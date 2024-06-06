const client = require('./database');

const dataMapper = {

  async getRecentCoffees() {
    const query = "SELECT * FROM coffee ORDER BY id DESC LIMIT 3 ";
    const result = await client.query(query);
    return result.rows;
  },


  async getAllCoffees() {
    const query = "SELECT * FROM coffee ";
    const result = await client.query(query);
    return result.rows;
  },
  async getOneCoffees(id) {
    const query = "SELECT *, TO_CHAR(date, '%d/%m/%Y') as formatted_date FROM coffee WHERE id = $1";
    const value = [id]
    const result = await client.query(query,value);
    return result.rows[0];
  },
  async getAllCategory(category) {
    let query = `SELECT * FROM coffee`;
    switch (category) {
        case 'name':
            query += ' ORDER BY name';
            break;
        case 'origine':
            query += ' ORDER BY origine';
            break;
        case 'caractéristique':
            query += ' ORDER BY caractéristique';
            break;
        case 'disponible':
            query += ' ORDER BY disponible';
            break;
        case 'reference':
            query += ' ORDER BY reference';
            break;
        case 'prix':
            query += ' ORDER BY prix';
            break;
    }
    const result = await client.query(query);
    return result.rows;
  },
  async getCategory(category) {
    // const query = "SELECT * FROM coffee WHERE $1 = $1"; soit disant ca retourne que vrai, et c est pas bien pour les injections. Donc on va essayer de MAPPER tout ca
        const columnNames = {
          name: 'name',
          origine: 'origine',
          caractéristique: 'caractéristique',
          disponible: 'disponible',
          reference: 'reference',
          prix: 'prix'
        };
        console.log(category)
        if (!columnNames.hasOwnProperty(category)) {   // MDN : hasOwnProperty retourne un booléen indiquant si l'objet possède la propriété  
          throw new Error('Category pas bonne');
        }
        let value;
        const query = `SELECT * FROM coffee ORDER BY ${columnNames[category]} ASC OFFSET 3`;
        const result = await client.query(query);
        return result.rows;
      },


    


};


module.exports = dataMapper;
