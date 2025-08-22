// import { useState, useEffect } from "react";

// function useStats() {
//   const [stats, setStats] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php")
//       .then(res => res.json())
//       .then(data => {
//         setStats(data);
//         setLoading(false);~
//       });
//   }, []);

//   return { stats, loading };
// }

// export default useStats;


// const BASE_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";

// export const getStats = async () => {
// // const response = await fetch(BASE_URL);
// // const data = await response.json();

//  const result = await fetch(BASE_URL)
//       result.json().then(json => {
//         json.data
//       })

// return result;

// }

const BASE_URL = "https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php";


export const getStats = async () => {
const response = await fetch(BASE_URL);
const result = await response.json();
//console.log(result.data[0])
return result.data;
}

// const fetchData = async () => {
//       const result = await fetch(URL)
//       result.json().then(json => {
//         json.data
//       })
//   }


// import { useState, useEffect } from "react";

// function useUsers() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://staging-sr9-loy-ing-awsserv.site/inx/loy/pro_stats.php")
//       .then(res => res.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       });
//   }, []);

//   return { users, loading };
// }

// export default useUsers;