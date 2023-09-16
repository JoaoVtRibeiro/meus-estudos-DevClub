import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import api from '../../../services/api'
import Row from './row'
import { Container } from '/style.js'

function Orders() {
    const [orders, setOrders] = useState([]) // Pedidos recebidos pela api
    const [rows, setRows] = useState([]) // Pedidos atualizados para cada mudança em 'orders' e prontos para serem enviados para tabela

    useEffect(() => { // Pedidos recebidos pela api
        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
        }

        loadOrders()
    }, [])

    function createData(order) { // Diagramação dos dados
        return {       
            orderId: order.id,
            name: order.user.name,
            date: order.createdAt,
            status: order.status,
            products: order.products
        }
    }

    useEffect(() => { /// Pedidos atualizados para cada mudança em 'orders' e prontos para serem enviados para tabela
        const newRows = orders.map(ord => createData(ord))
        setRows(newRows)
    }, [orders])

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedido</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do pedido</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => ( // Enviando os pedidos para formatação da tabela
                            <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders