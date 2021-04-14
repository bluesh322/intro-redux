const h1 = document.querySelector("h1");
const madBtn = document.querySelector("#mad");
const happyBtn = document.querySelector("#happy");
const clapBtn = document.querySelector("#clap");
const embarrassedBtn = document.querySelector("#embarrassed");
const cuteBtn = document.querySelector("#cute");

mad.addEventListener("click", function (e) {
  store.dispatch({ type: "MAD" });
  const state = store.getState();
  h1.innerText = state.face;
});

happyBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  h1.innerText = state.face;
});

clapBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "CLAP" });
  const state = store.getState();
  h1.innerText = state.face;
});

embarrassedBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "EMBARRASSED" });
  const state = store.getState();
  h1.innerText = state.face;
});

cuteBtn.addEventListener("click", function (e) {
    store.dispatch({ type: "CUTE"});
    const state = store.getState();
    h1.innerText = state.face;
  });
