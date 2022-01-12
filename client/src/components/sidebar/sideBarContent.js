import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ShareIcon from '@mui/icons-material/Share';
import PushPinIcon from '@mui/icons-material/PushPin';

export const sideBarContents = [
    {
        id: 1,
        title: 'Today',
        path: '/',
        icon: <EventAvailableIcon  sx={{ fontSize: 30}}/>
    },
    {
        id: 2,
        title: 'Categories',
        path: '/categories',
        icon: <AutoAwesomeMotionIcon sx={{ fontSize: 30 }}/>
    },
    {
        id: 3,
        title: 'Pinned',
        path: '/pinned',
        icon: <PushPinIcon sx={{ fontSize: 30 }}/>
    },
    {
        id: 4,
        title: 'Shared',
        path: '/shared',
        icon: <ShareIcon sx={{ fontSize: 30 }}/>
    },
];