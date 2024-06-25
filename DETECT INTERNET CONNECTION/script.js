const wrapper = document.querySelector(".wrapper"),
  toast = document.querySelector(".toast"),
  subTitle = document.querySelector("p"),
  title = document.querySelector("span"),
  wifiIcon = document.querySelector(".icon"),
  closeIcon = document.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Hurray! Internet is Connected";
        wifiIcon.innerHTML = `<i class='bx bx-wifi'></i>`;
        closeIcon.onclick = () => {
          wrapper.classList.add("hide");
        };
        setTimeout(() => {
          wrapper.classList.add("hide");
        }, 5000);
      } else {
        offline();
      }
    }
    xhr.onerror = () => {
        offline();
    }
    xhr.send();
  }
  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Internet is disconnected";
    wifiIcon.innerHTML = `<i class='bx bx-wifi-off'></i>`;
  }
  setInterval(() => {
    ajax();
  }, 100);
}