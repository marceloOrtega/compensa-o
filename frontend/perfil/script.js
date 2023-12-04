function carregar() {
    const dado = window.localStorage.getItem("dados");
    if (dado !== null) {
        const perfil = document.getElementById('perfil');
        const parsedData = JSON.parse(dado);
        perfil.id.value = parsedData.id;
        perfil.nome.value = parsedData.nome;
        perfil.cpf.value = parsedData.cpf;
        perfil.email.value = parsedData.email;
        perfil.nascimento.value = parsedData.nascto.substring(0, 10); // Verifique o formato da data
        perfil.cep.value = parsedData.endereco.cep;
        perfil.numero.value = parsedData.endereco.numero;
        perfil.complemento.value = parsedData.endereco.complemento;
        perfil.telefones.value = parsedData.telefones;
    } else {
        document.getElementById('erro').innerHTML = 'Usuário não encontrado.';
    }

    const form = document.getElementById('perfil');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dados = {
            cep: form.cep.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
            id: form.id.value,
            nome: form.nome.value,
            cpf: form.cpf.value,
            email: form.email.value,
            nascto: form.nascimento.value,
            telefones: form.telefones.value
        };

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        };

        try {
            const response = await fetch("http://localhost:3000/usuarios/atualizar", options);
            if (response.ok) {
                alert("Dados Alterados");
            } else {
                throw new Error('Erro ao atualizar dados.');
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao atualizar os dados.");
        }
    });
}
