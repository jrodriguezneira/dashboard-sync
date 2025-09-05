import React, { useEffect,useState} from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, Card, CardPortrait, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import {getProdcats, getStats,getStocks} from "../hooks/stats";


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {

      const { currentColor, currentMode} = useStateContext(); 
      const [stats, setStats] = useState([]);
      const [stocks, setStocks] = useState([]);
      const [cats, setCats] = useState([]);


        useEffect(() => {
          const loadStats = async () => {
            try {
              const mainStats = await getStats();
              const mainStocks = await getStocks();
              const mainCats = await getProdcats();


              const statsArray = Object.entries(mainStats[0]).map(([key, value]) => ({
                [key]: value,
              }));
              const stocksArray = Object.entries(mainStocks[0]).map(([key, value]) => ({
                [key]: value,
              }));

              setStats(statsArray);
              setStocks(stocksArray);
              setCats(mainCats);

            } catch (err) {   
              console.error("Error fetching stats:", err);
            }
          };
          loadStats();
        }, []);

        const combined = earningData.map((earning, index) => ({
          ...earning,
          ...stats[index],
        }));

          const combinedStocks = recentTransactions.map((recent, index) => ({
          ...recent,
          ...stocks[index],
        }));

  return (
    <div className="mt-24">
      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="flex mx-auto flex-wrap gap-5 items-center bg-no-repeat bg-cover mb-4 bg-center w-full max-w-[1235px]">

            {combined.map((item, index) => (
              <Card key={index} item={item} />
            ))}

        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 shadow-lg ">
            <div className="flex justify-between ">
              <p className="font-semibold text-xl">Products Available</p>          
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">            
              <div>
                <Stacked currentMode={currentMode} width="30%" height="360px" />
              </div>
            </div>
          </div>
      <div>
         

      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-2 flex justify-center items-center gap-10 shadow-lg">
               

              <div className="w-350 " >

                <div className="flex justify-start">
              <p className="font-semibold text-xl">Categories</p>          
            </div>  
           
                  <Pie id="pie-chart" data={cats} legendVisiblity={true} height="full" />
                </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Stocks</p>           
          </div>
          <div className="mt-10 w-72 md:w-400">
      
             {combinedStocks.map((item, index) => (
              <CardPortrait key={index} item={item} />
            ))}

        </div> 
              
       </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760 shadow-lg">
          <div className="flex justify-between items-center gap-2 mb-10 ">
            <p className="text-xl font-semibold">Messages</p>
          </div>
          <div className="md:w-full overflow-auto">
            <p>There are 64 offers with no stock </p>
            <br></br>
            <p> Last products launched (View Products)</p>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
