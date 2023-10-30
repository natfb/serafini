import React from "react";

import BackVideo from '../../assets/BackVideo.mp4';

const ContentSection = () => {
    return (
        
        <div className="w-[100%] h-fit lg:h-[80%] flex items-center justify-center bg-black">
            <div className="text-lg md:text-4xl leading-[4em] md:leading-[3em] w-fit md:w-[30%] text-white px-5 md:px-20 lg:px-20">
                <p className="">SERAFINI<br/>"READY-<br/>TO-<br/>WEAR"</p>
            </div>
            <div className=" w-fit h-[100%] overflow-hidden m-0 lg:px-4">
                <video className='VideoTag m-0 lg:mt-[-500px] h-[100%] lg:h-[80em]' autoPlay loop muted>
                    <source src={BackVideo} type='video/mp4' />
                </video>
            </div>

            {/* <div className="h-screen flex items-center justify-center px-20 w-full overflow-hidden bg-black flex">
                <p className="text text-white">SERAFINI<br/>"READY-TO-WEAR"</p>
                <img src={history} alt="History of Serafini" className="w-[40%] m-auto" />
            </div> */}
        </div>
        
    );
};

export default ContentSection;