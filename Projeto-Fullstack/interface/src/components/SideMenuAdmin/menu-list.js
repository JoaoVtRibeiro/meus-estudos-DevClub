import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CategoryIcon from '@mui/icons-material/Sell'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.ProductsList,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    },
    {
        id: 4,
        label: 'Categorias',
        link: paths.Categories,
        icon: CategoryIcon
    }
]

export default listLinks
