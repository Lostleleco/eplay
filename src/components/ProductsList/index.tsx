import Product from '../Products'
import { Container, List } from './styles'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
const ProductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            system={game.system}
            title={game.title}
            image={game.image}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
