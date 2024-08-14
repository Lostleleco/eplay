import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'
const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatibus
      eum fuga ad cumque et ducimus natus iure sequi, sed nihil quibusdam
      laborum exercitationem quia voluptate aliquid autem cupiditate fugiat.
    </Descricao>
  </Card>
)

export default Product
