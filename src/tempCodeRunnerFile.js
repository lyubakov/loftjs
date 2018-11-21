function once(target, fn) {
  console.log(isDone);
  var isDone = false;
  console.log(isDone);
  if (!isDone) {
    target.addEventListener('click', fn);
    isDone = true;
  }
  return isDone;
}
once(document.querySelector('button'), () => console.log('обработчик выполнился!'));