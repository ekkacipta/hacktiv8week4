var i = 0;

    function k(myId, cb)
    {
        setTimeout(function ()
        {
            console.log(myId);
            cb();
        }, 10);
    }

    function go()
    {
        i++;
        k(i, go);
    }

    go();