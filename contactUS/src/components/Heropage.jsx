import React from 'react'
import '../styles/Heropage.css'
import { MdOutlineMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Buttoncomponent from './Buttoncomponent';

const Heropage = () => {
    return (
        <section className='heroSection'>
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>

            <div className='HeroMainDiv'>
                <div className="leftDiv">
                    <div className='top_btns'>
                        <Buttoncomponent text="VIA SUPPORT CHAT" icone={<MdOutlineMessage fontSize='24px' />} />
                        <Buttoncomponent text="VIA CALL" icone={<FiPhone fontSize='24px' />} />
                    </div>
                    <Buttoncomponent text="VIA EMAIL" isOutline={true} icone={<CiMail fontSize='24px' />} />

                    <form action="" className='form'>
                        <div className="form_controler">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Enter Your Name' name='name' />
                        </div>
                        <div className="form_controler">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter Your Email' name='email' />
                        </div>
                        <div className="textarea_Cont">
                            <label htmlFor="text">Text</label>
                            <textarea  placeholder='Type here...' name='text' rows={7} cols={63} />
                        </div>
                        <div className='submit_div'>
                        <Buttoncomponent text="SUBMIT"   />
                        </div>
                    </form>
                </div>
                <div className="rightDiv">
                    <img src="images/image.png" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Heropage
