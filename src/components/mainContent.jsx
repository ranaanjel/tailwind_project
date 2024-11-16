import PFPlight from "../assets/okarun.webp"
import PFPdark from "../assets/momo.webp"

import { CalendarSVG } from "./svgComponent/calendar"
import { DownSVG } from "./svgComponent/down"
import { RArrowSVG } from "./svgComponent/rArrow"
import { LArrowSVG } from "./svgComponent/lArrow"
import { LiveSVG } from "./svgComponent/live"

//widgets

import {ScheduleSVG} from "./svgComponent/schedule"
import {JoinSVG} from "./svgComponent/join"
import {RecordSVG} from "./svgComponent/recording"
import {AnalyticSVG} from "./svgComponent/analytics"

import { LogoSVG } from "./logo"

export function MainContent({openSide, setOpenSide}) {

    if(openSide) {
    return <div className="flex flex-col animate-inOut flex-1">
        <TopRow></TopRow>
        <MainRow />
    </div>
    }
    return <div className="flex flex-col flex-1">
        <TopRow></TopRow>
        <MainRow />
    </div>
    
}

function TopRow() {
    return <div className="w-full sm:h-[25vh] sm:bg-light bg-no-repeat bg-[cover] bg-[20%_40%] sm:px-[100px] px-[16px] h-16 relative sm:block flex justify-between items-center">
        <p className="sm:hidden block"><LogoSVG/></p>
        <p className="cursor-pointer text-[48px] md:relative  md:left-[90%] md:top-[70%] sm:absolute sm:bottom-0 sm:left-[100px] relative" onClick={function (e){
            document.documentElement.classList.toggle("dark");
            if(e.target.innerHTML == "☀️") {
                e.target.innerHTML = "🌙"
            }
            else {
                e.target.innerHTML = "☀️"
            }
        }}>☀️</p> {/*conditionally rendering it here*/}
        <p className="sm:hidden block"><img className="h-[30px] w-[30px]" src={PFPlight} alt="pfp" /></p>
    </div>
}
function MainRow() {

    return <div className="w-full  md:px-[100px] sm:px-[50px] px-[16px] py-2 flex relative flex-1">
        <ProfileCard />
        <ContentSection />
    </div>
}

function ProfileCard() {
    return <div className="bg-white dark:bg-dull-dark-300 md:h-72 h-52 md:w-56 w-44  rounded-sm shadow-md  p-4 text-center md:relative md:bottom-10 absolute right-[50px] top-[-20%] sm:block hidden">
        <img src={PFPlight} alt="pfp" className="h-[120px] w-[120px] m-auto rounded-sm mb-4" />
        <h4 className="font-[500] m-2 text-lg">Atomic Zeone</h4>
        <p className="font-[200] m-0 md:block hidden">dandadan@otaku.jp</p>
        <p className="font-[200] m-0 md:block hidden">okarun</p>
    </div>
}
function ContentSection() {
    return <div className="flex-1 md:pl-8 px-0 flex flex-col gap-6 overflow-y-scroll">
        <GreetingRow />
        <DataRow />
    </div>
}

function GreetingRow() {
    return <div>
        <p className="font-[250] mb-1">Sun Nov 17, 2024</p>
        <h2 className="text-4xl font-medium text-accent-light dark:text-accent-dark">Good Morning, Okarun! 👋</h2>
    </div>
}
function DataRow() {
    return <div className="flex md:gap-10 gap-2 justify-between mt-2 sm:flex-row flex-col mb-4 ">
        <SchedulCol />
        <WidgetCol />
    </div>
}
function SchedulCol() {
    return <div className="md:h-auto md:w-[61%] sm:w-[76%] w-[100%] sm:max-h-96 md:max-h-100 sm:overflow-scroll overflow-x-hidden md:mb-0 p-4 bg-white rounded-sm shadow-md dark:bg-secondary-dark">
        <TableHeading />
        <TableItems live={true} fTime={"12:30 AM"} sTime={"11:45 AM"} Title={"Visting cursed Tunnel"}></TableItems>
        <TableItems live={false} fTime={"12:30 PM"} sTime={"11:45 AM"} Title={"Seeking Momo's granny help"}></TableItems>
        <TableItems live={false} fTime={"10:30 PM"} sTime={"11:45 AM"} Title={"Fighting Turbo Granny"}></TableItems>
        <TableItems live={false} fTime={"11:30 AM"} sTime={"11:45 AM"} Title={"Finding Family's jewels"}></TableItems>
        <TableItems live={false} fTime={"12:30 PM"} sTime={"11:45 AM"} Title={"DanDaDan"}></TableItems>
    </div>
}

function TableHeading() {
    return <div className="p-2 bg-dull-light-100 dark:bg-dull-dark-300 flex justify-between rounded-sm mb-5">
        <div className="flex gap-2">
            <CalendarSVG />
            <p >Sun Nov 17, 2024</p>
            <DownSVG />
        </div>
        <div className="flex gap-1">
            <LArrowSVG />
            <RArrowSVG />
        </div>
    </div>
}
function TableItems({ fTime, sTime, live, Title }) {
    return <div className="py-3 px-1 border-b-2 flex">
        <div className="border-r-2 border-accent-dark w-[110px] min-w-[100px]">
            <p className="text-2xl">{fTime}</p>
            <p>{sTime}</p>
        </div>
        <div className="flex mx-4 flex-col ">
            <div className="flex justify-start items-start gap-2">
                <p>{live ? "Live" : "Upcoming"} </p>
                <span className={` ${live ? "text-red-700" : "text-blue-500"} self-center`}>
                    <LiveSVG />
                </span>
            </div>
            <h3 className="font-medium text-2xl">{Title}</h3>
        </div>
    </div>
}
function WidgetCol() {
    return <div className="grid grid-cols-2 md:h-auto max-w-[270px] md:w-[35%] sm:w-[20%] w-[100%] m-auto sm:max-h-96 overflow-scroll  p-6 bg-white dark:bg-secondary-dark rounded-sm shadow-md self-start gap-4 gap-y-6">
        <div className="text-center md:col-span-1 sm:col-span-2 col-span-1">
            <Widget><ScheduleSVG/></Widget>
            <p>Schedule a webinar</p>
        </div>
        <div className="text-center md:col-span-1 sm:col-span-2 col-span-1">
            <Widget><JoinSVG/></Widget>
            <p>Join a meeting</p>
        </div>
        <div className="text-center md:col-span-1 sm:col-span-2 col-span-1">
            <Widget><RecordSVG/></Widget>
            <p>Recording</p>
        </div>
        <div className="text-center md:col-span-1 sm:col-span-2 col-span-1">
            <Widget><AnalyticSVG/></Widget>
            <p>Analytics</p>
        </div>
    </div>
}
function Widget({children}) {
    return <div className="bg-accent-dark dark:bg-accent-light dark:text-accent-dark text-accent-light size-12 rounded-sm flex items-center justify-center m-auto">
        {children}
    </div>
}



