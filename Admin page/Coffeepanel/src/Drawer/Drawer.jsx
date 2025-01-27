
import React from 'react';
import { styled, extendTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PageRoutes from '../Pages/PageRoutes';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon  from '@mui/icons-material/RestaurantMenu';
import MoreVertIcon   from '@mui/icons-material/RestaurantMenu';
import CoffeeIcon   from '@mui/icons-material/RestaurantMenu';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ChairIcon from '@mui/icons-material/Chair';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
// Define the theme
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function Drawer() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const NAVIGATION = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'personnel',
      title: 'Personnel',
      icon: <AccountCircleIcon/>,
      children :[

        {
          segment: 'addpersonnel',
          title: 'Create Personnel',
          icon: <PersonAddIcon />,
        },
        {
          segment: 'managepersonnel',
          title: 'Manage Personnel',
          icon: <ManageAccountsIcon />,
        },
        {
          segment: 'Personnelcard',
          title: 'Personnel Card',
          icon: <PersonIcon />,

         
        },
      ]
      
     
    },
    {
      segment: 'menu',
      title: 'Menu',
      icon: <ImportContactsIcon />,
      children :[
        {
          segment: 'addmenu',
          title: 'Add Menu',
          icon: <NoteAddIcon />,
        },
        {
          segment: 'managemenu',
          title: 'Manage Menu',
          icon: <MenuIcon />,

         
        },
        {
          segment: 'menuitems',
          title: 'MenuShow',
          icon: <FoodBankIcon  />,
        },
    
    
      ]
    },
    {
      segment: 'booking',
      title: 'Booking',
      icon: <ChairIcon />,
      children :[
        {
          segment: 'bookingshow',
          title: 'Booking Show',
          icon: <BookOnlineIcon />,
        },
       
        {
          segment: 'bookinguser',
          title: 'Booking User',
          icon: <BookOnlineIcon />,
        },
    
      ]
    },
  ];

  const router = React.useMemo(() => ({
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path),
  }), [location, navigate]);

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
     
    >
      <DashboardLayout>
        
          <PageRoutes />
          <Grid container spacing={1}>
            <Grid xs={5} />
            <Grid xs={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid xs={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid xs={8}>
              <Skeleton height={100} />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid xs={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid xs={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid xs={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid xs={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid xs={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
      </DashboardLayout>
    </AppProvider>
  );
}

export default Drawer;