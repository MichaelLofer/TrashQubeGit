const {Router} = require('express');
const router = Router();
var admin = require("firebase-admin");

var serviceAccount = require("../../trashqube-firebase-adminsdk-uh242-4e12ed53b3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://trashqube.firebaseio.com"
});

const db = admin.database();

/*function getQubes(){
    const ref = db.ref('cubo1');
    return ref.once('value').then(snap => snap.val())
}*/

//request y response


router.get('/', (req,res) => {
    db.ref('historico').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', {historico:data});
    });
});


router.get('/getHistorico', (req,res) => {
    db.ref('historico').once('value', (snapshot) => {
        const data = snapshot.val();
        //A la vista index le pasamos la variable data
        res.render('index', {historico:data});
    });
});


router.get('/getQube', (req,res) => {
    db.ref('cubo1').once('value', (snapshot) => {
        const data = snapshot.val();
        //A la vista index le pasamos la variable data
        res.render('index', {cubo1:data});
    });
});

router.post('/newQube', (req,res) =>{
    const newQube = {
        distanciaBasura: req.body.distanciaBasura,
        distanciaTapa: req.body.distanciaTapa,
        peso: req.body.peso
    }
    db.ref('cubo1').push(newQube);
    res.redirect('./');
});

router.get('/delete-cubo1/:id', (req, res) => {
    db.ref('cubo1/' + req.params.id).remove();
    res.redirect('/');
});


module.exports = router;