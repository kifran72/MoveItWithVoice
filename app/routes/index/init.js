/**
 * @param  {Object} app
 */
initIndex = (app) => {

    app.get('/', async(req, res) => {

        return res.render('index', {
            titles: 'Accueil',
            message: 'Porte folio',
        });
    });


};

module.exports = initIndex;