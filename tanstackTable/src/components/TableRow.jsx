export const TableRow = ({ Details }) => {
    return (
      <tr>
        <td></td>
        <td>{Details.Aggregationtype}</td>
        <td>{Details.Slotowner}</td>
        <td>{Details.Boxoperator}</td>
        <td>{Details.ST20}</td>
        <td>{Details.ST40}</td>
        <td>{Details.HC40}</td>
        <td>{Details.HC45}</td>
        <td>{Details.Containernumber}</td>
        <td>{Details.TEUcount}</td>
        <td>{Details.Weight}</td>
      </tr>
    );
  };