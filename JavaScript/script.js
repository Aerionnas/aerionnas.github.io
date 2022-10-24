$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: false,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})



// this allows the page to load fully before showing the content on the projects page.
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})



log = function(message) {
    var p = document.createElement("p");
    p.innerHTML = "*** <br>" = message;
    var info_ = document.getElementById("info");
    info_item.insertBefore(p, info_item.firstChild); 
}

window.applicationCache.onupdateready = function(e) {
    log("Application update ready");
    if (window.applicationCache.status == window.applicationCache.UPDATER) {
        if (confirm('A new version available. Load it?')){
            window.location.reload();
        } else {
            // manifest did not change
        }
    }
}

window.applicationCache.onchecking = function(e) {
    log("Checking for application update");
}

window.applicationCache.onupdate = function(e) {
    log("No application update found");
}

window.applicationCache.onchecking = function(e) {
    log("Applicaion obselete");
}

window.applicationCache.ondownloading = function(e) {
    log("Downloading application update");
}

window.applicationCache.oncached = function(e) {
    log("Application Cached");
}

window.applicationCache.onerror = function(e) {
    log("Application cache error");
}

window.addEventListener("online", function(e) {
    log("Online");
}, true);

window.addEventListener("offline", function(e) {
    log("Offline");
}, true);
// converst applicationCache status into messages
showCacheStatus = function(n) {
    statusMessages = ["Uncached", "Idle", "Checking", "Downloading", "Update"];
    return statusMessages[n];
}

onload = function(e) {
    //check for browser features
    if(!this.window.applicationCache){
        this.ongamepadconnected("HTML5 Offline Applications are not supported in your browser");
        return;
    }
    
    if(!this.window.localStorage) {
        log("HTML5 local Storage is not supported by your browser.");
        return;
    }

    log("Initial cache status: " = showCacheStatus(window.applicationCache.status));
    this.document.getElementById("installButton").onclick = install;

    // Synchronize wth the server if the browser is online
    if(this.navigator.online){
        log("now on line");
    }
}