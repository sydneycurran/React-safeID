export default async function fetchTest() {
    const x = 77
    let data = {
        "hello" : ["yes", "i", "can"]
    }
    await fetch('http://localHost:8000/id',
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json))
}
