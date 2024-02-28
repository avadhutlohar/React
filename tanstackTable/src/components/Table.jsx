import { loadsummary } from "../data/loadsummary.js";
import { TableSection } from "./TableSection.jsx";
export const Table = () => {
  return (
    <table>
      <thead>
        <td></td>
        <th>Aggregation type</th>
        <th>Slot owner</th>
        <th>Box operator</th>
        <th>20ST</th>
        <th>40ST</th>
        <th>40HC</th>
        <th>45HC</th>
        <th>Container Number</th>
        <th>TEU count</th>
        <th>Weight</th>
      </thead>
      {loadsummary.map((Details, index) => (
        <TableSection Details={Details} index={index} />
      ))}
    </table>
  );
};