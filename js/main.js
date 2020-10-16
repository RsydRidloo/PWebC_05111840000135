{
    const display27610 = document.getElementById("clock");
    
    // conver number num to string, pad 0 in front to make it 2 digits
    const padNum = ((num) => num.toString(). padStart (2 , "0"));
    
    const updateDisplay = (() => {
        const dd = new Date();
        const hh = dd.getHours();
        const mm = dd.getMinutes();
        const ss = dd.getSeconds();
        display27610.textContent = `${padNum(hh)}:${padNum(mm)}:${padNum(ss)}`;
    });
    
    setInterval(updateDisplay, 1000);
    }