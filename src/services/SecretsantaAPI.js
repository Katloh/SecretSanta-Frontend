export async function putEntry(entry) {
    await fetch("http://localhost:8080/secretsanta", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    });

}

