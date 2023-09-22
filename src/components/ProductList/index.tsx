import React from 'react';
import { Product } from '../../types';

interface Props {
  data: Product[];
  columns: Array<{
    dataIndex: keyof Product | 'actions'; // Add 'actions' to dataIndex
    title: string;
    render?: (text: unknown, record: Product) => React.ReactNode; // Render function for action buttons
  }>;
}

const ProductList: React.FC<Props> = ({ data, columns }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.dataIndex.toString()}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.dataIndex.toString()}>
                {column.dataIndex === 'actions'
                  ? column.render?.(null, product) // Render action buttons
                  : product[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
