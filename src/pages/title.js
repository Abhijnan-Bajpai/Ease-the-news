import React from 'react';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

export default function SimpleSlide() {
    return(
        <Slide direction="up" in={true} timeout={{enter: 1500}} mountOnEnter unmountOnExit>
          <div style={{textAlign: "center", fontSize: "8vw", fontFamily: "Rozha One, serif", color: "white"}}>
              Business
          </div>
        </Slide>
    );
}