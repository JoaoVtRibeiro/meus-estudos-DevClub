/* eslint-disable react-hooks/exhaustive-deps */
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
    const [activeStatus, setActiveStatus] = useState(1)
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
            orderId: order._id,
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

    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = status.findIndex(sts => sts.id === activeStatus)
            const newFilteredOrders = orders.filter(order => order.status === status[statusIndex].value)

            setFilteredOrders(newFilteredOrders)
        }
    }, [orders])

    function handleOrders(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(order => order.status === status.value)
            setFilteredOrders(newOrders)
        }

        setActiveStatus(status.id)
    }

    return (
        <Container>
            <Menu>
                {status && status.map(status =>
                    <LinkMenu
                        key={status.id}
                        onClick={() => handleOrders(status)}
                        isActiveStatus={activeStatus === status.id} // Verifica item por item (por conta do map) qual tem o id igual ao clicado (enviado para o handleOrders), mandando true/false para styled-components
                    >
                        {status.label}
                    </LinkMenu>
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
                            <Row key={row.orderId} row={row} orders={orders} setOrders={setOrders} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders