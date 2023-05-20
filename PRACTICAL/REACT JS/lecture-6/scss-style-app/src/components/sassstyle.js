import React from "react"; 
// const mainbg= "../../../public/assets/images/mainbg.webp"

const myimag={
    BackgroundImage:"url('assets/images/mainbg.webp')"
}

function Sassstyle(){

    return (

        <>
            <div id="loginpage" align="center">
                <i className="fa fa-instagram"></i>
                <h1>login hear</h1>
                <form method="get">
                    <input type="text" placeholder="Name" pattern="[A-Za-z]{3,}" title="Your name have more then 3 charactr" required /> <br/><br/>

                    <input type="password" placeholder="Password"
                    pattern="[0-9]{5,}" title="Password must have more then 5 charactr" required/> <br/><br/>
                    
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </>

    );

}
export default Sassstyle;