(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ico = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const slug = new URLSearchParams(location.search).get('c');
  const c = (window.COURSES || []).find(x => x.slug === slug);
  if (!c) { location.replace('index.html#treinamentos'); return; }

  const initials = n => n.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const img = n => `assets/cursos/${n}.jpg`;
  const bg = c.images[0] ? img(c.images[0]) : 'assets/treino-1.jpg';
  const dateTxt = c.date === 'a definir' ? 'Data a definir' : c.date;

  document.title = `${c.pageTitle || c.title} – Rockstar`;
  $('meta[name=description]').content = c.desc;

  const info = [
    ['cal', 'Data', c.dateDetail || dateTxt],
    ['clock', 'Carga horária', c.hours],
    c.loc ? ['pin', 'Local', c.loc] : null,
    ['user', 'Formato', c.format],
    ['user', 'Instrutor', c.instructor.name]
  ].filter(Boolean);

  const badges = [c.plan, 'Mão na massa'].filter(Boolean);
  const modCount = c.groups.reduce((n, g) => n + g.modules.length, 0);
  let k = 0;

  $('#course').innerHTML = `
  <section class="chero">
    <div class="hero-bg" aria-hidden="true"><img src="${bg}" alt="" fetchpriority="high"></div>
    <div class="wrap">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Início</a><i>/</i><a href="index.html#treinamentos">Próximos Treinamentos</a><i>/</i><span>${esc(c.pageTitle || c.title)}</span></nav>
      <div class="badges"><span>${esc(c.cat)}</span>${badges.map(b => `<span class="plan">${esc(b)}</span>`).join('')}</div>
      <h1>${esc(c.title)}</h1>
      <p class="lead">${esc(c.desc)}</p>
      <ul class="cinfo">${info.map(([i, l, v]) => `<li>${ico(i)}<span><small>${l}</small><b>${esc(v)}</b></span></li>`).join('')}</ul>
      <div class="hero-cta">
        <a class="btn" href="${c.reg}" target="_blank" rel="noopener">Inscrever-se ${ico('arrow')}</a>
        <a class="btn btn-ghost" href="${c.wa}" target="_blank" rel="noopener">${ico('wa')} Tirar dúvidas no WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="sec cbody">
    <div class="wrap cgrid">
      <div class="cmain">
        <h2 class="reveal">Conteúdo programático</h2>
        <p class="muted reveal">${modCount} módulos com atividades práticas · ${esc(c.hours)}</p>${c.note ? `<p class="muted reveal">${esc(c.note)}</p>` : ''}
        ${c.groups.map(g => `
          ${g.name ? `<h3 class="lvl reveal">${esc(g.name)}</h3>` : ''}
          <div class="mods">${g.modules.map(m => { k++; return `
            <details class="mod reveal" ${k === 1 ? 'open' : ''}>
              <summary><b>${String(k).padStart(2, '0')}</b><span>${esc(m.t)}</span></summary>
              <ul class="ticks">${m.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
            </details>`; }).join('')}</div>`).join('')}

        <div class="deliver reveal">
          <div><svg class="ic-lg"><use href="#i-check"/></svg><b>Metodologia</b><p>${esc(c.method)}</p></div>
          <div><svg class="ic-lg"><use href="#i-download"/></svg><b>Você recebe</b><p>Certificado e material digital</p></div>
        </div>

        ${c.images.length ? `<div class="cgal reveal">${c.images.map(n => `<figure><img src="${img(n)}" alt="${esc(c.title)}" loading="lazy"></figure>`).join('')}</div>` : ''}
      </div>

      <aside class="caside">
        <div class="card sticky reveal">
          <h3>Reserve sua vaga</h3>
          <p>${c.date === 'a definir' ? 'Inscreva-se para ser avisado primeiro quando a turma abrir.' : 'Depois da inscrição, um consultor entra em contato.'}</p>
          <a class="btn" href="${c.reg}" target="_blank" rel="noopener">Inscrever-se ${ico('arrow')}</a>
          <a class="btn btn-ghost" href="${c.wa}" target="_blank" rel="noopener">Tirar dúvidas no WhatsApp</a>
          <a class="btn btn-ghost" href="${c.waCompany}" target="_blank" rel="noopener">Treinamento para minha empresa</a>
          <a class="more-link" href="index.html#treinamentos">Ver outras turmas ${ico('arrow')}</a>
        </div>
        <div class="card inst reveal">
          <span class="tag">Instrutor</span>
          <div class="who">
            <span class="av big" data-i="${initials(c.instructor.name)}"><img src="${c.instructor.photo}" alt="${esc(c.instructor.name)}" onerror="this.parentNode.textContent=this.parentNode.dataset.i"></span>
            <span><b>${esc(c.instructor.name)}</b><small>${esc(c.instructor.role)}</small></span>
          </div>
          ${c.instructor.bio ? `<p>${esc(c.instructor.bio)}</p>` : ''}
        </div>
      </aside>
    </div>
  </section>

  <section class="sec alt">
    <div class="wrap">
      <header class="sec-head reveal"><h2>Outros treinamentos</h2><p>Confira também as demais turmas e capacitações da Rockstar.</p></header>
      <div class="courses">${COURSES.filter(o => o.slug !== c.slug).slice(0, 3).map(o => `
        <a class="card course spot reveal" href="curso.html?c=${o.slug}">
          <div class="badges">${(o.formats || []).map(f => `<span>${f}</span>`).join('')}${o.plan ? `<span class="plan">${o.plan}</span>` : ''}</div>
          <h3>${esc(o.title)}</h3>
          <ul class="meta"><li>${ico('cal')}${o.date === 'a definir' ? 'Data a definir' : esc(o.date)}</li><li>${ico('clock')}${esc(o.hours)}</li><li>${ico('user')}${esc(o.instructor.name)}</li></ul>
          <span class="more">Ver detalhes ${ico('arrow')}</span>
        </a>`).join('')}</div>
    </div>
  </section>`;

  /* ---- comportamento comum ---- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
  $$('.reveal').forEach((el, i) => { el.style.setProperty('--d', (i % 4) * .06 + 's'); io.observe(el); });
  const nav = $('#nav'), bar = $('#progress');
  const onScroll = () => { nav.classList.add('scrolled'); bar.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%'; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const menu = $('#menu'), burger = $('#burger');
  burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
  menu.addEventListener('click', e => e.target.closest('a') && menu.classList.remove('open'));
  document.addEventListener('pointermove', e => {
    const s = e.target.closest?.('.spot');
    if (s) { const r = s.getBoundingClientRect(); s.style.setProperty('--mx', e.clientX - r.left + 'px'); s.style.setProperty('--my', e.clientY - r.top + 'px'); }
  }, { passive: true });
  $('#year').textContent = new Date().getFullYear();
})();
