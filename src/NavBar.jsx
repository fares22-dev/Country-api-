const NavBar = () => {

const  handleMode=()=>{
    let body=document.querySelector("body")
    body.classList.toggle("dark-mode")
    body.classList.toggle("white-mode")
  
  }
  
    return ( 
        <div className='navbarr'>
        <h2>WHERE IN THE WORLD ?</h2>
        <button onClick={handleMode} className='darkmodebtn'><img src="https://cdn3.iconfinder.com/data/icons/ink-basic/35/dark-mode-64.png" /> Dark Mode</button>
      </div>
     );
}
 
export default NavBar;