import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, Menu, LinkMenu } from './styles'

function Orders() {
    const [orders, setOrders] = useState([]) // Pedidos recebidos pela api
    const [filteredOrders, setFilteredOrders] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)
    const [rows, setRows] = useState([]) // Pedidos atualizados para cada mudança em 'filteredOrders' e prontos para serem enviados para tabela

    // Pedidos recebidos pela api
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
            setFilteredOrders(data)
        }

        loadOrders()
    }, [])

    // Diagramação dos dados
    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: formatDate(order.createdAt),
            status: order.status,
            products: order.products
        }
    }

    // Pedidos atualizados para cada mudança em 'filteredOrders' e prontos para serem enviados para tabela
    useEffect(() => {
        const newRows = filteredOrders.map(ord => createData(ord))
        setRows(newRows)
    }, [filteredOrders])

    // Nova filtragrem sempre que algum pedido mudar o status
    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredOrders(orders)
        } else {
            const statusIndex = status.findIndex(sts => sts.id === activeStatus) // Define uma posição baseado no status ativo
            // Filtra os pedidos que apenas contém o status igual ao ativo
            const newFilteredOrders = orders.filter(
                order => order.status === status[statusIndex].value
            )
            setFilteredOrders(newFilteredOrders)
        }
    }, [orders])

    function hundleStatus(status) {
        if (status.id === 1) {
            setFilteredOrders(orders)
        } else {
            const newOrders = orders.filter(
                order => order.status === status.value
            )
            setFilteredOrders(newOrders)
        }
        setActiveStatus(status.id)
    }

    return (
        <Container>
            <Menu>
                {status &&
                    status.map(status => (
                        <LinkMenu
                            key={status.id}
                            onClick={() => hundleStatus(status)}
                            isActiveStatus={activeStatus === status.id} // Verifica item por item (por conta do map) qual tem o id igual ao clicado (enviado para o handleOrders), mandando true/false para styled-components
                        >
                            {status.label}
                        </LinkMenu>
                    ))}
            </Menu>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead style={{ backgroundColor: '#565656' }}>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ color: 'white' }}>
                                Pedido
                            </TableCell>
                            <TableCell style={{ color: 'white' }}>
                                Cliente
                            </TableCell>
                            <TableCell style={{ color: 'white' }}>
                                Data do Pedido
                            </TableCell>
                            <TableCell style={{ color: 'white' }}>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Enviando os pedidos para formatação da tabela */}
                        {rows.map(row => (
                            <Row
                                key={row.orderId}
                                row={row}
                                setOrders={setOrders}
                                orders={orders}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Orders
