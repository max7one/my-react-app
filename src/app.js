var app = document.getElementById('app');
app.innerHTML = "hello world";

//热更新
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    console.info("hot update success");
  });
}
