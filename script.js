document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let currentIndex = 0;
  let isScrolling = false;

  function canScrollToNext() {
    const current = sections[currentIndex];
    return current.scrollHeight <= window.innerHeight;
  }
  
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length && !isScrolling) {
      isScrolling = true;
      currentIndex =  index; // 네비 이동 시 인덱스 갱신
      sections[index].scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        isScrolling = false;
      }, 300);
    }
  }
 
  window.addEventListener("wheel", function (event) {
    if (isScrolling) return;
    
    if (canUseFullpageScroll()) {
      if (event.deltaY > 30) {
        scrollToSection(currentIndex + 1);
      } else if (event.deltaY < -30) {
        scrollToSection(currentIndex - 1);
      }
    }
  });
  
  document.querySelectorAll("nav a").forEach((navLink, idx) => {
    navLink. addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSection(idx);
    });
  });
  // 기본 상세 보기
  showDetails('flag')
});

// 포트폴리오 상세 보기 기능
function showDetails(id) {
  document.querySelectorAll('.portfolio-details').forEach(view => {
    view.style.display = 'none';
    view.style.opacity = 0;
  });
  
  const target = document.getElementById(id);
  target.style.display = 'block';
  setTimeout(() => {
    target.style.opacity = 1;
  }, 50);
}
