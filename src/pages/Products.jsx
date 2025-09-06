import React, { useEffect,useState} from 'react';
import {getProducts} from "../hooks/stats";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
// import {DownloadButton} from '../components';

import { Header} from '../components';

const Products = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const productsGrid = [

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
  { field: 'rrp',
    headerText: 'rrp',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'top',
    headerText: 'top',
    width: '120',
    textAlign: 'Center' },
  { field: 'pay',
    headerText: 'pay',
    width: '125',
    textAlign: 'Center' },
    { field: 'offer',
    headerText: 'offer',
    width: '125',
    textAlign: 'Center' },
    { field: 'ro',
    headerText: 'ro',
    width: '125',
    textAlign: 'Center' },
    { field: 'check',
    headerText: 'check',
    width: '125',
    textAlign: 'Center' },
];

const [prods, setProds] = useState([]);


useEffect(() => {
          const loadProds = async () => {
            try {
              const mainProds = await getProducts(); 
              setProds(mainProds);
              console.log("Prods:", prods);


            } catch (err) {   
              console.error("Error fetching prods:", err);
            }
          };
          loadProds();
}, []);
console.log("Prods:", prods);

const handleDownload = (url) => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = url; // e.g. "https://staging-sr9-loy-ing-awsserv.site/inx/loy/currentprice.php?rep=excel"
  document.body.appendChild(iframe);

  // optional: clean up later
  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 5000);
};

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <span> 

      <button onClick={() => handleDownload("https://staging-sr9-loy-ing-awsserv.site/inx/loy/currentprice.php?rep=excel")}>
  Download
</button>

      </span>
      <Header category="Page" title="Products" />
      <GridComponent
        dataSource={prods}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {productsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Products;
