import Product from '../Products'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}
const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          system="windows"
          title="Nome do Jogo"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          category="Ação"
          description="teste"
          system="windows"
          title="Nome do Jogo"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          category="Ação"
          description="teste"
          system="windows"
          title="Nome do Jogo"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          category="Ação"
          description="teste"
          system="windows"
          title="Nome do Jogo"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductList
