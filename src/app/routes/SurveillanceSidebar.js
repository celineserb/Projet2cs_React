//utiliser ce template pour personnaliser le sidebar dans votre volet
//envoyer la liste telle qu'elle est comme prop (items) dans le sidebar component
export default 
[
    //premier objet: titre du volet
    {
        icon: "./media/device-cctv.svg", //chemin vers icon (relatif au sidebar)
        alt: "logo", //text alternative
        title: "Surveillance", //titre
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
        icon: "./media/car.svg",
        alt: "icon",
        title: "Véhicules",
        link: "/", //lien vers page
    },
    {
        icon: "./media/alien.svg",
        alt: "icon",
        title: "Enlèvements",
        link: "/enlevements",
    },
    {
        icon: "./media/alert-triangle.svg",
        alt: "icon",
        title: "Pannes",
        link: "/pannes",
    },
]