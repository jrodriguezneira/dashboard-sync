const STATS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";
const STOCKS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stocks.php";
const PROD_MONTH_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_qty_mon.php";

export const getStats = async () => {
const response = await fetch(STATS_URL);
const result = await response.json();
return result.data;
}

export const getStocks = async () => {
const response = await fetch(STOCKS_URL);
const result = await response.json();
return result.data;
}

export const getProdmon = async () => {
const response = await fetch(PROD_MONTH_URL);
const result = await response.json();
return result.data;
}


