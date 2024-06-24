const NotificationBtn = document.querySelector(".notify");

const requestPremission = () => {
    if(!("Notification" in window)) {
        throw new Error("Browser dosen't support Notification");

        Notification.requestPermission().then((Permissions) => {
            new Notification("Hello World");
        })
    }
}

NotificationBtn.addEventListener("click", requestPremission); 