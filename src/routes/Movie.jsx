import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Box, CardMedia, Grid2, Paper, Typography } from "@mui/material";
import Detail from "../components/Detail";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { description, rate_counts } from "../components/lang";
import WatchButton from "../components/WatchButton";

export default function Movie(){

    const lang = useSelector(state => state.switchLang)
    
    const [details, setDetails] = useState('');
    const [credits, setCredits] = useState('');
    const movie = useParams();
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    useEffect(() => {

        const url = `https://api.themoviedb.org/3/movie/${movie.movieId}?language=${lang}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `${cookies.token}`,
          }
        };

        fetch(url, options)
          .then(res => res.json())
          .then(json => {
            setDetails(json)
        })
          .catch(err => console.error(err));
        
    }, [movie.movieId, lang, cookies.token]);

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/movie/${movie.movieId}/credits?language=${lang}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `${cookies.token}`,
          }
        };

        fetch(url, options)
          .then(res => res.json())
          .then(json => {
            setCredits(json)
        })
          .catch(err => console.error(err));
        
    }, [movie.movieId, lang,cookies.token]);


    return details && (
        <Box
        sx={{
            boxSizing: 'border-box',
            padding: '20px',
            width:'100%',
            maxWidth:'720px',
            display:'flex',
            flexDirection:'column',
            gap:'20px',
        }}
        >
            <Box
        sx={{
            width:'100%',
            display:'flex',
            gap:'20px'
        }}>
            <WatchButton label={'local'} title={details.title} />
            <WatchButton label={'original'} title={details.original_title} />

        </Box>
        
        <Grid2
        container
        alignItems='center'
        justifyContent='space-between'
        >
            <Grid2>

                <Typography
                sx={{
                    fontSize:'30px',
                    fontWeight:'800',
                }}>
                    {`${details.title} (${(new Date(details.release_date)).getFullYear()})`}
                </Typography>

                <Typography>
                    {details.original_title}
                </Typography>

            </Grid2>

            <Grid2>

                <Typography
                sx={{
                    fontWeight:'800',
                    fontSize:'30px',
                    margin:'0px',
                    textAlign:'right',
                }}>
                    {Math.round(details.vote_average*10)/10}
                </Typography>

                <Typography>
                    {String(details.vote_count)} {rate_counts(lang)}
                </Typography>

            </Grid2>
            
        </Grid2>


                <Box
                sx={{
                    display:'flex',
                    gap:'20px',
                }}>


                <Paper
                sx={{
                    width:'50%',
                    overflow:'hidden',
                }}>
                    <CardMedia
                    component="img"
                    sx={{
                    }}
                    image={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
                    alt={details.title} />
                </Paper>

                <Box>

                    <Typography
                    sx={{
                        fontSize:'16px',
                        fontWeight:'800',
                        mb:2
                    }}>
                        В главных ролях
                    </Typography>

                    {
                    credits.cast && credits.cast.map(
                        (i, index)=>( (index<10) &&
                        <Typography sx={{fontSize:'13px'}} key={i.id}>{i.name}</Typography>
                    ))
                    }

                </Box>

                </Box>

                <Typography
                    sx={{
                        fontSize:'16px',
                        fontWeight:'800',
                    }}>
                        {description(lang)}:
                </Typography>

                <Typography sx={{fontSize:'13px'}}>
                    {details.overview}
                </Typography>

            <Box>
                

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'10px'
                }}>
                    

                    <Detail title={'Страна'}>{details && details.production_countries.map((i)=>(<div key={i.name}>{i.name}</div>))}</Detail>
                    <Detail title={'Жанр'}>{details && details.genres.map((i)=>(<div style={{marginLeft:'5px'}} key={i.id}>{i.name}</div>))}</Detail>
                    <Detail title={'Слоган'}>{details.tagline}</Detail>
                    <Detail title={'Бюджет'}>{'$ ' + String(details.budget).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</Detail>
                    <Detail title={'Сборы'}>{'$ ' + String(details.revenue).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</Detail>
                    
                </Box>
                
                
            </Box>
            
        </Box>
    )
}