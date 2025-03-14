# mongodb

 API/taskDB
**Description**
Cette API permet de gérer des tâches via un serveur Express et une base de données MongoDB. Elle prend en charge la création, la lecture, la mise à jour et la suppression (CRUD) des tâches.
**Technologies utilisées**
•	Node.js
•	Express.js
•	MongoDB avec Mongoose
•	CORS (Cross-Origin Resource Sharing)
**Installation**
1.	Cloner le projet :
2.	git clone https://github.com/Delphine2411/mongodb.git
3.	cd nodejs
4.	cd mongodb**
	**Installer les dépendances :**
6.	npm install mongoose express
7.	Configurer MongoDB : Modifier l'URL de connexion dans le fichier mongoose.js 
8.	Lancer le serveur :
9.	npm start
**L'API sera disponible à l'adresse : http://localhost:8080**
1. Créer une tâche
	Méthode : POST
•	URL : /tasks
•	Body : { "title": "Ajoute une nouvelle tâche" }
	Réponse : 
•	{
•	  "_id": "id",
•	  "title": "Nom de la tâche",
•	}
2. Lire toutes les tâches
	**Méthode : GET**
•	URL : /tasks
•	Réponse : Tableau de tâches
3. Lire une tâche spécifique
**Méthode : GET**
•	URL : /tasks/:id
•	Réponse : Nom de la tâche
4. Mettre à jour une tâche
•	**Méthode : PUT**
•	URL : /tasks/:id
•	Body : { "title": "Nouveau titre" }
•	Réponse : Tâche mise à jour
5. Supprimer une tâche
•	**Méthode : DELETE**
•	URL : /tasks/:id
•	Réponse : Tâche supprimée avec succès
**Auteur**
•	Nom : KPANKPAN Delphine
•	Email : kpankpand@gmail.com
•	GitHub : https://github.com/Delphine2411/mongodb.git

