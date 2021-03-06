import { keyframes } from "styled-components";

export const displayListElement = keyframes`
from{
  transform: translateY(50%);
  opacity: 0
}
to{
  transform:translateY(0%);
  opacity:1
}
`;

export const displayImage = keyframes`
from{
  transform: translateY(30%);
  opacity:0;
}

to{
  transform: translateY(0%);
  opacity:1;
}
`;
export const displayMenuElement = keyframes`
from{
  transform: translateX(10%);
  opacity:0;
}

to{
  transform: translateX(0%),
  opacity:1;
}
`;
export const displayMenuElementRev = keyframes`
from{
  transform:scale(1);
  opacity:0;
}

to{
  transform:scale(2);
  opacity:1;
}
`;

export const moveZoom = keyframes`
0%{
  transform: translateY(150%);
}

20%{
  transform: translateX(0%) scale(1);
}

40%{ 
  transform: scale(0.4);

}
100%{
  transform: scale(50);
}
`;

export const searchInput = keyframes`
from{
  opacity: 0;
visibility:visible;

}
to{
opacity:1;
visibility:visible;

}
`;

export const movePlanet = keyframes`
from{
transform:rotate(0deg);
}
to{
transform:rotate(360deg);
}
`;

export const section2 = keyframes`
from{
transform:translateY(20px);
opacity:0;
visibility:visible;
}
to{
  transform:translateY(0);
  opacity:1;
visibility:visible;
}
`;
export const section2Comment = keyframes`
from{
transform:translateX(-50px);
opacity:0;
visibility:visible;
}
to{
  transform:translateX(0%);
  opacity:1;
visibility:visible;
}
`;

export const sectionChart = keyframes`
from{
  transform: translateX(30%);
  opacity:0;
  visibility:visible;

}

to{
  transform: translateX(0%),
  opacity:1;
  visibility:visible;

}
`;

export const section3 = keyframes`
from{
transform:translateY(-20px);
opacity:0;
visibility:visible;
}
to{
  transform:translateY(0);
  opacity:1;
visibility:visible;
}
`;

export const animatedButton = keyframes`
0%{
  padding:40px;
}
100%{
  padding:80px;
  opacity:0;
}
`;

export const sunMove = keyframes`
0%{
transform:translateY(0px);
}
50%{
transform:translateY(20px);

}

`;
export const cloudMove = keyframes`
0%,100%{
transform-origin:center;
transform:rotate(-5deg);
}
50%{
transform-origin:center;
transform:rotate(5deg);
}
`;
