function fadeIn(elementId)
{
  document.getElementById(elementId).style.opacity = 1;
}

function fadeOut(elementId)
{
  document.getElementById(elementId).style.opacity = 0;
}

function changeOverview(id)
{
  document.getElementById("content-0").style.opacity = 0.4;
  document.getElementById("content-1").style.opacity = 0.4;
  document.getElementById("content-2").style.opacity = 0.4;
  document.getElementById("content-" + id).style.opacity = 1;
}