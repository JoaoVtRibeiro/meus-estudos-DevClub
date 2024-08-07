import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIconStyles } from './styles'

function ListProducts() {
    const [products, setProducts] = useState()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')

            setProducts(data)
        }

        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: '#228822' }} /> // Lembrando, ao chegar no return a execução da função termina (por isso não é necessário um else, apesar de funcionar da mesma maneira)
        }

        return <CancelIcon style={{ color: '#CC1717' }} />
    }

    function EditProduct(product) {
        push(paths.EditProduct, { product }) // Há como enviar props pelo push também (rota, { props })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">
                                Produto em Oferta
                            </TableCell>
                            <TableCell align="center">
                                Imagem do Produto
                            </TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && // A tabela só será renderizada quando os valores do estado chegar (isso para caso o valor da api demorar para chegar)
                            products.map(product => (
                                <TableRow
                                    key={product.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0
                                        }
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>
                                        {formatCurrency(product.price)}
                                    </TableCell>
                                    <TableCell align="center">
                                        {isOffer(product.offer)}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Img
                                            src={product.url}
                                            alt="imagem-produto"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <EditIconStyles
                                            onClick={() => EditProduct(product)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts
