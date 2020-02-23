const app = require('./src/config/custom-express');

app.listen(3000, () =>
	console.log("Servidor ouvindo na porta 3000")
);