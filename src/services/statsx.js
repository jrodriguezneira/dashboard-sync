const BASE_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";


 useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json.data[0].prod)
      })
  }
  
fetchData();

},[]);