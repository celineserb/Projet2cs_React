//utiliser ce template pour personnaliser le sidebar dans votre volet
//envoyer la liste telle qu'elle est comme prop (items) dans le sidebar component
export default 
[
    //premier objet: titre du volet
    {
        icon: "./media/user.svg", //chemin vers icon (relatif au sidebar)
        alt: "logo", //text alternative
        title: "Super Admin", //titre
    },
    //deuxieme objet: parametres (ou autre, peut differer d'un volet a un autre)
    //laisser champs vides pour ne pas afficher
    {
        icon: "",
        alt: "",
        title: "",
        link: "",
    },
    //reste des objets: elements du menu
    {
        icon: "./media/user.svg",
        alt: "icon",
        title: "Ajouter admin",
        link: "/", //lien vers page
    },
]