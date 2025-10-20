
import { SidebarData } from "./SidebarData";

function Sidebar(){
    return(
        <div className="h-screen w-1/6 bg-gray-200">
            <ul className="mt-16 h-full w-full">
                {SidebarData.map((val,key) =>{
                    return(
                        <li className="w-full h-15 list-none m-0 flex flex-row justify-center items-center hover:cursor-pointer hover:bg-gray-300" key={key} onClick={()=> {window.location.pathname =val.link}}>
                            {" "}
                            <div className="flex-30 grid place-items-center">{val.icon}</div>{" "}
                            <div className="flex-70">
                                {val.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )

}

export default Sidebar;