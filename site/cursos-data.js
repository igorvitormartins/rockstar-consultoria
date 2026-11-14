/* Dados dos cursos (fonte: páginas de curso do site rockstarbr.com) */
(() => {
  const WA = 'https://wa.me/5592992637236?text=';
  const q = t => WA + encodeURIComponent(t);
  const mk = c => Object.assign({
    wa: q(`Olá! Tenho uma dúvida sobre o treinamento ${c.title}.`),
    waCompany: q(`Olá! Gostaria de solicitar um treinamento de ${c.title} para a minha equipe.`)
  }, c);

  window.COURSES = [
    mk({
      slug: 'desenvolvimento-de-sistemas-com-ia-lovable',
      title: 'Desenvolvimento de Sistemas com IA (Lovable) – Iniciante',
      pageTitle: 'Desenvolvimento de Sistemas com IA (Lovable)',
      cat: 'Treinamento · Tecnologia e Inovação',
      formats: ['Presencial', 'Online ao vivo'],
      date: '14/11/2026 a 21/11/2026', hours: '12 horas', loc: 'Manaus',
      format: 'Presencial em Manaus e online ao vivo',
      desc: 'Crie aplicações e sistemas com IA por meio de conversa com a ferramenta, da primeira tela até um MVP publicado. Atividades práticas em três níveis.',
      note: 'Trilha de 3 níveis, 12 horas cada (36 horas no programa completo). Turma Iniciante em 14/11/2026; Intermediário e Avançado sem data definida.',
      instructor: { name: 'Bruno Alencar', role: 'Consultor de Inovação', photo: 'assets/team/Bruno.png', bio: 'Mais de 13 anos de experiência em engenharia, indústria, gestão e inovação. Atua com projetos de PD&I, captação de recursos, agentes de IA, automações, plataformas digitais e MVPs. É fundador e CEO da Amazônia Venture Builder, fundador da Blue Fire Tecnologia e Treinamentos e presidente do Instituto Amazônia Converge. Mestre em Engenharia, Gestão de Processos e Sistemas.' },
      groups: [
        { name: 'Nível Iniciante · 12 h', modules: [
          { t: 'IA aplicada aos negócios', items: ['IA generativa e seu impacto no desenvolvimento de software', 'Diferenças entre chatbot, automação, copiloto, agente e aplicação inteligente', 'Oportunidades e limites da IA em empresas'] },
          { t: 'Mentalidade no-code e produto digital', items: ['Da ideia ao problema validado', 'Usuário, dor, jornada, funcionalidade e resultado', 'MVP, protótipo, prova de conceito e produto em produção'] },
          { t: 'Primeiros passos com Lovable', items: ['Criação de apps por conversa', 'Estrutura de telas, componentes e navegação', 'Prompts de criação, correção e melhoria', 'Ciclo de pedir, testar e ajustar'] },
          { t: 'Mini-projeto introdutório', items: ['App simples com cadastro, visualização e fluxo básico', 'Ajustes de layout, linguagem e usabilidade', 'Apresentação do protótipo'] }
        ] },
        { name: 'Nível Intermediário · 12 h', modules: [
          { t: 'Arquitetura simples de MVP', items: ['Funcionalidades essenciais versus futuras', 'Fluxos, estados e regras de negócio', 'Backlog, critérios de aceite e priorização'] },
          { t: 'Dados e backend no no-code', items: ['Modelagem de dados, entidades, relacionamentos, formulários e validações', 'Integração com banco de dados, com foco em Supabase'] },
          { t: 'Prompts intermediários para Lovable', items: ['Prompts de contexto, alteração incremental e melhoria visual', 'Correção de bugs, segurança e tratamento de erros'] },
          { t: 'Automações e IA na jornada do usuário', items: ['IA para classificação, resumo, geração de texto e apoio à decisão', 'Integrações com formulários, planilhas, CRM, notificações e APIs', 'Fluxos semiautomatizados'] },
          { t: 'Validação do MVP', items: ['Testes com usuários e ajustes por feedback', 'Indicadores de valor', 'Preparação de demonstração executiva'] }
        ] },
        { name: 'Nível Avançado · 12 h', modules: [
          { t: 'Produtos AI-First', items: ['Quando a IA é central ou de apoio', 'Copilotos, agentes, assistentes internos e painéis inteligentes', 'Design responsável de experiências com IA'] },
          { t: 'RAG, bases de conhecimento e agentes', items: ['Conceitos de RAG', 'Uso de documentos, políticas, catálogos, manuais e históricos', 'Busca inteligente, resumo e recomendação'] },
          { t: 'Segurança, privacidade e governança', items: ['Dados sensíveis e controle de acesso', 'Cuidados em saúde e setores regulados', 'Boas práticas de LGPD, registro de decisões e transparência'] },
          { t: 'Publicação, manutenção e colaboração', items: ['Publicação com domínio próprio', 'Organização de versões e documentação', 'Sincronização com repositório, quando necessário'] },
          { t: 'Projeto final e pitch', items: ['Refinamento do MVP e indicadores de impacto', 'Roadmap técnico e de negócio', 'Pitch final com demonstração funcional'] }
        ] }
      ],
      method: 'Atividades práticas, exercícios, simulações e estudos de caso',
      images: ['lovable-1', 'lovable-2', 'lovable-3'],
      reg: 'https://crm.rockstarbr.com/inscricao/128fe103-14fc-4a9c-8935-eea2188aaf0f'
    }),
    mk({
      slug: 'ia-na-pratica',
      title: 'IA na Prática',
      cat: 'Treinamento · Inteligência Artificial',
      formats: [],
      date: '17/11/2026 a 19/11/2026', hours: '8 horas', loc: 'Manaus',
      format: 'Presencial e online ao vivo',
      desc: 'Aprenda a usar a IA generativa na rotina de trabalho, com exercícios práticos voltados à sua área: Engenharia, TI, RH, Compras e Advocacia.',
      instructor: { name: 'Denis Oliveira', role: 'Consultor de Inovação e IA', photo: 'assets/team/Denis.png' },
      groups: [{ modules: [
        { t: 'Fundamentos da Inteligência Artificial', items: ['História da IA e conceitos: Machine Learning, Deep Learning e NLP', 'Tipos de IA e ética', 'Exemplos reais em empresas, indústria e serviços'] },
        { t: 'Introdução ao Prompt Engineering', items: ['O que é e a estrutura de um bom prompt', 'Dicas e erros comuns', 'Aplicações em pesquisa, estudo e trabalho'] },
        { t: 'Ferramentas de IA por tipo de trabalho', items: ['ChatGPT, Gemini, Grok e Perplexity', 'Midjourney e Kling AI', 'Ferramentas de voz e áudio, Gamma e apps para celular'] },
        { t: 'IA em contextos de maior complexidade', items: ['Análise de grandes volumes de dados', 'Criação de conteúdos extensos, preditivos e analíticos', 'A IA como apoio ao aprendizado'] }
      ] }],
      method: 'Atividades práticas',
      images: ['ia-1', 'ia-2', 'ia-3'],
      reg: 'https://crm.rockstarbr.com/inscricao/ff9cdc8b-0ac8-4497-8bd7-87b7306f5c68'
    }),
    mk({
      slug: 'claude-chat-pensar-e-decidir',
      title: 'Claude Chat: Pensar e Decidir',
      cat: 'Treinamento · Inteligência Artificial',
      plan: 'Turma planejada',
      formats: [],
      date: 'a definir', dateDetail: '21/11, das 08h às 12h, ou 23/11, das 18h às 22h', hours: '4 horas', loc: 'Manaus',
      format: 'Treinamento prático · Do zero à prática',
      desc: 'Treinamento prático para usar o Claude como apoio ao raciocínio e à tomada de decisão no trabalho.',
      instructor: { name: 'Denis Oliveira', role: 'Especialista em Inteligência Artificial', photo: 'assets/team/Denis.png', bio: 'Formação em Inovação e Inteligência Artificial. Instrutor do treinamento "IA na Prática", da Rockstar, com foco em prática e entendimento.' },
      groups: [{ modules: [
        { t: 'Introdução ao Claude Chat', items: ['O que é, como funciona e principais funcionalidades'] },
        { t: 'Primeiros passos', items: ['Acesso à plataforma, interface e configurações básicas'] },
        { t: 'Criação de prompts', items: ['Como elaborar comandos claros e eficientes para a IA'] },
        { t: 'Técnicas avançadas de interação', items: ['Como melhorar respostas e explorar o potencial do Claude'] },
        { t: 'Análise e tomada de decisão', items: ['Interpretação de documentos, resolução de problemas e planejamento estratégico'] },
        { t: 'Aplicação prática', items: ['Criação de conteúdos, análise de informações e execução de tarefas reais do ambiente profissional'] }
      ] }],
      method: 'Foco em prática e entendimento',
      images: [],
      reg: 'https://crm.rockstarbr.com/inscricao/0851cbd3-a479-43ef-ae4b-de80c2428dfc'
    }),
    mk({
      slug: 'power-bi-na-pratica',
      title: 'Power BI na Prática',
      cat: 'Treinamento · Dados e Business Intelligence',
      formats: [],
      date: 'a definir', hours: '16 horas', loc: '',
      format: 'Híbrido',
      desc: 'Do dado bruto ao painel gerencial: importe, trate e apresente informações no Power BI, com prática em todas as etapas.',
      instructor: { name: 'Carlos Vollrath', role: 'Consultor de Dados', photo: 'assets/team/Carlos-1.png', bio: 'Atua com gestão de projetos de dados e BI, desenvolvimento de dashboards em Power BI e Qlik Sense, automação de processos e sistemas web (Python, MySQL e Django), além de consultoria e treinamento em BI.' },
      groups: [{ modules: [
        { t: 'Introdução ao Microsoft Power BI: fundamentos e teoria', items: ['O que é Business Intelligence', 'Onde aplicar', 'Modelos de dimensões', 'Exploração do Power BI', 'Estudos de caso'] },
        { t: 'Fundamentos de ETL', items: ['Importação e extração de dados', 'Definição de métricas', 'Power Query', 'Relacionamentos de tabelas', 'Modelo de dimensão de tabelas'] },
        { t: 'Criação de painéis', items: ['Criação de gráficos', 'Prototipação no PowerPoint', 'Design no Figma', 'Botões, ícones e cores de fundo', 'Técnicas de storytelling com dados'] },
        { t: 'Integração ao ChatGPT', items: ['Integração com a OpenAI', 'Linguagem DAX', 'Cálculo e análises preditivas'] }
      ] }],
      method: 'Atividades práticas',
      images: ['powerbi-1', 'powerbi-2', 'powerbi-3'],
      reg: 'https://crm.rockstarbr.com/inscricao/26fd70fa-3693-4859-b4fe-9c1cffb07a8f'
    }),
    mk({
      slug: 'metrologia-basica',
      title: 'Metrologia Básica',
      cat: 'Treinamento · Qualidade e Instrumentação',
      formats: ['Presencial'],
      date: 'a definir', hours: '4 horas', loc: '',
      format: 'Presencial',
      desc: 'Aprenda a medir com segurança: instrumentos, leitura de paquímetro e micrômetro, erros de medição e noções de calibração.',
      instructor: { name: 'Stefano Castro', role: 'Consultor de Qualidade e Instrumentação', photo: 'assets/team/Stefano.png', bio: 'Formação em Produção Industrial e MBA em Gestão da Qualidade e Engenharia da Produção. Experiência em gestão da produção, de pessoas, sistemas de gestão da qualidade, metrologia e instrumentação, com atuação em controle de instrumentos de medição e confiabilidade metrológica.' },
      groups: [{ modules: [
        { t: 'Fundamentos', items: ['O que é Metrologia? Ciência das medições: precisão, confiabilidade e padronização', 'Importância: controle de qualidade, redução de erros e confiabilidade de processos', 'Sistema Internacional (SI): metro, quilograma e segundo', 'Conversões básicas (1 m = 100 cm = 1000 mm)'] },
        { t: 'Erros e instrumentos básicos', items: ['Erro de medição e seu impacto em retrabalho e perdas', 'Erro de paralaxe: olhar perpendicularmente', 'Instrumentos básicos: régua, trena e metro', 'Boas práticas: limpeza, não aplicar força e conferir calibração'] },
        { t: 'Paquímetro', items: ['Medidas internas, externas e de profundidade', 'Leitura: escala fixa + nônio', 'Exercício com leitura de exemplos reais'] },
        { t: 'Micrômetro e outros instrumentos', items: ['Micrômetro: medidas pequenas, mais preciso que o paquímetro', 'Leitura: bainha + tambor', 'Torquímetro, manômetro, termômetro e balança'] },
        { t: 'Calibração', items: ['Calibração e confiabilidade (exigência da ISO 9001)', 'Certificado de calibração: dados do instrumento, resultados e rastreabilidade', 'Boas práticas gerais antes, durante e após a medição'] }
      ] }],
      method: 'Atividades práticas, com exercícios de leitura de instrumentos',
      images: ['metrologia-1', 'metrologia-2', 'metrologia-3'],
      reg: 'https://crm.rockstarbr.com/inscricao/6edebe72-a9d0-461f-84ff-4c20ca4ced31'
    }),
    mk({
      slug: 'tbo-treinamento-basico-operacional',
      title: 'TBO – Treinamento Básico Operacional',
      cat: 'Treinamento · Operações e Produtividade',
      formats: ['Presencial', 'Online ao vivo'],
      date: 'a definir', hours: '4 horas', loc: '',
      format: 'Presencial ou online ao vivo',
      desc: 'Segurança, padrão operacional, resolução de problemas e qualidade para construir uma equipe de operação mais produtiva e segura.',
      instructor: { name: 'Wallison Campos', role: 'Consultor de Processos Industriais', photo: 'assets/team/Wallison.png', bio: 'Engenheiro eletricista e especialista em Lean Manufacturing, com experiência em melhoria contínua, redução de desperdícios, cronoanálise, 5S, gestão de projetos (Scrum, A3, Kaizen, VSM, PDCA, DMAIC, SMED), gestão de riscos e análise de perdas.' },
      groups: [{ modules: [
        { t: 'Introdução ao TBO', items: ['Importância do treinamento básico operacional', 'Impacto da eficiência e da segurança na produtividade'] },
        { t: 'Segurança no ambiente de trabalho', items: ['Conceito de segurança e uso correto de EPIs e EPCs', 'Identificação de riscos operacionais', 'Dinâmica interativa de certo ou errado'] },
        { t: 'Operação padrão e produtividade', items: ['Padrões operacionais e ciclo PDCA na operação', 'Uso de checklists', 'Simulação de melhoria de processo'] },
        { t: 'Identificação e solução de problemas', items: ['Como identificar problemas na operação', 'Método 5W2H', 'Atividade prática com problemas reais'] },
        { t: 'Qualidade e atendimento ao cliente', items: ['Importância da qualidade na operação e impacto no cliente', 'Estudo de caso: evitar falhas e retrabalho'] },
        { t: 'Revisão e encerramento', items: ['Resumo dos principais tópicos e dicas de aplicação no dia a dia', 'Perguntas e respostas e quiz final'] }
      ] }],
      method: 'Dinâmicas e atividades práticas',
      images: ['tbo-1', 'tbo-2', 'tbo-3'],
      reg: 'https://crm.rockstarbr.com/inscricao/73df3cc8-e592-4e33-a2f6-7c366637c7fd'
    }),
    mk({
      slug: 'licitacoes-e-contratos-na-pratica',
      title: 'Licitações e Contratos na Prática',
      cat: 'Treinamento · Licitações e Contratos',
      formats: [],
      date: 'a definir', hours: '20 horas', loc: 'Manaus',
      format: 'Presencial ou online ao vivo',
      desc: 'A Lei de Licitações do planejamento à execução do contrato, com análise de editais, formação de preços e simulação completa de pregão.',
      instructor: { name: 'Thyerry Piaget', role: 'Consultor em Licitação e Negócios', photo: 'assets/team/Thyerry.png', bio: 'Mais de 10 anos de docência e mais de 7 anos em consultoria de licitações. Formação em Administração, com especialização em Marketing e Publicidade.' },
      groups: [{ modules: [
        { t: 'Fundamentos', items: ['Fundamentos da Lei e princípios', 'Planejamento, PAC, ETP e TR', 'Pesquisa de preços e gestão de riscos'] },
        { t: 'Modalidades', items: ['Modalidades e fases', 'Critérios de julgamento e modos de disputa', 'Simulação de pregão'] },
        { t: 'Habilitação', items: ['Habilitação, SICAF e documentação', 'ME/EPP', 'Recursos e impugnações', 'Participação das empresas'] },
        { t: 'Contratos administrativos', items: ['Garantias e alterações', 'Fiscalização', 'Sanções e encerramento'] },
        { t: 'Oficina prática', items: ['Análise de editais', 'Formação de preços', 'Estudos de caso', 'Simulação completa'] }
      ] }],
      method: 'Aula expositiva, estudos de caso, simulações, exercícios, avaliações e atividades práticas',
      images: ['licitacoes-1'],
      reg: 'https://crm.rockstarbr.com/inscricao/e62eaae0-85c0-4289-853e-464f75a626b0'
    })
  ];
})();
