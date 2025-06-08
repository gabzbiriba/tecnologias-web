import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodos() {
    return axios.get(url)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.response?.data?.message || "Ocorreu um erro!" };
    });
}

function buscarPorId(id) {
    return axios.get(`${url}/${id}`)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.response?.data?.message || "Ocorreu um erro!" };
    });
}

function adicionar(contato) {
    return axios.post(url, contato) // ✅ Corrigido para POST
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.response?.data?.message || "Ocorreu um erro ao criar contato" };
    });
}

function modificar(id, contato) {
    return axios.put(`${url}/${id}`, contato)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.response?.data?.message || "Ocorreu um erro ao atualizar" };
    });
}

function remover(id) {
    return axios.delete(`${url}/${id}`)
    .then((response) => {
        return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return { sucesso: false, mensagem: error.response?.data?.message || "Ocorreu um erro ao remover" };
    });
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };