const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  // chặn event submit form default dẫn đến refresh page
  event.preventDefault();

  // kiểm tra xem wallpaper đã có hay chưa
  let wallpaper = document.querySelector(".wallpaper");

  // nếu chưa có
  if (!wallpaper) {
    // tạo wallpaper
    wallpaper = document.createElement("img");
    wallpaper.setAttribute("class", "wallpaper");
    // gắn wallpaper vào form
    form.appendChild(wallpaper);
  }

  // đã có hoặc đã thêm vào
  const randomNum = Math.floor(Math.random() * 100); // tạo số ngẫu nhiên từ 0 đến 99
  const url = "https://picsum.photos/1920/1080?image=" + randomNum; // tạo img url

  // gắn thông tin vào wallpaper
  wallpaper.setAttribute("src", url);
  wallpaper.setAttribute("alt", "random wallpaper #" + randomNum);
}
