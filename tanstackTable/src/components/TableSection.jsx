import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import useOpenController from "../Hooks/useOpenController";

export const TableSection = ({ Details, index }) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <tbody>
       {isOpen && 
      <TableRow Details={Details} />
      }
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
          <b>Subtotal {index + 1} per partner</b>
        </td>
        <td></td>
        <td></td>
        <td>28</td>
        <td>29</td>
        <td>12</td>
        <td>12</td>
        <td>12</td>
        <td>12</td>
        <td>12</td>
      </tr>
     
    </tbody>
  );
};
