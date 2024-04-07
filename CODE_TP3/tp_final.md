
# TP final: Liaison entre votre bot et votre API

C'est la dernière ligne droite ! Maintenant que vous avez une API  et un bot discord, il ne vous reste plus qu'à faire la liaison entre les deux.

Pour cela, il suffit de créer des commandes permettant d’interagir avec votre API.

**Exemple:**
Taper la commande /users permet de récupérer la liste des utilisateurs de votre application.


Pour cela, utilisez axios afin de faire des appels HTTP automatisés vers votre API:

```javascript
const { SlashCommandBuilder } =  require('discord.js');
const  axios  =  require('axios');

module.exports  = {
    data:  new  SlashCommandBuilder()
        .setName('users')
        .setDescription('Réponse : Liste des utilisateurs de l api todolist'),
    async  execute(interaction) {
        const  options  = {
            method:  'GET',
            url:  'http://localhost:3000/users/find',
        };
        try {
            const  response  =  await  axios.request(options);
            let  items  =  response.data
            if (!Array.isArray(items)) {
                items  = [items]
            }
            const  reply  =  // contruction de la reponse
            await  interaction.reply(reply);
        } catch (e) {
            console.log(e);
        }
    },
};
```

###  Fonctionnalités minimales du bot
Les fonctionnalités attendues sont les même que pour le tp2:
 - Créer un utilisateur
 - Ajouter un item au registre
 - Créer une watchlist pour un utilisateur
 - Ajouter un item dans une watchlist
 - Modifier le statut d'un item dans une watchlist 
  - Afficher les items du registre (avec possibilité de filtrer)
 - Récupérer la liste des utilisateurs
 - Récupérer la liste des watchlists d'un utilisateur
 - Récupérer le contenu d'une watchlist
 
### Fonctionnalités supplémentaires:
 - Supprimer un item d'une watchlist
 - Modifier les informations personnelles d'un utilisateur
 - Supprimer une watchlist
 - Ajouter une watchlist en favori
 - Partager sa watchlist avec un autre utilisateur
 - Donner la possibilité d'écrire une note personnelle sur une watchlist ou un item d'une watchlist.
 - Mettre en place une page permettant de tester les routes de notre api

Vous pouvez également implémenter vos propres fonctionnalités si vous avez des idées.



## Notation

Au niveau de la notation, les éléments suivants seront pris en compte:
- Les fonctionnalités minimales ont été développées et fonctionnent
- Des fonctionnalités supplémentaires ont été développés
- Le code est de qualité
- Présence de jsdoc
- Gestion des erreurs

Bonus:
- Présence de tests unitaires
- Présence de logs de qualité
- Présence de commandes ou de fonctionnalités non décrites dans le sujet
- Qualité du repo GitHub

Malus:
- Rendu envoyé en retard
- Non respect du format du rendu

A noter qu'il est préférable de privilégier la **qualité** à la **quantité**.  
En effet, préférez avoir moins de fonctionnalités de qualité ( route avec jsdoc, logs et gestion d'erreurs, etc...). Que beaucoup de fonctionnalités comprenant le strict minimum.
