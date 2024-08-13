import { Imagem, Titulo, Precos } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&lsquo;s Spider-Man: Miles Morales PS4 & PS5 </Titulo>
      <Precos>
        De R$ <span>250,00</span> <br />
        Por apenas R$ 99,90
      </Precos>
    </div>
  </Imagem>
)

export default Banner
