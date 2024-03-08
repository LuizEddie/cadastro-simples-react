interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps){
    
    const cor = props.cor ? props.cor : 'gray'

    return (
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 rounded-md text-white px-4 py-2 ${props.className}`}>
            {props.children}
        </button>
    )
}