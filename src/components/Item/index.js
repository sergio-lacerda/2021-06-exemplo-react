const Item = ({children}) => {
    return (
        <a  href="/" 
            className="list-group-item list-group-item-action list-group-item-dark">
                {children}
        </a>
    )
}

export default Item;

/*---------------------------------------------------------
Eu também poderia trocar {props.children} por {props.texto}
Dessa forma, estaria criando uma propriedade customizada na
tag que seria chamada passando o conteúdo desejado nessa
propriedade. Exemplo:

<Item texto="Item 1"/>
----------------------------------------------------------*/