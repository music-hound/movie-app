/* eslint-disable react/prop-types */
import { Box, Grid2, Typography } from "@mui/material";

export default function Detail({ title, children}){
    return (
        <Grid2
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        >
            <Typography
            sx={{
                fontSize:'13px'
            }}>
                {title}
            </Typography>

            <Box
            sx={{
                fontSize:'13px',
                width:'70%',
                display:'flex',
                justifyContent:'flex-end',
                textAlign:'right',
            }}>
                {children}
            </Box>
        </Grid2>
    )
}