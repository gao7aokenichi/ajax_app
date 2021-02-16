function memo() {
  /* 「投稿する」ボタンの情報を取得*/
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    /*FormDataとは、フォームに入力された値を取得できるオブジェクト*/
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    /*openメソッドを使用して、リクエストの内容を引数へ追記*/
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    /*「HTMLのメモ部分」*/
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      /*メモとして描画する部分のHTML*/
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    /*（Default）イベントを阻止する（prevent）メソッド*/
    e.preventDefault();
  });
}
window.addEventListener("load", memo);