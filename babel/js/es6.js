for (let i = 0; i < list.children.length; i++) {
  list.children[i].onclick = function () {
    list.children[i].style.backgroundColor = '#e0244d';
  }
}