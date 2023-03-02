import { makeStyles } from '@mui/styles';
// import { keyframes } from '@emotion/react';

const useStyle = makeStyles((theme) => ({
    colorTheme: {
        backgroundColor: '#1c1c1c'
    },
    focusSong: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 20px',
        color: '#fff',
        '& > h5': {
            fontWeight: 600
        },
        '& > h6': {
            fontSize: '19px',
            color: '#b3b3b3'
        },
    },
    musicList: {
        display: 'flex',
        justifyContent: 'space-evenly',
        '& > div': {
            minWidth: '23%'
        }
    },
    card: {
        position: 'relative',
        padding: '20px',
        '& img': {
            width: '160px',
            height: '160px',
            objectFit: 'fill'
        },
        '& h2': {
            color: '#fff',
            fontWeight: 600,
            fontSize: '17px',
            padding: '8px 0px',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
        },
        '& h3': {
            color: '#b3b3b3',
            fontSize: '17px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            lineHeight: '24px'
        }
    },
    playIconMainBox: {
        position: 'absolute',
        right: '30px',
        bottom: '115px',
        animation: `$myEffect 3000ms ease`,
    },
    playIcon: {
        color: '#000',
        backgroundColor: 'rgb(122, 217, 99)',
        borderRadius: '50%'
    },
    "@keyframes myEffect": {
        "0%": {
          opacity: 0,
          transform: "translateY(-200%)"
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)"
        }
    },
}))

export default useStyle;