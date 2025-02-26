/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const WatchButton = ( { label, title } )=>{
    
    return (
        <Button
            fullWidth
            variant="contained"
            href={`https://6ww.kpfr.club/searchname.php?name=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                height:'40px',
                display:'flex',
                gap:'20px',
            }}
        >
            <LiveTvIcon sx={{width:'25px',}}/>

            <Typography
            variant="span"
            sx={{
                fontWeight:'bold',
                textTransform: 'none',
            }}
            >
                {label}
            </Typography>
        </Button>
    )
}

export default WatchButton;