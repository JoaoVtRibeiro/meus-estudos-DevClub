import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import formatCurrency from '../../../utils/formatCurrency'
import api from '../../../services/api'
import paths from '../../../constants/path';
import { Container, Img, EditIconButton } from './style'

function ListProducts() {
    const [products, setProducts] = useState([])
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
            return <CheckCircleIcon style={{ color: '#228822' }} /> // Lembrando, ao chegar no return a execução da função termina (por isso não é necessário um else, apesar de funcionar da mesma maneira)
        }
        return <RemoveIcon style={{ color: '#CC1717' }} />
    }

    function sendToEditProduct(product) {
        push(paths.EditProductsAdm, { product }) // Há como enviar props pelo push também (rota, { props })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align='center'>Produto em Oferta</TableCell>
                            <TableCell align='center'>Imagem do Produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && // A tabela só será renderizada quando os valores do estado chegar (isso para caso o valor da api demorar para chegar)
                            products.map((product) => (
                                <TableRow
                                    key={product.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{product.name}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{formatCurrency(product.price)}</TableCell>
                                    <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                                    <TableCell align='center'><Img src={product.url} alt='imagem do produto'></Img></TableCell>
                                    <TableCell><EditIconButton onClick={() => sendToEditProduct(product)} /></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts