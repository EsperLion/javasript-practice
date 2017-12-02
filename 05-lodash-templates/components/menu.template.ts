export const menuTpl = `
    <ul>
        <% forEach(items, function (item){ %>
        <li><a href="<%-item.link%>"><%-item.label%></a></li>
        <% }); %>
    </ul>
`;
