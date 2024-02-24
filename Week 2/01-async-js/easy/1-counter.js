function updateCounter()
{
    let i = 0;
    setInterval(function()
    {
        console.log(i);
        i += 1;
    },1000);
}

updateCounter();