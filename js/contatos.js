export async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch(url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

//Função para criar contatos
export async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(contato),
    }

    const response = await fetch(url, options)

    console.log(response.ok)


    return response.ok
}

//Função para deletar contatos
export async function deletarContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE',
    }

    const response = await fetch(url, options)

    return response.ok
}

//Função para atualizar contatos
export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(contato),
    }

    const response = await fetch(url, options)

    console.log(response.ok)


    return response.ok
}

//Função para "adicionar novo contato"
// const novoContato = {
//     "nome": "Seu Zé",
//     "celular": "11 9 1411-6464",
//     "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
//     "email": "josetimaocorinthians@gmail.com",
//     "endereco": "Av. São Jorge, 1910",
//     "cidade": "Paranapiacaba"
// }

lerContatos()
// novoContato()