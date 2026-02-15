import { Table } from "@contentful/f36-components";

const ContentTable = ({products}) => {

 return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>Published By</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {products && products.length>0 ? products.map((product, index) => {
          return (
            <Table.Row key={index}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.publishedBy}</Table.Cell>
            </Table.Row>
          )
        }):null}
      </Table.Body>
    </Table>
 )
}

export default ContentTable;

/*

        
*/