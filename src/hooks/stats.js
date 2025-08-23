const BASE_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";

export const getStats = async () => {
const response = await fetch(BASE_URL);
const result = await response.json();
//console.log(result.data[0])
return result.data;
}
