import React, { useEffect,useState} from 'react';
import {getOffers} from "../hooks/stats";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

const Offers = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const offersGrid = [

  { field: 'sku',
    headerText: 'sku',
    width: '80',
    textAlign: 'Center',
  },
  { field: 'name',
    headerText: 'name',
    width: '170',
    textAlign: 'Center',
  },
  { field: 'category',
    headerText: 'Category',
    width: '135',
    textAlign: 'Center' },
  { field: 'offer',
    headerText: 'offer',
    width: '120',
    textAlign: 'Center' },
  { field: 'stock',
    headerText: 'stock',
    width: '125',
    textAlign: 'Center' },
];

const [prodoffers, setProdoffers] = useState([]);


useEffect(() => {
          const loadOffers = async () => {
            try {
              const mainOffers = await getOffers(); 
              setProdoffers(mainOffers);
              // console.log("Prods:", prods);


            } catch (err) {   
              console.error("Error fetching prods:", err);
            }
          };
          loadOffers();
}, []);
// console.log("Prods:", prods);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />
      <GridComponent
        dataSource={prodoffers}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {offersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Offers;
