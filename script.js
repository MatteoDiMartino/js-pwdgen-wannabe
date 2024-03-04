// definisco variabile nome
    const userName = prompt("Inserisci il tuo nome");

// dò il benvenuto all'utente

    document.getElementById("entrata").innerHTML = "Ciao " + userName;

// definisco variabile cognome

    const userSurname = prompt("Inserisci il tuo cognome");

// definisco variabile colore

    const colorUser = prompt("Inserisci il tuo colore preferito");
    
// somma totale col valore numerico

    const passUser = ("la tua password è: " + userName + userSurname + colorUser + "23");
    document.getElementById("ps").innerHTML = passUser;
    console.log(passUser);