import React from "react";
import history from '../../assets/history.png';


const History = () => {
    return(
        <div id="history" className="AboutSerafini my-20 md:flex">  
            <div className="px-0 w-full h-full overflow-hidden flex bg-black rounded lg:ml-5">
                <img src={history} alt="History of Serafini" className="h-[60vh] w-auto lg:h-[80vh] m-auto rounded" />
            </div>
            <div className="text-overlay px-10 lg:px-20 w-full text-center my-auto  ">
            <h1 className="text-2xl font-bold m-auto my-5 pb-2 mx-10 lg:mx-36 text-center border-b-2 border-yellow-500">NOSSA HISTÓRIA</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero officiis culpa beatae provident et illo similique harum voluptates, explicabo eum nisi sunt suscipit fuga eos quasi ipsum perferendis ea omnis?
                </p> 
                <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero officiis culpa beatae provident et illo similique harum voluptates, explicabo eum nisi sunt suscipit fuga eos quasi ipsum perferendis ea omnis?
                </p>          
            </div>
        </div>
);
};

export default History;