import {HomeSVG} from "./svgComponent/home"
import {WebinarsSVG} from "./svgComponent/webinars"
import {BillingSVG} from "./svgComponent/billing"
import {UserSVG} from "./svgComponent/user"
import {SettingSVG} from "./svgComponent/settings"
import { LogoSVG } from "./logo"

export function SideBar() {

    return <div className=" w-[250px] h-dvh p-4 flex flex-col border-r-[1px] border-solid border-dull-light-100 bg-white">
        <SideBarList/>
        
    </div>
}

function SideBarList() {
    return  <div className="border-[1px] border-solid border-black flex flex-col ">
        <ListHeader/>
        <ListItem textValue={"Home"} SvgValue={HomeSVG}/>
        <ListItem textValue={"Webinars"} SvgValue={WebinarsSVG}/>
        <ListItem textValue={"Palling & Billing"} SvgValue={BillingSVG}/>
        <ListItem textValue={"User Management"} SvgValue={UserSVG}/>
        <ListItem textValue={"Settings"} SvgValue={SettingSVG}/>
    </div>
}

function ListHeader() {

    return <div className="p-2 w-54 h-16 flex items-center">
        <LogoSVG/>
    </div>
}

function ListItem({textValue, children, SvgValue}) {

    return <div className="p-2 flex justify-between items-center h-14 w-54 border-2 m-0" >
        <p>{textValue}</p>
        <p><SvgValue/></p>
    </div>
}