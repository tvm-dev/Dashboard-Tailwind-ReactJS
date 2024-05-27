import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/consts'

const recentsOrdersData = [
    {
        id: '1',
        product_id: 4324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '2',
        product_id: 4024,
        custumer_id: 53143,
        customer_name: 'Lopes S. Phil',
        order_data: '2022-06-17T03:24:00',
        order_total: '$45.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, QR 424'
    },
    {
        id: '3',
        product_id: 444,
        custumer_id: 25543,
        customer_name: 'Carlos S. Lopes',
        order_data: '2023-05-17T03:24:00',
        order_total: '$4350.50',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Streed Grove P, QV 87424'
    },
    {
        id: '3',
        product_id: 43324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '1',
        product_id: 5433,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'SHIPPED   ',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '1',
        product_id: 4324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '1',
        product_id: 4324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '1',
        product_id: 4324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'Cottage Grove, QR 97424'
    },
    {
        id: '166',
        product_id: 4324,
        custumer_id: 23143,
        customer_name: 'Shirley Lopes',
        order_data: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, QR 97424'
    }
]

function RecentOrders() {
    return (
        <div className="bg-white px-4 pt-3 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders </strong>
            <div className="mt-3">
                <table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product ID</td>
                            <td>Customer Name</td>
                            <td>Order Data</td>
                            <td>Order Total</td>
                            <td>Shiping Address</td>
                            <td>Order Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentsOrdersData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/order/${order.id}`}> # {order.id}</Link>
                                </td>
                                <td>
                                    <Link to={`/products/${order.product_id}`}>{order.product_id}</Link>
                                </td>
                                <td>
                                    <Link to={`/customer/${order.custumer_id}`}>{order.customer_name}</Link>
                                </td>
                                <td>{new Date(order.order_data).toLocaleDateString()}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RecentOrders
