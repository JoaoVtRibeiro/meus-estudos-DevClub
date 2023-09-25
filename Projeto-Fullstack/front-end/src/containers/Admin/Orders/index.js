import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import api from '../../../services/api'
import status from './order-status'
import formatDate from '../../../utils/formatDate'
import Row from './row'
import { Container, Menu, LinkMenu } from '/style.js'

function Orders() {
    const [orders, setOrders] = useState([]) // Pedidos recebidos pela api
    const [filteredOrders, setFilteredOrders] = useState([])
    const [rows, setRows] = useState([]) // Pedidos atualizados para cada mudança em 'filteredOrders' e prontos para serem enviados para tabela

    useEffect(() => { // Pedidos recebidos pela api
        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
            setFilteredOrders(data)
        }

        loadOrders()
    }, [])

    function createData(order) { // Diagramação dos dados
        return {
            orderId: order.id,
            name: order.user.name,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products
        }
    }

    useEffect(() => { /// Pedidos atualizados para cada mudança em 'filteredOrders' e prontos para serem enviados para tabela
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)
    }, [filteredOrders])

    function handleOrders(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(order => order.status === status.value)
            setFilteredOrders(newOrders)
        }
    }

    return (
        <Container>
            <Menu>
                {status && status.map(status =>
                    <LinkMenu key={status.id} onClick={() => handleOrders(status)}>{status.label}</LinkMenu>
                )}
            </Menu>

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