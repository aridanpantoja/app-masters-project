import CardsList from "../CardsList";
import Error from "../Error";

export default async function FetchData() { 
    setTimeout(() => {
        return <Error>O servidor demorou muito pra responder</Error>
    }, 5000);
    
    const url = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/"
    const errors = [500, 502, 503, 504, 507, 508, 509]

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "dev-email-address": "aridanpantoja@gmail.com",   
        }
    })

    if (response.ok) {
        const data = await response.json()
        return <CardsList data={data} />

    } else if (errors.includes(response.status)) {
        return <Error>O servidor falhou em responder. Tente recarregar a página</Error>

    } else {
        return <Error>O servidor não conseguirá responder por agora. Tente voltar novamente mais tarde</Error>
    }

}