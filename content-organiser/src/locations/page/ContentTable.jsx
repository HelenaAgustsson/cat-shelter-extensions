import { Table } from "@contentful/f36-components";
import TableRow from "./ContentRow";

const ContentTable = ({products, users}) => {


 return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>Published By</Table.Cell>
          <Table.Cell>Review due on</Table.Cell>
          <Table.Cell>Status</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {products && products.length>0 ? products.map((product, index) => {
          return (
            <TableRow key={index} product={product} users={users} />
          )
        }):null}
      </Table.Body>
    </Table>
 )
}

export default ContentTable;

/*

        
*/