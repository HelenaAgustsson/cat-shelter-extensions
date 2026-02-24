import { Table } from "@contentful/f36-components";

const TableRow = ({product, users}) => {


    const getUserName = () => {
        const user = users.find((user) => user.id === product.publishedBy)
        return user ? user.name:''
    }
  
    return (
        <Table.Row>
            <Table.Cell>{product.title}</Table.Cell>
            <Table.Cell>{getUserName(product.publishedBy)}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
    )
}

export default TableRow;