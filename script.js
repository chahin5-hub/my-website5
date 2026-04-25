function filterProjects(type){
  let p=document.querySelectorAll(".project");

  p.forEach(el=>{
    if(type==="all" || el.classList.contains(type)){
      el.style.display="block";
    }else{
      el.style.display="none";
    }
  });
}
