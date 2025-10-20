import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export const SidebarData = [
    {
        title: "Home", 
        icon: <HomeIcon />,
        link: "/plataforma"
    },
    {
        title: "Temporizador de pastilla", 
        icon: <AccessAlarmIcon/>,
        link: "/plataforma/reloj"
    },
    {
        title: "Asistente IA", 
        icon: <AutoAwesomeIcon/>,
        link: "/plataforma/chatbot"
    },
    {
        title: "Artículos",
        icon: <NewspaperIcon/>,
        link: "/plataforma/articulos"
    },
    {
        title: "Información sobre el filtro",
        icon: <InfoOutlineIcon/>,
        link: "/plataforma/info"
    }
]