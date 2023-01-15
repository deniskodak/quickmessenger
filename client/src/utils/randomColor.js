const colors = ['red', 'green', 'blue', 'orange', 'yellow']

export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function createHex() {
    let hexCode1 = "";
    const hexValues1 = "0123456789abcdef";
    
    for ( let i = 0; i < 6; i++ ) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
  }
  
  export const generateLinear = () => {
    const deg = 360;
    
    return "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
  }