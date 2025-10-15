# Simple Time - UE L311 - Semaine 3 - Group G

## Membres du groupe

| Etudiant.e  |  Alias      |    
| :----------:|:-----------:| 
| Mathilde C. | Clouddy23   | 
| Kamo G.     | Spaghette5  |   
| Mathieu L.  | mathleys    |   
| Filippos K. | filkat34    | 

## Travail collaboratif

### Outils
Le principal outil de collaboration utilisé est Github. Nous avons cloné le dépôt fourni et chaque membre de l'équipe a créé sa propre branche pour pouvoir travailler indépendamment. Nous avons également utilisé Teams pour faire les visios de code review.

### Principe général
La première code review nous a permis de repartir grossièrement le travail entre nous en ajoutant dans la rubrique "issues" de Github pour mémoire les bogues déjà repérés, commençant ainsi une liste appelée à être progressivement enrichie au fil de notre travail. 

Tout en se partageant la résolution des bogues listés et vu l'ampleur restreinte du projet et l'envie de certains de se préoccuper également d'accéssibilité et de qualité de code, nous avons décidé de laisser libre cours à chacun de travailler sur sa branche et d'apporter les modifications qu'il juge nécessaires. Une fois son travail fini, chacun fait une demande de tirage pour que les autres puissent en prendre connaissance. 

Un travail d'harmonisation est prévu dans le cadre de la deuxième code review en visio où l'on discute des propositions de chacun, faisons des tests fonctionnels manuels dans chaque branche pour choisir et amender celle qui devra être fusionnée avec la branche principale.

## Planning de la semaine
| Dates |  Objectif  |    
| :---|:---| 
| 12/10 | **Code review n. 1** en visio : lecture collective du code et ouverture d'issues pour mémoire sur Github |
| 13/10-16/10 | **Période de débogage** en priorité des erreurs assignées au développeur dans sa branche _bugfix/nomdudev_ |   
| 17/10		  | **Code review n. 2** pour discussion autour des pull requests et merge dans main |   
| 18/10-19/10 | **Finalisation de la rédaction du CR** dans le README.md de la branche main | 

## Tests fonctionnels manuels
| Fonctionnalité/Branche | Mathilde | Kamo | Matthieu | Filippos |   
| :---|:---:|:---:| :---:| :---:|
|Pas d’erreur JavaScript dans la console.|[]|[]|[]|[x]|
|La page affiche l’heure, les minutes et les secondes à 00:00:00 au chargement.|[]|[]|[]|[x]|
|Les séparateurs (:) sont visibles.|[]|[]|[]|[x]|
|L’heure, les minutes et les secondes se mettent à jour chaque seconde.|[]|[]|[]|[x]|
|Le fond change progressivement en fonction de l’heure.|[]|[]|[]|[x]|
|Cliquer sur le bouton met le timer en pause (l’heure n’avance plus).|[]|[]|[]|[x]|
|Cliquer à nouveau sur le bouton relance le timer.|[]|[]|[]|[x]|
|Le bouton affiche “pause” quand l'heure tourne et “play” quand elle ne tourne pas.|[]|[]|[]|[x]|
|L'horloge reste lisible et centré, sans débordement.|[]|[]|[]|[x]|
|L'affichage de l'horloge s'adapte correctemnt sur de plus petits écrans (mobile, tablette).|[]|[]|[]|[x]|
|Lorsque le bouton bascule entre play/pause, il ne déplace pas les autres éléments du DOM. |[]|[]|[]|[x]|

## Méthodes de débogage employées
## Typologie des erreurs
Nous avons établi ci-dessous une typologie des erreurs trouvées avec quelques exemples pour chacune d'entre elles.
### Gestion des fichiers
| Fichier| Exemple | Solution |
| :----- | :------ | :------  |
| index  | _index.php_	| Renommer l'extension incorrecte du fichier en _index.**html**_ |
| index	 | _asset/css/style.css_| Correction de la coquille dans le nom du dossier _asset**s**/css/style.css_ |
### Syntaxe
### Structure
### Logique
### Interaction
### Affichage
### Qualité du code
