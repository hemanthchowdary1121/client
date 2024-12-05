import './App.css';
import MyCalendar from './MyCalendar';
import { MdOutlineDashboard } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <div className='header-box'></div>
      <div className='body-box'>
        <div className='side-bar'>
          <div style={{height:'50vh', border:'1px solid black', marginTop:'100px'}}>
          <div className='side-holder'>
          <MdOutlineDashboard style={{color:'white', fontSize:'24px', marginTop:'20px', marginLeft:'30px'}}/>
          <p style={{color:'white', marginTop:'25px', fontWeight:'700'}}>Dashboard</p>
          </div>
          <div className='side-holder'>
          <GiAutoRepair style={{color:'white', fontSize:'24px', marginTop:'20px', marginLeft:'30px'}}/>
          <p style={{color:'white', marginTop:'25px', fontWeight:'700'}}>Repairs</p>
          </div>
          <div className='side-holder'>
          <IoWalletOutline style={{color:'white', fontSize:'24px', marginTop:'20px', marginLeft:'30px'}}/>
          <p style={{color:'white', marginTop:'25px', fontWeight:'700'}}>Wallet</p>
          </div>
          <div className='side-holder'>
          <RiCalendarScheduleLine style={{color:'white', fontSize:'24px', marginTop:'20px', marginLeft:'30px'}}/>
          <p style={{color:'white', marginTop:'25px', fontWeight:'700'}}>Schedules</p>
          </div>
          </div>
        </div>
        <div className='main-body'>
          <div style={{height:'300px', width:'95%', backgroundColor:'beige', marginLeft:'auto', marginRight:'auto', marginTop:'10px'}}></div>
          <div style={{height:'40px', border:'1px solid green'}}>
            <p style={{textAlign:'left'}}>Repairs Offered</p>
          </div>
          <div style={{display:'flex', columnGap:'10px', height:'450px', border:'2px solid red'}}>
          <div className='repair-body'></div>
          <div className='repair-body'></div>
          <div className='repair-body'></div>
          </div>
          
          
        </div>
        <div className='side-box'>
          <MyCalendar/>
          <div className='repair-note'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
