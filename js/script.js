const ul = document.querySelector('ul')

function getApiGithub() {
    // Busca na api do github de Repositorios
    fetch('https://api.github.com/users/omartins-zs/repos')
        .then(async res => {
            // Verifica a requisição se a API existe
            if (!res.ok) {
                throw new Error(res.status)
            }

            var data = await res.json()

            data.map(item => {
                let li = document.createElement('li')

                // Escrevendo a estrutura da Li
                li.innerHTML = `
                <strong>${item.name.toUpperCase()}</strong>
                <span>${item.url}</span>
                <span>Data Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                <span> Privacidade:  ${item.private ? 'Privado' : 'Público'}</span>
                `

                // Adicionando a li dentro do UL
                ul.appendChild(li)
            })

        }).catch(e => console.log(e))
}

getApiGithub()