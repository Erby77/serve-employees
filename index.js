import express from "express";
import cors from "cors";

const app = express();
// cors permet de donner les droits à pouvoir écouter mon serveur local
// app.use(cors({ origin: ["http://localhost:3000"] })); // ne fonctionne pas

// utilisation d'une autre méthode d'utilisation du cors plus large pour que ça soit fonctionnel
// app.use(cors()); // pas asser sécurisé

// en utilisant le port de mon serveur local React ça fonctionne
app.use(cors({ origin: ["http://localhost:5100"] }));

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

app.get("/api/employees", (req, res) => {
	// // vérification si mon serveur reçoit bien des demandes
	// console.log("Demande reçue pour /api/employees");
	res.json({ results: [sampleEmployee] });
	// // vérification si mon serveur envoie bien des informations
	// console.log("Réponse envoyée :", {
	// 	results: [sampleEmployee],
	// });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Port : ${port}`);
});
