import { Orders } from "./orders.js";

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.productStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning': 'primary'}">
            ${order.status}
        </td>
        <td class="primary">Datails</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('.recent-orders table tbody').appendChild(tr);
});

console.log(Orders);