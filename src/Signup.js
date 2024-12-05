import { useState} from "react";
import "./App.css";
import axios from "axios";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import image1 from './image/sato.png'
import WebFont from 'webfontloader';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


WebFont.load({
  google: {
    families: ['Rubik', 'Poppins', 'Montserrat']
  }
});

const Signup = () => {
    const nav = useNavigate();
  
    const [firstname, setFirstName] = useState(' ')
    const [secondname, setSecondName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const [showPassword, setShowPassword] = useState(false);

    const url ="http://localhost:5000/repair/create-user"

    const handleSignUp = async (e) => {
        e.preventDefault();
      
        const data = {
          firstname,
          secondname,
          email,
          password,
        };
      
        try {
          const res = await axios.post(url, data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(res.data);
      
          if (res.status === 200) {
            nav("/home");
          }
        } catch (error) {
          console.log("Error trying to create user");
          // alert("Error occurred");
        }
      };
      

  
    return (
      <>
      <div className="container-size">
       <div className="container-spilt"></div> 
       <div className="container-spilt" style={{backgroundColor:'white', width:'45%'}}>
       <div className="logo-item">
           <img src={image1} alt="logo" style={{height:"100px", width:"100px", borderRadius:"50%"}}/>
           <h4 style={{marginBottom:"5px", fontFamily:'Poppins', fontSize:'0.8rem'}}>Food Mart</h4>
          </div>
        <div style={{height:'80px', marginTop:'100px'}}>
              <p style={{ fontSize:'1.6rem', textAlign:'center', fontFamily:'Montserrat', fontWeight:'700'}}>Sign Up for an account</p>
        </div>
      <div className="container-box">
        <form onSubmit={(e) => handleSignUp(e)}>
          <div className="container-layout">
            <div style={{height:'60px', display:'flex', columnGap:'15px'}}>
            <div>
                <input
                className="container-input"
                  style={{ marginTop: "0px", width:'180px', height:'5vh', marginLeft:'40px'}}
                  type="text"
                  name="firstname"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First"
                />
              </div>
              <div>
                <input
                className="container-input"
                  style={{ marginTop: "0px", width:'180px', height:'5vh', marginLeft:'0px'}}
                  type="text"
                  name="secondname"
                  onChange={(e) => setSecondName(e.target.value)}
                  placeholder="Second"
                />
              </div>
            </div>
  
            <div style={{ marginTop: "10px", height: "60px", diplay: "grid" }}>
              <input
                className="container-input"
                style={{ marginTop: "0px", marginLeft:'40px', width:'84%'}}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px", height: "60px", diplay: "grid" }}>
              <div style={{ position: "relative" }}>
                <input
                  className="container-input"
                  style={{ marginTop: "0px", marginLeft:'40px', width:'84%' }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                height: "50px",
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  width: "100%",
                  height: "60px",
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "yellow",
                  fontWeight: "600",
                  marginTop:"180px",
                  marginLeft:'30px'
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div>
            <Link to="/home" style={{color:'blue'}}>Having no account, sign up with us</Link>
            </div>
      </div>
      </div> 
      </div>
      </>
    );
  
}

export default Signup