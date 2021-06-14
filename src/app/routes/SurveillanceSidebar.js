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
    {
        icon: "./media/settings.svg",
        alt: "icon",
        title: "Paramètres",
        link: "/parametres", //lien vers page
    },
    //reste des objets: elements du menu
    {
        icon: "./media/car.svg",
        alt: "icon",
        title: "Véhicules",
        link: "/",
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