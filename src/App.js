import './App.css';
import EmployeeDetails from './Components/EmployeeDetails';
import Model from './Components/Model';
 function App() { 
  const arr = [{image:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/06/11/16549602168578.jpg",id: 1, name: "John", address: "DoorNo:247/1A, Tambaram, Chennai" },
  { image:"https://hips.hearstapps.com/esquireuk.cdnds.net/17/05/1485865618-matthew-mcconaughey.jpg",id: 2, name: "David", address: "DoorNo:17/1-c, Ashok Nagar, Pune" },
  { image:"https://www.koimoi.com/wp-content/new-galleries/2022/10/henry-cavill-says-superman-will-be-enormously-joyful-when-he-returns-001.jpg",id: 3, name: "luke", address: "DoorNo:47-1/A, Ammerpet, Hyderabad" },
  { image:"https://theenemyofaverage.com/wp-content/uploads/2021/09/blog-post-featured-image-harvey-specter-quotes.jpeg",id: 4, name: "suresh", address: "DoorNo:87/1-c, Konak, Delhi" },
  {image:"https://practicaltyping.com/wp-content/uploads/2021/08/suitsmike.jpg",id: 5, name: "Rahul", address: "DoorNo:17/1-c, MVP, vizag" }];
  return (    <div className="App">
    <EmployeeDetails EmpArr={arr}/>
    </div>  );
  }
export default App;