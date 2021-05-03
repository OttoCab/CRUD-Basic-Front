const campoRequerido = (valor,) => {
    if (valor.trim() === '') {
        return false;
    } else {
        return true;
    }
}

const rangoPrecio = (precio) => {
    if (precio > 0 && precio < 5000) {
        return true;
    }else{
        return false;
    }

}

export {campoRequerido, rangoPrecio}
