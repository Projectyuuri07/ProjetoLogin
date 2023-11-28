
function Conteudo({children}) {
    return (
        <div className={styleConttainer}>
            {children}
        </div>
    )
}
const styleConttainer = "container mt-5 bg-white p-5 rounded shadow";

export default Conteudo