import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import paths from '../../constants/path';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.OrderAdm,
        icon: SellIcon
    },
    {
        id: 2,
        label: 'Lista de Produtos',
        link: paths.ListProductsAdm,
        icon: ShoppingCartIcon
    }, 
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProductAdm,
        icon: AddShoppingCartIcon
    }/*
    {
        id: 4,
        label: 'Editar Produto',
        link: paths.EditProductsAdm,
        icon: ShoppingBagIcon
    }*/
]

export default listLinks