// HideAndShow Мобильного бара
function TopBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// HideAndShow модального окна
function modalDiv() 
{
  var modal = document.getElementById("modalButton");
  if (modal.style.display === "block")
  {
    modal.style.display = "none";
  } else 
  {
    modal.style.display = "block";
  }
}