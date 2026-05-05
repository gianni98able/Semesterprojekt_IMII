async function loadInsult() {
    const url = 'https://insult.mattbas.org/api/insult.json'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data_insult = await loadInsult();
console.log(data_insult); // gibt die Daten der API oder false in der Konsole aus

async function loadJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data_joke = await loadJoke();
console.log(data_joke); // gibt die Daten der API oder false in der Konsole aus