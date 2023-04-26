import styled from '@emotion/styled'
const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;


`
const Texto = styled.p`
    font-size: 18px;
span{
    font-weight: 700;
}
`
const Precio = styled.p`
font-size: 24px;
span{
    font-weight: 700;
}
    
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=
    resultado
  return (
    <div>
        <Contenedor>
       <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
         <div>
         <Precio>El precio es de: <span>{PRICE}</span></Precio>
         <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
         <Texto>El precio mas bajo de dia: <span>{LOWDAY}</span></Texto>
         <Texto>Variacion ultimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
         <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
         </div>

        </Contenedor>
    </div>
  )
}

export default Resultado