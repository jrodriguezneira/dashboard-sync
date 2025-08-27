import React, { useEffect,useState} from 'react';
import {getLaunches} from "../hooks/stats";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

const Launches = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const launchesGrid = [

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
  { field: 'launch_date',
    headerText: 'Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },
];

const [prodlaunches, setProdlaunches] = useState([]);


useEffect(() => {
          const loadLaunches = async () => {
            try {
              const mainLaunches = await getLaunches(); 
              setProdlaunches(mainLaunches);
              // console.log("Prods:", prods);


            } catch (err) {   
              console.error("Error fetching prods:", err);
            }
          };
          loadLaunches();
}, []);
// console.log("Prods:", prods);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Launches" />
      <GridComponent
        dataSource={prodlaunches}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {launchesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Launches;
