import React from "react";
import data from "../data.json";

function Table() {
  return (
    <>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(data.loadSummary[0]).map((key, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.loadSummary.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index} className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{value}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
