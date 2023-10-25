import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';



export default function Homepage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  const iconHoverTap = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
    tap: { scale: 0.9 }
  };
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 0,
      duration: 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 3, 
        ease: "easeInOut", 
      }
    }
  };
  return (

    <StyledDiv>
      {isMobile ? (
        <StyledImgElement src="/video.gif" alt="Your content" />
      ) : (
        <StyledVideoElement autoPlay loop muted playsInline>
          <source src="/Video.mp4" type="video/mp4" />
        </StyledVideoElement>
      )}
      <StyledLocationDiv   initial="hidden" 
      animate="visible" 
      variants={variants}  >
        <StyledHeadline>18/11-2023</StyledHeadline>
        <Link className="länk" to='https://www.google.com/maps/place/Tegelbruksv%C3%A4gen+12/@63.7935048,20.305076,17z/data=!4m7!3m6!1s0x467c5a44328cbbe7:0x5468060850284677!4b1!8m2!3d63.7935048!4d20.305076!16s%2Fg%2F11cncf1c0b?entry=ttu' target='_blank'>
          <StyledrowDiv><Styledp><Location size={12}/>Tegelbruksvägen 12<br/> Umeå</Styledp> </StyledrowDiv> 
          </Link>
      </StyledLocationDiv>

      <Link to='/biljett'>
        <StyledButton
        variants={variants}
        initial="hidden" 
         animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >KÖP BILJETT
        </StyledButton>
      </Link>
      <Styledfooter
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div variants={itemVariants}>
          <Link to="https://www.instagram.com/bakomtusendorrar/" target='blank'>
            <motion.div variants={iconHoverTap} whileHover="hover" whileTap="tap">
              <InstagramIcon size={28} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="https://open.spotify.com/artist/4aasdaIuS8kGfeGxDlC52i" target='blank'>
            <motion.div variants={iconHoverTap} whileHover="hover" whileTap="tap">
              <SpotifyIcon size={28} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="https://www.facebook.com/events/1374576573129379/?mibextid=OosqiT" target='blank'>
            <motion.div variants={iconHoverTap} whileHover="hover" whileTap="tap">
              <FacebookIcon size={28} />
            </motion.div>
          </Link>
        </motion.div>
      </Styledfooter>


    </StyledDiv>

  )
}
const StyledDiv = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: black;
padding-top: 5vh;
@media (max-width: 768px) {
  padding-top: 0px;
  justify-content: flex-end;
  height: 100vh;
  
  }

`;
const StyledImgElement = styled.img`
width: 100%;
height: 90vh;
border: 1px solid black;
background-color: black;
object-fit: contain;
margin-bottom: 50px;
@media (max-width: 768px) {
  padding-top: 60px;
  width: 75%;
  height: 50vh;
  margin-bottom: 5vh;
  
  }

`;
const StyledVideoElement = styled.video`
width: 100%;
height: 90vh;
border: 1px solid black;
background-color: black;
object-fit: contain;
margin-bottom: 50px;
@media (max-width: 768px) {
  padding-top: 60px;
  width: 75%;
  height: 50vh;
  margin-bottom: 5vh;
  
  }

`;
const StyledLocationDiv = styled(motion.div)`
display: flex;
opacity: 0.97;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
font-family: 'Roboto';
font-weight: bold;
.länk{
  text-decoration: none;
}
@media (max-width: 768px) {
  gap: 10px;
  
  }
`;
const StyledrowDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;

gap: 2px;
@media (max-width: 768px) {
  
  
  }
`;
const Styledp = styled.p`
color: lightgray;
font-size: 14px;
text-align: center;
letter-spacing: 2.5px;
line-height: 2;
@media (max-width: 768px) {

  font-size: 12px;
  }

`;
const StyledHeadline = styled.p`

color: lightgray;
letter-spacing: 4px;
font-size: 30px;

font-family: saturdayNight;
@media (max-width: 768px) {
  margin-top: 30px;
 font-size: 15px;
  
  }

`;

const StyledButton = styled(motion.button)`
margin-top: 5vh;
font-family: 'Roboto';
letter-spacing: 2.5px;
width: 150px;
height: 50px;
font-size: 12px;
border: none;
background-color: white;
color: black;
border-radius: 30px;
font-weight: bold;
padding: 10px;
@media (max-width: 768px) {
  width: 120px;
  height: 40px;
  border-radius: 18px;
  font-size: 10px;
  
  }


&:hover{

background-color: #50C878 ;
color: white;
box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);


}
`
const Styledfooter = styled.footer`
width: 100%;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
@media (max-width: 768px) {
  height: 120px;
  
  }

`;
const Location = styled(FaLocationDot)`

color: white;
margin-bottom: -0.5px;
margin-right: 5px;
`
const InstagramIcon = styled(AiFillInstagram)`
color: white;
transition: 0.5s;

&:hover {
  color: #E1306C; /* Instagram color */
  cursor: pointer;
}
`;

const SpotifyIcon = styled(BsSpotify)`
color: white;
transition: 0.5s;

&:hover {
  color: #1DB954; /* Spotify color */
  cursor: pointer;
}
`;

const FacebookIcon = styled(AiFillFacebook)`
color: white;
transition: 0.5s;

&:hover {
  color: #4267B2; /* Facebook color */
  cursor: pointer;
}
`;