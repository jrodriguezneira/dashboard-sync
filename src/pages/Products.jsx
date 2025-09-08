import React, { useEffect,useState} from 'react';
import {getProducts} from "../hooks/stats";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
// import {DownloadButton} from '../components';

import { Header} from '../components';
import { L10n } from '@syncfusion/ej2-base';


const Products = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };


  const productsGrid = [

  { field: 'sku',
    headerText: 'SKU',
    width: '120',
    textAlign: 'Center',
  },
  { field: 'name',
    headerText: 'NAME',
    width: '170',
    textAlign: 'Center',
  },
  { field: 'rrp',
    headerText: 'RRP',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'top',
    headerText: 'TOP POINTS',
    width: '120',
    textAlign: 'Center' },
  { field: 'pay',
    headerText: 'PAY',
    width: '125',
    textAlign: 'Center' },
    { field: 'offer',
    headerText: 'OFFER',
    width: '125',
    textAlign: 'Center' },
    { field: 'ro',
    headerText: 'RO',
    width: '125',
    textAlign: 'Center' },
    { field: 'check',
    headerText: 'CHECK',
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

L10n.load({
  'en-US': {
    grid: {
      EmptyRecord: 'Loading...'
    }
  }
});

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <span> 

      

      </span>
      <Header category="" title="Products" />
      
      <button onClick={() => handleDownload("https://staging-sr9-loy-ing-awsserv.site/inx/loy/currentprice.php?rep=excel")}>
        <button className="e-btn e-flat">
        <span className="e-btn-icon e-icons e-download"></span> Download
      </button>
      </button>

      <GridComponent
        dataSource={prods}
        //dataSource={loading ? [] : prods}
        locale="en-US"
        enableAltRow={true} 
        gridLines="Both"
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5, pageSize: 15 }}
        editSettings={editing}
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {productsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </div>
  );
};
export default Products;
