function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    //重複したイベント発火を回避
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      //XHR.responseでレスポンスされてきたJSONにアクセス
      XHR.onload = () => {
        //レスポンスがエラーだった場合の処理を記述
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
//check関数が1秒に1度実行される
setInterval(check, 1000);

// /* checkという名前で関数を定義*/
// function check() {
//   /* クリックされる部分の要素を取得するため*/
//   const posts = document.querySelectorAll(".post");
//   /* それぞれの要素への処理を記述する場所を用意*/
//   posts.forEach(function (post) { });
//   /* 処理としてaddEventListenerメソッドを使用し、引数にclickの指定*/
//   post.addEventListener("click", () => { });
// /* data-idの値を取得*/
// const postId = post.getAttribute("data-id");
// /* HTTPリクエストを行います。*/
// const XHR = new XMLHttpRequest();
// /* openメソッドを使用してリクエストの詳細を指定*/
// XHR.open("GET", `/posts/${postId}`, true);
// /* レスポンスの形式を指定*/
// XHR.responseType = "json";
// /* リクエストを送信*/
// XHR.send();
//     }
// window.addEventListener("load", check);