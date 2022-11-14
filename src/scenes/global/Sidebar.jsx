import React ,{useState} from 'react'
import { ProSidebar, Menu , MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import { Link } from 'react-router-dom';
import {tokens} from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarToday'
import HelpOutlinedIcon from '@mui/icons-material/Help'
import BarChartOutlinedIcon from '@mui/icons-material/BarChart'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChart'
import TimelineOutlinedIcon from '@mui/icons-material/Timeline'
import MenuOutlinedIcon from '@mui/icons-material/Menu'
import MapOutlinedIcon from '@mui/icons-material/Map'



const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ isCollapsed, setIsCollapsed] = useState(false)
  const [ selected, setSelected] = useState("Dashboard"); //which item/page we are at
  
  
  return (
    <Box
    sx = {{
"& .pro-sidebar-inner":{
  background:`${colors.primary[400]} !important`
},
"& .pro-icon-wrapper":{
  backgroundColor:"transparent @important"
},
"& .pro-inner-item":{
  padding: "5px 35px 5px 20px !important"
},
"& .pro-inner-item:hover":
{
  color:" #868dfb !important"
},
"& .pro-menu-item:active":{
  color: "#6870fa !important"
},
    }}>
      <ProSidebar>
        <Menu>
{/* user section */}
{!isCollapsed && (
  <Box mb={'25px'}>
    <Box display={'flex'} justifyContent={'center'} alignItems="center">
       <img
       alt = 'profile-user'
       width = {'100px'}
       height = {'100px'}
       src = '../../assets/user.jpg'
       style = {{cursor:'pointer', borderRadius:'50%'}}
       />
       </Box>
    <Box textAlign={'center'}  >
      <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{m: '10px 0 0 0 '}} >Jellybean</Typography>
      <Typography variant='h5' color={colors.greenAccent[500]} >VIP Admin</Typography>
    </Box>
  </Box>
)}
{/* Menu items */}

        </Menu>
      </ProSidebar>

    </Box>
  )
}

export default Sidebar