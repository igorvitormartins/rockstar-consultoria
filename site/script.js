(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ico = n => `<svg class="ic"><use href="#i-${n}"/></svg>`;
  const IMG = 'https://rockstarbr.com/wp-content/uploads/2026/';
  const initials = n => n.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  // avatar com fallback: se a imagem falhar, mostra iniciais
  const av = (name, src) => `<span class="av" data-i="${initials(name)}">${src ? `<img src="${IMG}${src}" alt="${name}" loading="lazy" onerror="this.parentNode.textContent=this.parentNode.dataset.i">` : initials(name)}</span>`;

  /* ---------- Dados ---------- */
  const caps = {
    'Dados e Análise': [['Excel para Análise de Dados', '16h'], ['Power BI na Prática', '16h'], ['Introdução ao Python', '16h'], ['SQL para Análise de Dados', '16h']],
    'Inteligência Artificial': [['IA Generativa na Prática', '8h'], ['N8N e Automações', '8h'], ['IA para Negócios', '8h'], ['PCM com IA', '16h']],
    'Industrial e Engenharia': [['TBO: Treinamento Básico Operacional', '8h'], ['Cronoanálise', '8h'], ['Lean Manufacturing', '8h'], ['Ferramentas da Qualidade', '16h'], ['MASP', '8h'], ['TPM', '8h'], ['Metodologia A3', '8h'], ['Gestão da Manutenção', '8h'], ['VSM: Fluxo de Valor', '16h']],
    'Segurança do Trabalho': [['Normas Regulamentadoras (geral)', '8–20h'], ['Interpretação de NRs', ''], ['NR-5: CIPA', ''], ['NR-12: Máquinas e Equipamentos', ''], ['NR-23: Brigada de Incêndio', ''], ['NR-1: Gerenciamento de Riscos', '']],
    'Marketing e Empreendedorismo': [['Marketing Digital na Prática', '16h'], ['Canva', '8h'], ['Tráfego Pago', '8h'], ['Gestão de Redes Sociais', '8h'], ['Empreendedores Amazônicos em Marketing', '']],
    'Tecnologia e Infraestrutura': [['Técnico de Redes', '16h'], ['Conscientização contra golpes cibernéticos', '8h'], ['Instalador de CFTV IP e Coaxial', '16h'], ['Montagem e manutenção de computadores', '20h']],
    'Gestão e Liderança': [['Scrum e Metodologias Ágeis', ''], ['Gestão de Projetos', ''], ['Liderança e Gestão de Equipes', ''], ['Kaizen e 5S', ''], ['Comunicação e desenvolvimento profissional', '']]
  };

  const courses = (window.COURSES || []).map(c => ({ slug: c.slug, t: c.title, f: c.formats, plan: c.plan, d: c.date, h: c.hours, l: c.loc, i: c.instructor.name, reg: c.reg }));

  const reviews = [
    ['Dimas Silva', 'Diretor Comercial', 'A questão de mão na massa é o diferencial! Parabéns!!', '2026/07/Dimas.png'],
    ['Desirée Gomes', 'Agente de Inovação', 'Equipe excelente! Curso de Scrum atende as expectativas, vale muito a pena!', '2026/07/Desiree.png'],
    ['Katianne Lima', '', 'Ótima explicação, conteúdo de excelência e a dinâmica extraordinária. Tudo perfeito 👏🏼👏🏼😀👏🏼👏🏼', '2026/07/Katiane.png'],
    ['Sileno Brito', '', 'O curso de metrologia foi excelente, proporcionando uma base sólida sobre medições, instrumentos e controle de qualidade. O conteúdo foi claro, objetivo e bem aplicado à prática.', '2026/07/selino.png'],
    ['Heloisa Vieira', '', 'O professor que dirigiu a aula é um ótimo profissional, nos ensinou bastante e teve muita dinâmica, que às vezes parecia que já estávamos trabalhando na área.', '2026/07/Heloisa.png']
  ];

  const team = {
    'Direção e Gestão': [['Eric Costa', 'Diretor e Consultor de Processos', 'Eric.png'], ['Judith Torres', 'Coordenadora Geral', 'Judith.png'], ['Marcel Pereira', 'Gerente de Operações e Negócios', 'Marcel.png'], ['Gustavo', 'Consultor do Pará', 'Gustavo.png']],
    'Comercial e Atendimento': [['Thyerry Piaget', 'Consultor de Licitações e Negócios', 'Thyerry.png'], ['Smily', 'Consultor Comercial', 'Smily.png'], ['Sophia', 'Atendimento', 'Sophia.png']],
    'Marketing e Mídias': [['Yan Mesquita', 'Coordenador de Marketing', 'Yan.png'], ['Ana', 'Mídias Sociais', 'Ana.png']],
    'Consultores · Dados e TI': [['Carlos Vollrath', 'Consultor de Dados', 'Carlos-1.png'], ['Allek', 'Consultor de TI (Infraestrutura e Cibersegurança)']],
    'Consultores · Inovação e Qualidade': [['Denis Oliveira', 'Consultor de Inovação e IA', 'Denis.png'], ['Stefano Castro', 'Consultor de Qualidade e Instrumentação', 'Stefano.png'], ['Bruno Alencar', 'Instrutor', 'Bruno.png']],
    'Consultores · Processos e Manutenção': [['Wallison Campos', 'Consultor de Processos Industriais', 'Wallison.png'], ['José', 'Consultor de Processos'], ['Eduardo', 'Consultor de Manutenção e PCM']],
    'Consultores · Segurança e Saúde': [['Jander', 'Consultor de Segurança do Trabalho', 'Jander.png'], ['Raul', 'Psicólogo Organizacional', 'Raul.png']]
  };

  const faq = [
    ['Quais áreas a Rockstar atende?', 'Atuamos em engenharia e projetos, inovação e inteligência artificial, gestão de processos e melhoria contínua, segurança do trabalho e NRs, capacitações industriais e empreendedoras, e TI, análise de dados e BI.'],
    ['Os treinamentos são presenciais ou online?', 'Os dois formatos existem. Os presenciais acontecem em Manaus, Boa Vista e Belém, e os online atendem todo o território nacional. Cada turma indica o formato, a data e o local.'],
    ['Como me inscrevo em uma turma aberta?', 'Escolha o treinamento em Próximos Treinamentos e clique em Inscrever-se. Depois da inscrição, um consultor entra em contato.'],
    ['Posso contratar um treinamento só para a minha empresa?', 'Sim. Montamos soluções personalizadas para desenvolver o seu time, com conteúdos práticos e focados na realidade do seu negócio. Fale com a gente pelo WhatsApp ou pelo formulário de contato.'],
    ['Como funciona um projeto de consultoria?', 'Seguimos a Metodologia Rockstar em quatro etapas: diagnóstico inicial, planejamento estratégico, implementação com acompanhamento rigoroso e avaliação dos impactos e da sustentabilidade da mudança.'],
    ['Como falo com a equipe?', 'Pelo WhatsApp +55 92 99263-7236, pelo e-mail rockstar@rockstarbr.com ou pessoalmente em Manaus: Parque 10, 1003, Sala 101, Rua do Comércio.']
  ];

  /* ---------- Render ---------- */
  // Tabs
  const tabs = $('#tabs'), panel = $('#tabPanel');
  Object.keys(caps).forEach((k, i) => {
    const b = document.createElement('button');
    b.role = 'tab'; b.textContent = k; b.setAttribute('aria-selected', i === 0);
    b.onclick = () => { $$('button', tabs).forEach(x => x.setAttribute('aria-selected', x === b)); show(k); };
    tabs.append(b);
  });
  const SLUG = { 'IA Generativa na Prática': 'ia-na-pratica', 'Power BI na Prática': 'power-bi-na-pratica', 'TBO: Treinamento Básico Operacional': 'tbo-treinamento-basico-operacional' };
  function show(k) {
    panel.innerHTML = caps[k].map(([n, h], i) => `<button type="button" class="item" data-cat="${k}" data-n="${n}" data-h="${h}" style="animation-delay:${i * 40}ms"><span>${n}</span><span class="it-r">${h ? `<em>${h}</em>` : ''}${ico('arrow')}</span></button>`).join('');
  }

  show(Object.keys(caps)[0]);

  // Cursos
  $('#courses').innerHTML = courses.map((c, i) => `
    <article class="card course spot reveal" style="--d:${(i % 3) * .08}s">
      <div class="badges">${(c.f || []).map(f => `<span>${f}</span>`).join('')}${c.plan ? `<span class="plan">${c.plan}</span>` : ''}</div>
      <h3><a class="stretch" href="curso.html?c=${c.slug}">${c.t}</a></h3>
      <ul class="meta">
        <li>${ico('cal')}${c.d === 'a definir' ? 'Data a definir' : c.d}</li>
        <li>${ico('clock')}${c.h}</li>
        ${c.l ? `<li>${ico('pin')}${c.l}</li>` : ''}
        <li>${ico('user')}${c.i}</li>
      </ul>
      <div class="course-act">
        <a class="btn btn-sm btn-ghost" href="curso.html?c=${c.slug}">Ver detalhes</a>
        <a class="btn btn-sm" href="${c.reg}" target="_blank" rel="noopener">Inscrever-se ${ico('arrow')}</a>
      </div>
    </article>`).join('');

  // Depoimentos
  const slides = $('#slides'), dots = $('#dots');
  slides.innerHTML = reviews.map(([n, r, t, img]) => `
    <figure class="slide"><div class="stars">★★★★★</div><blockquote>${t}</blockquote>
    <figcaption class="who">${av(n, img)}<span><b>${n}</b>${r ? `<small>${r}</small>` : '<small>Participante</small>'}</span></figcaption></figure>`).join('');
  dots.innerHTML = reviews.map((_, i) => `<i data-i="${i}"></i>`).join('');
  let cur = 0, timer;
  const go = n => {
    cur = (n + reviews.length) % reviews.length;
    $$('.slide', slides).forEach((s, i) => s.classList.toggle('on', i === cur));
    $$('i', dots).forEach((d, i) => d.classList.toggle('on', i === cur));
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6500); };
  $('#prev').onclick = () => { go(cur - 1); auto(); };
  $('#next').onclick = () => { go(cur + 1); auto(); };
  dots.onclick = e => { if (e.target.dataset.i) { go(+e.target.dataset.i); auto(); } };
  let sx = 0;
  slides.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
  slides.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) { go(cur + (dx < 0 ? 1 : -1)); auto(); } });
  go(0); auto();

  // Equipe
  $('#team').innerHTML = Object.entries(team).map(([g, ps]) => `
    <div class="grp reveal"><h4>${g}</h4><div class="people">${ps.map(([n, r, img]) =>
      `<div class="person">${av(n, img && '2026/11/' + img)}<span><b>${n}</b><small>${r}</small></span></div>`).join('')}</div></div>`).join('');

  // FAQ (um aberto por vez)
  $('#faq').innerHTML = faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('');
  $('#faq').addEventListener('toggle', e => {
    if (e.target.open) $$('details', $('#faq')).forEach(d => d !== e.target && (d.open = false));
  }, true);

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el, i) => { if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', (i % 4) * .07 + 's'); io.observe(el); });

  /* ---------- Contadores ---------- */
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const to = +e.target.dataset.to, dec = +e.target.dataset.dec || 0, t0 = performance.now();
    const tick = t => {
      const p = Math.min((t - t0) / 1600, 1), v = to * (1 - Math.pow(1 - p, 3));
      e.target.textContent = dec ? v.toFixed(dec).replace('.', ',') : Math.round(v).toLocaleString('pt-BR');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  $$('.count').forEach(c => cio.observe(c));

  /* ---------- Nav, progresso, scroll-spy ---------- */
  const nav = $('#nav'), bar = $('#progress'), menu = $('#menu'), burger = $('#burger');
  const links = $$('.menu a[href^="#"]:not(.btn)');
  const spy = links.map(a => [a, $(a.getAttribute('href'))]).filter(x => x[1]);
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('scrolled', y > 20);
    bar.style.width = (y / h * 100) + '%';
    let act = null;
    spy.forEach(([a, s]) => { if (s.getBoundingClientRect().top < innerHeight * .4) act = a; });
    links.forEach(a => a.classList.toggle('active', a === act));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const closeMenu = () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.onclick = () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
  menu.addEventListener('click', e => e.target.closest('a') && closeMenu());

  /* ---------- Spotlight nos cards + brilho do cursor ---------- */
  document.addEventListener('pointermove', e => {
    const c = e.target.closest?.('.spot');
    if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); }
    const g = $('#cursorGlow'); g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px';
  }, { passive: true });

  /* ---------- Campo de estrelas (canvas) ---------- */
  const cv = $('#stars'), cx = cv.getContext('2d');
  let W, H, pts = [], mouse = { x: -999, y: -999 };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const size = () => {
    const d = Math.min(devicePixelRatio || 1, 2), r = cv.getBoundingClientRect();
    W = cv.width = r.width * d; H = cv.height = r.height * d; cx.setTransform(d, 0, 0, d, 0, 0); W /= d; H /= d;
    const n = Math.round(W * H / 14000);
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: Math.random() * 1.4 + .3 }));
  };
  const draw = () => {
    cx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      cx.fillStyle = 'rgba(255,215,170,.7)'; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 150) { cx.strokeStyle = `rgba(245,168,0,${.5 * (1 - dm / 150)})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(mouse.x, mouse.y); cx.stroke(); }
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 90) { cx.strokeStyle = `rgba(255,110,50,${.16 * (1 - d / 90)})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }
      }
    }
    if (!reduce && !document.hidden && visible) requestAnimationFrame(draw);
  };
  let visible = true;
  new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) draw(); }).observe(cv);
  cv.parentNode.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  cv.parentNode.addEventListener('pointerleave', () => mouse.x = mouse.y = -999);
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 150); });
  size(); draw();

  /* ---------- Formulário (abre WhatsApp com a mensagem) ---------- */
  const form = $('#form'), msg = $('#formMsg');
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-subject]');
    if (a) { const t = form.msg; if (!t.value) t.value = a.dataset.subject + '\n'; }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const f = new FormData(form);
    const text = `${(window.RS_T || (x => x))('Olá, Rockstar! Sou')} ${f.get('nome')}${f.get('empresa') ? ' (' + f.get('empresa') + ')' : ''}.\n\n${f.get('msg')}\n\nE-mail: ${f.get('email')}${f.get('whats') ? '\nWhatsApp: ' + f.get('whats') : ''}`;
    window.open('https://wa.me/5592992637236?text=' + encodeURIComponent(text), '_blank', 'noopener');
    msg.textContent = (window.RS_T || (x => x))('Obrigado! Abrimos o WhatsApp com a sua mensagem pronta para enviar.');
    form.reset();
  });

  /* ---------- Detalhe do item do catálogo ---------- */
  const cd = $('#capDlg');
  panel.addEventListener('click', e => {
    const it = e.target.closest('.item'); if (!it) return;
    const { cat, n, h } = it.dataset, slug = SLUG[n];
    const full = slug && (window.COURSES || []).find(c => c.slug === slug);
    $('#capCat', cd).textContent = cat;
    $('#capTitle', cd).textContent = n;
    $('#capHours', cd).textContent = h ? h : 'Carga horária sob consulta';
    $('#capDesc', cd).textContent = full ? full.desc : 'Este treinamento é realizado em turmas abertas ou sob medida (in company), conforme a demanda. Fale com a nossa equipe para saber datas, formato e valores.';
    const wa = 'https://wa.me/5592992637236?text=' + encodeURIComponent(`Olá! Gostaria de informações sobre o treinamento ${n}.`);
    $('#capAct', cd).innerHTML = full
      ? `<a class="btn" href="curso.html?c=${slug}">Ver página completa do curso ${ico('arrow')}</a><a class="btn btn-ghost" href="${full.reg}" target="_blank" rel="noopener">Inscrever-se</a>`
      : `<a class="btn" href="${wa}" target="_blank" rel="noopener">Solicitar este treinamento ${ico('arrow')}</a><a class="btn btn-ghost" href="#treinamentos" data-close>Ver turmas abertas</a>`;
    cd.showModal();
  });
  cd.addEventListener('click', e => { if (e.target === cd || e.target.closest('[data-close]')) cd.close(); });

  /* ---------- Modal de privacidade ---------- */
  const dlg = $('#privacy');
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); dlg.showModal(); return; }
    if (dlg.open && (e.target.closest('#privacy [data-close]') || e.target === dlg)) dlg.close();
  });


  /* ---------- Eletrons em orbita ---------- */
  (() => {
    const orbs = $$('.orb').map(g => ({ g, r: +g.dataset.r, a: +g.dataset.a * Math.PI / 180, v: +g.dataset.s * Math.PI / 180 }));
    const place = o => o.g.setAttribute('transform', `translate(${260 + o.r * Math.cos(o.a)} ${260 + o.r * Math.sin(o.a)})`);
    orbs.forEach(place);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const art = $('.hero-art');
    let hover = false, seen = true, last = performance.now(), k = 1;
    art.addEventListener('pointerover', e => { if (e.target.closest('.eln')) hover = true; });
    art.addEventListener('pointerout', e => { if (e.target.closest('.eln')) hover = false; });
    art.addEventListener('focusin', () => hover = true);
    art.addEventListener('focusout', () => hover = false);
    new IntersectionObserver(([e]) => seen = e.isIntersecting).observe(art);
    const loop = t => {
      const dt = Math.min((t - last) / 1000, .1); last = t;
      k += ((hover ? 0 : 1) - k) * Math.min(dt * 8, 1);
      if (seen && !document.hidden) orbs.forEach(o => { o.a += o.v * dt * k; place(o); });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  })();

  if (location.hash === '#privacidade') setTimeout(() => dlg.showModal(), 300);
  $('#year').textContent = new Date().getFullYear();
})();
