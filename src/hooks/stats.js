const STATS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";
const STOCKS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stocks.php";
const PROD_MONTH_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_qty_mon.php";
const PROD_CATS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_cats.php";
const PRODS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/current_price_json_view.php"
const PROD_LAUNCHES_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/prod_lau_tot_json.php"
const PROD_OFFERS_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/offers_json.php"

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

export const getProdcats = async () => {
const response = await fetch(PROD_CATS_URL);
const result = await response.json();
return result.data;
}

export const getProducts = async () => {
const response = await fetch(PRODS_URL);
const result = await response.json();
return result.data;
}

export const getLaunches = async () => {
const response = await fetch(PROD_LAUNCHES_URL);
const result = await response.json();
return result.data;
}

export const getOffers = async () => {
const response = await fetch(PROD_OFFERS_URL);
const result = await response.json();
return result.data;
}


