window.onscroll = function() {nav_shrink()};
    function nav_shrink() {
        var distance = window.pageYOffset - document.getElementById("nav_content").getBoundingClientRect().top;
        console.log(distance);
        console.log("top", document.getElementById("nav_content").getBoundingClientRect().top);
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("nav_title").style.fontSize = "50px";
            document.getElementById("nav_content").style.fontSize = "24px";
            if (distance >= 300) {
                document.getElementById("nav_content").style.position = "fixed";
                document.getElementById("nav_content").style.top = "0";
                document.getElementById("nav_content").style.borderRadius = "10px";
                document.getElementById("nav_content").style.backgroundColor = "white";
                document.getElementById("nav_content").style.paddingLeft = "100px";
                document.getElementById("nav_content").style.paddingRight = "100px";
                document.getElementById("nav_content").style.paddingTop = "5px";
                document.getElementById("nav_content").style.paddingBottom = "5px";

            }
            else {
                document.getElementById("nav_content").style.position = null;
                document.getElementById("nav_content").style.top = null;
                document.getElementById("nav_content").style.background = null;
                document.getElementById("nav_content").style.borderRadius = null;
                document.getElementById("nav_content").style.backgroundColor = null;
                document.getElementById("nav_content").style.paddingLeft = null;
                document.getElementById("nav_content").style.paddingRight = null;
                document.getElementById("nav_content").style.paddingTop = null;
                document.getElementById("nav_content").style.paddingBottom = null;
            }

        }
        else {
            document.getElementById("nav_title").style.fontSize = "64px";
            document.getElementById("nav_content").style.fontSize = "21px";
        }
    }