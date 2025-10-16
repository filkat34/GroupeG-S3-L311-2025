# Simple Time - UE L311 - Semaine 3 - Groupe G

## 📚 Sommaire

- 👥 [Membres du groupe](#membres-du-groupe)
- 🎯 [Objectifs](#objectifs)
- 🤝 [Travail collaboratif](#travail-collaboratif)
  - 🛠️ [Outils](#outils)
  - 📋 [Principe général](#principe-général)
- 🗓️ [Planning de la semaine](#planning-de-la-semaine)
- 🐞 [Méthodes de débogage employées](#méthodes-de-débogage-employées)
  - 📝 [Analyse du fichier HTML](#analyse-du-fichier-html)
  - 🔎 [Analyse du code source dans le navigateur](#analyse-du-code-source-dans-le-navigateur)
  - 📂 [Vérification des fichiers chargés](#vérification-des-fichiers-chargés)
  - 🎨 [Analyse et validation du HTML et du CSS](#analyse-et-validation-du-html-et-du-css)
  - 🔲 [Debug du JavaScript via la console du navigateur](#debug-du-javascript-via-la-console-du-navigateur)
  - ✅ [Phase de tests](#phase-de-tests)
- 🗃️ [Typologie des erreurs](#typologie-des-erreurs)
  - 📄 [Fichiers](#fichiers)
  - 🧩 [Syntaxe](#syntaxe)
  - 🔡 [Typographie](#typographie)
  - 📐 [Logique](#logique)
  - 🖥️ [Affichage](#affichage)
  - 🧹 [Qualité du code](#qualité-du-code)
- 🧪 [Tests fonctionnels manuels](#tests-fonctionnels-manuels)
- 📈 [Bilan et perspectives](#bilan-et-perspectives)

## Membres du groupe

| Etudiant.e  |  Alias      |  Branche      |    
| :----------:|:-----------:| :-----------:|
| Mathilde C. | Clouddy23   | bugfix/mathilde |
| Kamo G.     | Spaghette5  | bugfix/kamo |
| Mathieu L.  | mathleys    | bugfix/mathieu | 
| Filippos K. | filkat34    | bugfix/filippos |

## Objectifs
- [x] Mobiliser les méthodes de déboggage abordées en classe virtuelle pour rendre une page web fonctionnelle.
- [x] Savoir utiliser le client git et la plateforme Github en vue de collaborer au sein d'une équipe de développement.
- [x] Se familiariser avec la syntaxe _Markdown_ en vue de rédiger la documentation d'un dépôt distant. 

## Travail collaboratif

### Outils
Le principal outil de collaboration utilisé est Github. Nous avons cloné le dépôt fourni et chaque membre de l'équipe a créé sa propre branche pour pouvoir travailler indépendamment. Nous avons également utilisé Teams pour faire les visios de code review.

### Principe général
La première code review nous a permis de repartir grossièrement le travail entre nous en ajoutant dans la rubrique "issues" de Github pour mémoire les bogues déjà repérés, commençant ainsi une liste appelée à être progressivement enrichie au fil de notre travail. 

Tout en se partageant la résolution des bogues listés et vu l'ampleur restreinte du projet et l'envie de certains de se préoccuper également d'accessibilité et de qualité de code, nous avons décidé de laisser libre cours à chacun de travailler sur sa branche et d'apporter les modifications qu'il juge nécessaires. Une fois son travail fini, chacun fait une demande de tirage pour que les autres puissent en prendre connaissance. 

Un travail d'harmonisation est prévu dans le cadre de la deuxième code review en visio où l'on discute des propositions de chacun, faisons des tests fonctionnels manuels dans chaque branche pour choisir et amender celle qui devra être fusionnée avec la branche principale.

## Planning de la semaine
| Dates |  Objectif  |    
| :---|:---| 
| 12/10 | **Code review n. 1** en visio : lecture collective du code et ouverture d'issues pour mémoire sur Github |
| 13/10-16/10 | **Période de débogage** en priorité des erreurs assignées au développeur dans sa branche _bugfix/nomdudev_ |   
| 17/10		  | **Code review n. 2** pour discussion autour des pull requests et merge dans main |   
| 18/10-19/10 | **Finalisation de la rédaction du CR** dans le README.md de la branche main | 

## Méthodes de débogage employées
Pour identifier et corriger les problèmes, plusieurs méthodes de debug ont été employées :

### Analyse du fichier HTML
À l’ouverture de l’application, le navigateur affichait uniquement l’arborescence des fichiers, au lieu de charger automatiquement le fichier _index.html_. Cette anomalie a été attribuée à une erreur dans l’extension du fichier.

![<arborescencde de fichiers](screenshots/arborescence.png)

### Analyse du code source dans le navigateur
L’inspection du HTML a permis de détecter que le contenu attendu entre les balises ```<body>``` n’était pas présent. Cette étape a mis en évidence des erreurs structurelles qui pouvaient perturber le rendu de la page.

![balise body vide](screenshots/erreur-balise-body.png)

### Vérification des fichiers chargés
L’inspection du réseau a montré que seul _index.html_ était chargé. Les appels au fichier CSS et à Google Fonts ont été contrôlés, révélant des fautes de frappe empêchant le chargement correct du design.

![erreur de chargement des fichiers](screenshots/erreur-chargement-fichiers.png)
![erreur CSS détectée sur le réseau](screenshots/erreur-reseau-CSS.png)

### Analyse et validation du HTML et du CSS
Les fichiers ont été examinés pour vérifier le nesting des éléments, la fermeture correcte des balises et la cohérence de la syntaxe. L’éditeur VS Code a été utilisé pour détecter automatiquement les erreurs de syntaxe, les fautes de frappe et les incohérences dans les fichiers.

![erreurs CSS détectées sur VS Code](screenshots/erreurs-CSS.png)

### Debug du JavaScript via la console du navigateur
La console a signalé des erreurs : fonctions invalides, fautes de frappe, absence de fermetures et erreurs de type. Chaque erreur a été corrigée de manière ciblée, en suivant les messages de la console.

![exemple d'erreur JS de la console](screenshots/erreur-console.png)

### Phase de tests
Après correction, le rendu de la page et du design a été validé visuellement. L'horloge a été testée pour vérifier l’ensemble de ses fonctionnalités (voir [Tests fonctionnels manuels](#tests-fonctionnels-manuels)).

Grâce à cette méthodologie structurée, combinant inspection manuelle, outils de développement du navigateur et vérification automatique via l’éditeur, l’ensemble des anomalies a été identifié et corrigé, aboutissant à un affichage fonctionnel et conforme au design attendu.

## Typologie des erreurs
Nous avons établi ci-dessous une typologie des erreurs trouvées avec quelques exemples pour chacune d'entre elles. Il s'agit bien d'une typologie et non d'une liste exhaustive de toutes les erreurs corrigées.

### Fichiers
Quelques erreurs ont été trouvées concernant l'extension du fichier index qui l'empêchait de s'afficher correctement ainsi qu'une coquille dans la saisie du chemin du fichier des styles.
| Fichier| Exemple | Solution |
| :----- | :------ | :------  |
| index  | _index.php_	| Renommer l'extension incorrecte du fichier en _index.**html**_ |
| index	 | _asset/css/style.css_| Correction de la coquille dans le nom du dossier _asset**s**/css/style.css_ |

### Syntaxe
De nombreuses erreurs de syntaxe ont été corrigées : oublis de fermeture de balises et d'accolades principalement.
| Fichier| Exemple | Solution |
| :----- | :------ | :------  |
| index  |_```<title>Timetitle>```_| Ajout de la balise fermante _```<title>Timetitle</title>```_ |
| styles |_```.inside font-weight: bold; font-size: 75px;;}```_| Ajout de l'accolade ouvrante et suppression du point virgule en double. Corrigé en _```.inside { font-weight: bold; font-size: 75px; }```_|
| script |_```.setTimeInterval(function(){ ... }, 1000;```_| Ajout de la parenthèse fermante (et correction du nom de la fonction Javascript) _```setInterval(function(){ ... }, 1000);```_ |

### Typographie
De nombreuses coquilles typographiques ont été rectifiées : inversions ou oublis de lettres principalement.
| Fichier| Exemple | Solution |
| :----- | :------ | :------  |
|styles| ```#wrappr{``` | Ajout de la lettre manquante ```#wrapper{```|
|script| ```addEventListener('clic', (event) =>...``` | Ajout de la lettre manquante ```addEventListener('click', (event) =>...```|
|script| ```dcument.querySelector('.button')``` | Ajout de la lettre manquante ```document.querySelector('.button')```|

### Logique
Quelques incohérences dans le typage des variables et dans la structuration des fonctions ont été trouvées.
| Fichier| Exemple | Solution |
| :----- | :------ | :------  |
| script | ```let is_run = "true"``` | La variable doit être un boléen sinon elle sera toujours _false_. Il suffit d'enlever les guillemets : ```let is_run = true``` |
| script |  ```function randomHexColor(x, y)``` | La signature de la fonction comporte deux paramètres alors que son corps et son appel utilisent trois arguments. Il faut rétablir le troisième au niveau de la signature :  ```function randomHexColor(x, y, z)``` |
|script | ```function adjustTimer(timer){(timer < 10 ? '0'+timer : timer);}``` | Le _return_ de la fonction a été oublié : ```function adjustTimer(timer){return (timer < 10 ? '0'+ timer : timer);}``` |
| index | ```<div id="wrapper"><div class="inside" id="wrapper">``` | Deux éléments dans la structure ont le même _id_ qui est censé être unique. Il faut soit renommer l'un des deux ou refactoriser. |

### Affichage
Concernant l'affichage, en plus de nombreuses erreurs typographiques, nous avons constaté une mauvaise utilisation de certaines propriétés, notamment de _flexbox_. Mais une fois ces problèmes résolus, le principal défi a été de faire en sorte que le bouton qui bascule entre deux formes qui n'occupent pas le même espace, ne pousse pas les autres éléments du DOM. Nous avons réussi à faire cela en attribuant au bouton une hauteur et une largeur fixes.

Des optimisations ont été faites au niveau de l'affichage responsive en ajoutant une media query pour les petits écrans.

Nous avons également ajouté des attributs _aria-live_ pour rendre l'horloge plus accessible en avertissant les utilisateurs ayant recrous à des lecteurs d'écran des champs susceptibles d'être dynamiquement modifiés.

### Qualité du code
Selon les choix des uns et des autres, de nombreuses modifications ont été apportées dans le but d'optimiser la qualité et la lisibilité du code. En voici quelques exemples :
| Optimisation | Description |
| :---|:---|
| Lisibilité | Dans les fichiers _index_ et _styles_ le code a été mal formaté : pas de sauts de ligne, mauvaise indentation. Nous avons utilisé l'option "Format Document" de VS Code pour rétablir une mise en page lisible |
| Standardisation | Usage de lowerCamelCase pour les variables.
| DRY | Dans le fichier _script_ le code a tendance à se répéter, notamment concernant les sélecteurs permettant la manipulation du DOM. Nous avons choisi de créer des variables au début du fichier pour les sauvegarder et éviter de les répéter. |
| KISS | Que ce soit au niveau du HTML qui multiplie les ```<div>``` ou du CSS qui multiplie les classes, nous avons chosi de refactoriser pour raccourcir et simplifier le code. Par exemple, l'insértion d'élements dans le DOM via le CSS (les séparateurs) nous a paru le meilleur moyen de complexifier à outrance le code et de le rendre vulnérable aux bogues d'affichage : le CSS est sensible à l'ordre des sélecteurs et multiplier les sources du contenu n'est jamais une bonne idée car cela rend le code plus difficilement maintenable.
| Accessibilité | Au niveau du CSS nous avons préféré utiliser des mesures relatives (em et non px) ce qui rend l'interface plus flexible et responsive. |
| Documentation | Nous avons également ajouté des commentaires dans notre code afin de faciliter sa maintenabilité. |

## Tests fonctionnels manuels
| Fonctionnalité/Branche | Mathilde | Kamo | Mathieu | Filippos |   
| :---|:---:|:---:| :---:| :---:|
|Pas d’erreur JavaScript dans la console.|✅| |✅|✅|
|La page affiche l’heure, les minutes et les secondes à 00:00:00 au chargement.|✅| |✅|✅|
|Les séparateurs (:) sont visibles.|✅| |✅|✅|
|L’heure, les minutes et les secondes se mettent à jour chaque seconde.|✅| |✅|✅|
|La couleur du fond change progressivement en fonction de l’heure.|✅| |✅|✅|
|Cliquer sur le bouton met l'horloge en pause (l’heure n’avance plus).|✅| |✅|✅|
|Cliquer à nouveau sur le bouton relance l'horloge.|✅| |✅|✅|
|Le bouton affiche “pause” quand l'heure tourne et “play” quand elle ne tourne pas.|✅| |✅|✅|
|L'horloge reste lisible et centrée, sans débordement.|✅| |✅|✅|
|L'affichage de l'horloge s'adapte correctement sur de plus petits écrans (mobile, tablette).|✅| | |✅|
|Lorsque le bouton bascule entre play/pause, il ne pousse pas les autres éléments du DOM. | | | |✅|

## Bilan et perspectives
Les objectifs fixés ont tous été atteints. L'affichage de l'application et ses fonctionnalités ont été rétablies conformément aux consignes de l'exercice. 

Tous les membres du groupe ont montré de l'implication dans le travail demandé. Des échanges ont eu lieu, à la fois lors des deux visios programmées sur Teams et régulièrement sur Whatsapp. 

Tous les membres du groupe maîtrisent les différentes méthodes de déboggage, le client GIT (commit, création et gestion de branches, etc.) et les fonctionnalités de collaboration offertes par Github.

Tout le monde a également pu contribuer dans la rédaction du fichier _README_ du dépôt et prendre connaissance des particularités de la syntaxe _Markdown_. 

Même si le projet ne s'y prêtait pas (trop d'erreurs imbriquées, trop peu de fichiers à débogguer, délai de rendu trop court), le groupe pourrait encore gagner en efficacité en s'organisant mieux en amont : 
* en *définissant plus rigoureusement le périmètre d'intervention* de chacun de ses membres. Cela implique notamment une identification plus précise des bogues, dès la première réunion, et une répartition plus stricte entre développeurs des _issues_ plutôt que d'en rajouter au fil de l'eau ce qui peut créer des doublons.
* en *harmonisant les conceptions que chacun a de la notion de _déboggage_*. Jusqu'à quel point peut-on aller dans l'optimisation et la refactorisation d'un code qu'on juge de mauvaise facture ?
