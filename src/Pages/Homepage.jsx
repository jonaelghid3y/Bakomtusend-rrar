import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
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
  return (

    <StyledDiv>
      {isMobile ? (
        <StyledImgElement src="/video.gif" alt="Your content" />
      ) : (
        <StyledVideoElement autoPlay loop muted playsInline>
          <source src="/Video.mp4" type="video/mp4" />
        </StyledVideoElement>
      )}

      <Link to='/biljett'>
        <StyledButton
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
              <InstagramIcon size={30} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="https://open.spotify.com/artist/4aasdaIuS8kGfeGxDlC52i" target='blank'>
            <motion.div variants={iconHoverTap} whileHover="hover" whileTap="tap">
              <SpotifyIcon size={30} />
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="https://www.facebook.com/" target='blank'>
            <motion.div variants={iconHoverTap} whileHover="hover" whileTap="tap">
              <FacebookIcon size={30} />
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
padding-top: 10vh;
@media (max-width: 768px) {
  padding-top: 20px;
  justify-content: flex-start;
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
// const StyledImages = styled.div`

// width: 100%;
// height: 60vh;
// display: flex;
// align-items: flex-end;
// justify-content: center;
// gap: 13vw;
// margin-top: 150px;
// margin-bottom: 100px;

// @media (max-width: 768px) {
// flex-direction: column;
// align-items: center;
// margin-bottom: 200px;

// }


// `;
// const StyledImage1 = styled.img`

// width: 200px;
// height: 380px;
// `;
// const StyledImage2 = styled.img`

// width: 150px;
// height: 150px;

// @media (max-width: 768px) {
// display: none;

// }

// `;
// const StyledImage3 = styled.img`

// width: 200px;
// height: 300px;

// `;
const StyledButton = styled(motion.button)`
margin-top: 15vh;
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
@media (max-width: 768px) {
  width: 125px;
  height: 40px;
  
  }


&:hover{

background-color: #50C878 ;
color: white;
box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);


}
`
const Styledfooter = styled.footer`
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
@media (max-width: 768px) {
  height: 170px;
  
  }

`;
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