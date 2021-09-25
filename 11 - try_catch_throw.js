function tratarErro(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function upperCase(string) {
    try {
        console.log(string.toUpperCase())
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }

}

