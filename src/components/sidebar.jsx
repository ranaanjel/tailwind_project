import {HomeSVG} from "./svgComponent/home"
import {WebinarsSVG} from "./svgComponent/webinars"
import {BillingSVG} from "./svgComponent/billing"
import {UserSVG} from "./svgComponent/user"
import {SettingSVG} from "./svgComponent/settings"
import { LogoSVG } from "./logo"
import {MenuSVG} from "./svgComponent/menu"
import PFP from "../assets/okarun.webp"
import { useEffect, useRef, useState } from "react"

export function SideBar({openSide, setOpenSide}) {

    const refer = useRef() 

    if(openSide) {

    return <div ref={refer} className="lg:animate-slide lg:w-[270px] lg:h-dvh p-4 flex lg:flex-col border-r-[1px] border-solid border-dull-light-100 bg-white z-10 dark:bg-secondary-dark dark:border-dull-dark-300">
        <SideBarList openSide={openSide} refer={refer} setOpenSide={setOpenSide}/>
    </div>
    }

    return <div ref={refer} className="md:w-[72px] lg:h-dvh md:p-4 py-0 px-4 flex flex-col border-r-[1px] w-[100vw] h-auto md:static fixed  bottom-0  border-solid border-dull-light-100 bg-white z-10 dark:bg-secondary-dark dark:border-dull-dark-300">
        <SideBarList openSide={openSide} refer={refer} setOpenSide={setOpenSide}/>
    </div>
}

function SideBarList({refer, setOpenSide, openSide}) {
    return  <div className="flex md:flex-col md:gap-2  flex-row justify-between">
        <ListHeader reference={refer} setOpenSide={setOpenSide} openSide={openSide}/>
        <ListItem openSide={openSide} textValue={openSide ? "Home":""} isActive={true} SvgValue={HomeSVG}/>
        <ListItem openSide={openSide} textValue={openSide?"Webinars":""} isActive={false} SvgValue={WebinarsSVG}/>
        <ListItem openSide={openSide} textValue={openSide?"Palling & Billing":""} isActive={false} SvgValue={BillingSVG}/>
        <ListItem openSide={openSide} textValue={openSide?"User Management":""} isActive={false} SvgValue={UserSVG}/>
        <ListItem openSide={openSide} textValue={openSide?"Settings":""} isActive={false} SvgValue={SettingSVG}/>
    </div>
}

function ListHeader({reference, setOpenSide, openSide}) {


    return <div className="p-2 lg:w-54 h-16 flex justify-between items-center ">
        {openSide?<LogoSVG/>:""}
        <div className="cursor-pointer rounded-sm lg:size-8 " onClick={function () {
            // console.log(reference.current)5
            if(!window.matchMedia("(min-width:1000px)").matches) {
                return;
            }

            setOpenSide(c => !c)

        }}>
            {openSide? <img src={PFP} alt="pfp" /> : <MenuSVG/>}
        </div>
    </div>
}

function ListItem({textValue, SvgValue, isActive, openSide}) {

    return <div className={`${isActive ? "text-accent-light dark:text-accent-dark dark:bg-dull-dark-300 bg-dull-light-100" : "text-dull-light-300"} p-2 flex ${openSide?"justify-between":"justify-start"} items-center h-14 md:w-auto w-14 m-0 hover:text-accent-light hover:bg-dull-light-100 dark:hover:bg-dull-dark-300 dark:hover:text-accent-dark `} >
        <p>{textValue}</p>
        <p className="md:m-0 m-auto"><SvgValue/></p>
    </div>
}