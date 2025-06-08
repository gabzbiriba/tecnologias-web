function InputTelefone(props) {
    return(
        <>
            <label htmlFor="nome">Telefone</label>
            <input type="text" id="nome" name="nome" value={PaymentResponse.valor} onChange={props.onChange}/>
            {props.erro && <p>{props.erro}</p>}
        </>
    );
}

export default InputTelefone;