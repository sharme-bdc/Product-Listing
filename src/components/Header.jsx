import React from "react";

export default function Header(){
    return(
        <header className="bg-[#1E1E1E] py-4">
            <div ClassName="container">
                <div className="flex flex-col sm:flex-row justify-between items-center mx-[40px] ">
                <img src="/src/assets/logo.png" className="w-[170px] h-[60px]"></img>
                <nav className="flex list-none gap-4 text-white justify-center items-center">
                    <li className="relative">
                    <a href="#">Products</a>
                    <span className="absolute left-0 bottom-[-2px] w-1/4 h-1 border-b-2 border-[#FFC831] border-solid"></span>
                    </li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </nav>
                </div>
            </div>
        </header>
    );
}

