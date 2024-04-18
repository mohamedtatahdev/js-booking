
const today = new Date().toISOString().split("T")[0];// convertir la date d'aujourdui

start_date.value = today;//doner la valeur d'aujourdhui a l'input
start_date.min = today;// la date minimum d'aujourdhui (peu pas reserver avant)

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);//initialiserla date de demain en disant aujourdhui + 1jour

let tomorrowFormat = tomorrow.toISOString().split("T")[0]; // convertir a la date de demain
end_date.value = tomorrowFormat; //doner la valeur du lendemain a l'input
end_date.min = tomorrowFormat; // la date minimum est du lendemain

start_date.addEventListener("change", (e) => {// Ajoute un gestionnaire d'événements sur le changement de la date de début
    let day = new Date(e.target.value);// Crée un objet Date à partir de la valeur de la date de début

    if (end_date.value < start_date.value) {// Vérifie si la date de fin est antérieure à la date de début
        day.setDate(day.getDate() + 1); // Ajoute un jour à la date de début
        end_date.value = day.toISOString().split("T")[0];// Met à jour la valeur de la date de fin avec le nouveau jour
    }
});

end_date.addEventListener("change", (e) =>{// Ajoute un gestionnaire d'événements sur le changement de la date de fin
    let day = new Date(e.target.value);// Crée un objet Date à partir de la valeur de la date de fin

    if(end_date.value < start_date.value){// Vérifie si la date de fin est antérieure à la date de début
        day.setDate(day.getDate() -1);// Soustrait un jour de la date de fin
        start_date.value = day.toISOString().split("T")[0];// Met à jour la valeur de la date de début avec le jour précédent
    }
});

const bookingCalc = () => {// Définit la fonction 'bookingCalc'
    let diffTime = Math.abs(// Calcule la différence de temps en millisecondes entre les deux dates
        new Date(end_date.value) - new Date(start_date.value)
    );
    let diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));// Convertit la différence de temps en jours

    total.textContent = diffDay * nightPrice.textContent;// Calcule le coût total et l'affiche dans l'élément 'total'
};

start_date.addEventListener("change", bookingCalc);// Ajoute un écouteur d'événements pour détecter les changements sur la date de début et exécuter 'bookingCalc'
end_date.addEventListener("change", bookingCalc);// Ajoute un écouteur d'événements pour détecter les changements sur la date de fin et exécuter 'bookingCalc'

bookingCalc();// Exécute la fonction 'bookingCalc' pour initialiser l'affichage