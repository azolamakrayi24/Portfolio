document.addEventListener('DOMContentLoaded', () => {

  // header background on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // close the mobile menu after tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // typed hero line
  const lines = [
    "Information Technology Student",
    "Aspiring Web Developer",
    "Business Systems Enthusiast"
  ];
  const typedEl = document.getElementById('typed');
  let li = 0, ci = 0, deleting = false;
  function tick(){
    const full = lines[li];
    if(!deleting){
      ci++;
      typedEl.textContent = full.slice(0, ci);
      if(ci === full.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      typedEl.textContent = full.slice(0, ci);
      if(ci === 0){ deleting = false; li = (li+1) % lines.length; }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  if (typedEl) tick();

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el=>io.observe(el));

});