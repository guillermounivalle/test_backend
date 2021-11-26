
const app = require('./app');
app.set('port', process.env.PORT || 4000);


/**
 * función para iiciar el programa (Inicia)
 */
async function main () {
	await app.listen(app.get('port')); //Asincrono método.
    console.log(`Server on port ${app.get('port')}`);
}

main();