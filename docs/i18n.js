/* Seletor de idioma: PT (original) · EN · ES
   Cada linha: [português, inglês, espanhol]. O texto em português é a chave. */
(() => {
  const ROWS = [
    // ---- Navegação / hero
    ["Serviços", "Services", "Servicios"],
    ["Treinamentos", "Training", "Capacitaciones"],
    ["Recursos", "Resources", "Recursos"],
    ["Sobre", "About", "Nosotros"],
    ["Contato", "Contact", "Contacto"],
    ["Falar com a equipe", "Talk to our team", "Hablar con el equipo"],
    ["Processos em Performance", "Processes in Performance", "Procesos en Performance"],
    ["Processos, pessoas e tecnologia para a sua", "Processes, people and technology to make your", "Procesos, personas y tecnología para que su"],
    ["operação render mais", "operation perform better", "operación rinda más"],
    ["Consultoria, treinamentos e soluções em engenharia, gestão de processos, segurança do trabalho, dados e inteligência artificial. Conhecimento técnico, experiência prática e foco em resultado.", "Consulting, training and solutions in engineering, process management, occupational safety, data and artificial intelligence. Technical knowledge, hands-on experience and a focus on results.", "Consultoría, capacitaciones y soluciones en ingeniería, gestión de procesos, seguridad laboral, datos e inteligencia artificial. Conocimiento técnico, experiencia práctica y foco en resultados."],
    ["Menos teoria. Mais resultado.", "Less theory. More results.", "Menos teoría. Más resultados."],
    ["Ver treinamentos", "See training courses", "Ver capacitaciones"],
    ["Pedir proposta", "Request a proposal", "Pedir propuesta"],
    ["Presencial e online", "In person and online", "Presencial y online"],
    ["Instrutores que atuam no mercado", "Instructors who work in the industry", "Instructores que trabajan en el mercado"],
    ["Mão na massa", "Hands-on", "Manos a la obra"],
    ["Cases", "Cases", "Casos"],
    ["Diferenciais", "Why us", "Diferenciales"],
    ["Metodologia", "Method", "Metodología"],
    ["61 avaliações no Google", "61 Google reviews", "61 reseñas en Google"],
    ["alunos formados", "graduated students", "alumnos formados"],
    ["empresas clientes", "client companies", "empresas clientes"],
    ["Presencial", "In person", "Presencial"],
    ["Manaus, Boa Vista e Belém", "Manaus, Boa Vista and Belém", "Manaos, Boa Vista y Belém"],
    ["Online", "Online", "Online"],
    ["todo o território nacional", "all across Brazil", "en todo el territorio nacional"],
    ["Engenharia", "Engineering", "Ingeniería"],
    ["Inteligência Artificial", "Artificial Intelligence", "Inteligencia Artificial"],
    ["Lean & Melhoria Contínua", "Lean & Continuous Improvement", "Lean y Mejora Continua"],
    ["Segurança do Trabalho", "Occupational Safety", "Seguridad Laboral"],
    ["Power BI & Python", "Power BI & Python", "Power BI y Python"],
    ["Liderança", "Leadership", "Liderazgo"],
    ["NRs", "Safety Standards (NRs)", "Normas (NRs)"],
    ["Infraestrutura de TI", "IT Infrastructure", "Infraestructura de TI"],
    // ---- Soluções
    ["O que fazemos", "What we do", "Qué hacemos"],
    ["Soluções para cada desafio da sua operação", "Solutions for every challenge in your operation", "Soluciones para cada desafío de su operación"],
    ["Da engenharia à inteligência artificial, atuamos nas áreas que sustentam a produtividade, a segurança e a competitividade da sua empresa. Seis frentes, uma metodologia e uma equipe que põe a mão na massa junto com a sua.", "From engineering to artificial intelligence, we work in the areas that sustain your company's productivity, safety and competitiveness. Six fronts, one methodology and a team that rolls up its sleeves alongside yours.", "De la ingeniería a la inteligencia artificial, actuamos en las áreas que sostienen la productividad, la seguridad y la competitividad de su empresa. Seis frentes, una metodología y un equipo que se pone manos a la obra junto al suyo."],
    ["Engenharia e Projetos", "Engineering and Projects", "Ingeniería y Proyectos"],
    ["Projetos arquitetônicos, de climatização e elétricos, além de modelagem 2D e design de interiores em 3D.", "Architectural, HVAC and electrical projects, plus 2D modeling and 3D interior design.", "Proyectos arquitectónicos, de climatización y eléctricos, además de modelado 2D y diseño de interiores en 3D."],
    ["Projetos integrados: áreas administrativas, produção e refeitórios", "Integrated projects: administrative areas, production and canteens", "Proyectos integrados: áreas administrativas, producción y comedores"],
    ["Climatização e projetos elétricos", "HVAC and electrical projects", "Climatización y proyectos eléctricos"],
    ["Modelagem 2D e design 3D", "2D modeling and 3D design", "Modelado 2D y diseño 3D"],
    ["Inovação e Inteligência Artificial", "Innovation and Artificial Intelligence", "Innovación e Inteligencia Artificial"],
    ["Consultoria, implementação e capacitação em IA Generativa para a engenharia e as rotinas corporativas.", "Consulting, implementation and training in Generative AI for engineering and corporate routines.", "Consultoría, implementación y capacitación en IA Generativa para la ingeniería y las rutinas corporativas."],
    ["Implementação corporativa de IA", "Corporate AI implementation", "Implementación corporativa de IA"],
    ["Treinamentos e palestras: Engenharia, TI, SST, RH, Compras e Advocacia", "Training and talks: Engineering, IT, Safety, HR, Procurement and Legal", "Capacitaciones y charlas: Ingeniería, TI, SST, RR. HH., Compras y Abogacía"],
    ["Gestão de Processos e Melhoria Contínua", "Process Management and Continuous Improvement", "Gestión de Procesos y Mejora Continua"],
    ["Mapeamento de processos, matriz de responsabilidade, planos de ação e suporte comercial para expansão.", "Process mapping, responsibility matrix, action plans and commercial support for expansion.", "Mapeo de procesos, matriz de responsabilidades, planes de acción y soporte comercial para la expansión."],
    ["Mapeamento setorial e administrativo", "Departmental and administrative mapping", "Mapeo sectorial y administrativo"],
    ["Estratégias de comercialização e prospecção", "Sales strategies and prospecting", "Estrategias de comercialización y prospección"],
    ["Segurança do Trabalho e NRs", "Occupational Safety and NRs", "Seguridad Laboral y NRs"],
    ["NR-1 (GRO/PGR), análise de risco e responsabilidade técnica NR-12, e treinamentos de NR-5 e NR-23.", "NR-1 (GRO/PGR), risk analysis and NR-12 technical responsibility, plus NR-5 and NR-23 training.", "NR-1 (GRO/PGR), análisis de riesgo y responsabilidad técnica NR-12, y capacitaciones de NR-5 y NR-23."],
    ["NR-1: gestão completa de riscos ocupacionais", "NR-1: complete occupational risk management", "NR-1: gestión completa de riesgos ocupacionales"],
    ["NR-12: análise de risco e validação de laudos", "NR-12: risk analysis and report validation", "NR-12: análisis de riesgo y validación de informes"],
    ["NR-5 (CIPA) e NR-23 (Brigada)", "NR-5 (CIPA) and NR-23 (Fire Brigade)", "NR-5 (CIPA) y NR-23 (Brigada)"],
    ["Capacitações Industriais e Empreendedoras", "Industrial and Entrepreneurial Training", "Capacitaciones Industriales y Emprendedoras"],
    ["Treinamento Básico Operacional (TBO), Metrologia Básica, Marketing Digital na prática e formação de empreendedores.", "Basic Operational Training (TBO), Basic Metrology, hands-on Digital Marketing and entrepreneur education.", "Capacitación Básica Operacional (TBO), Metrología Básica, Marketing Digital en la práctica y formación de emprendedores."],
    ["Indústria: TBO e Metrologia", "Industry: TBO and Metrology", "Industria: TBO y Metrología"],
    ["Marketing e comercialização", "Marketing and sales", "Marketing y comercialización"],
    ["TI, Análise de Dados e BI", "IT, Data Analysis and BI", "TI, Análisis de Datos y BI"],
    ["Dashboards em Power BI e Python, bancos de dados, servidores, infraestrutura de redes e CFTV.", "Power BI and Python dashboards, databases, servers, network infrastructure and CCTV.", "Dashboards en Power BI y Python, bases de datos, servidores, infraestructura de redes y CCTV."],
    ["Servidores, backups, redes e CFTV", "Servers, backups, networks and CCTV", "Servidores, backups, redes y CCTV"],
    ["Dashboards estratégicos com Power BI e Python", "Strategic dashboards with Power BI and Python", "Dashboards estratégicos con Power BI y Python"],
    // ---- Consultoria
    ["Consultoria", "Consulting", "Consultoría"],
    ["Do diagnóstico ao acompanhamento contínuo", "From diagnosis to ongoing support", "Del diagnóstico al acompañamiento continuo"],
    ["Entenda onde a sua operação perde tempo e dinheiro e conte com a Rockstar para manter a melhoria em andamento.", "Understand where your operation loses time and money, and count on Rockstar to keep improvement moving.", "Entienda dónde su operación pierde tiempo y dinero y cuente con Rockstar para mantener la mejora en marcha."],
    ["Porta de entrada", "Starting point", "Puerta de entrada"],
    ["Diagnóstico Rockstar", "Rockstar Diagnosis", "Diagnóstico Rockstar"],
    ["A porta de entrada para qualquer projeto.", "The starting point for any project.", "La puerta de entrada para cualquier proyecto."],
    ["Levantamento da operação, dos processos e dos indicadores", "Assessment of operations, processes and indicators", "Relevamiento de la operación, los procesos y los indicadores"],
    ["Identificação das causas dos problemas e das oportunidades de ganho", "Identification of root causes and improvement opportunities", "Identificación de las causas de los problemas y de las oportunidades de mejora"],
    ["Plano de ação priorizado, com escopo, prazo e investimento definidos", "Prioritized action plan with defined scope, timeline and investment", "Plan de acción priorizado, con alcance, plazo e inversión definidos"],
    ["Mensal", "Monthly", "Mensual"],
    ["Rockstar Gestão Contínua", "Rockstar Ongoing Management", "Rockstar Gestión Continua"],
    ["Acompanhamento mensal da gestão, dos processos e dos indicadores.", "Monthly follow-up of management, processes and indicators.", "Seguimiento mensual de la gestión, los procesos y los indicadores."],
    ["Reuniões periódicas com a sua liderança", "Regular meetings with your leadership", "Reuniones periódicas con su liderazgo"],
    ["Painel de indicadores e relatório gerencial mensal", "Indicator dashboard and monthly management report", "Panel de indicadores e informe gerencial mensual"],
    ["Plano de ação revisado a cada ciclo, com apoio técnico da equipe", "Action plan reviewed every cycle, with technical support from our team", "Plan de acción revisado en cada ciclo, con apoyo técnico del equipo"],
    ["Lean e Melhoria Contínua", "Lean and Continuous Improvement", "Lean y Mejora Continua"],
    ["Lean, Kaizen, 5S, TPM e cronoanálise. Menos desperdício, mais produtividade.", "Lean, Kaizen, 5S, TPM and time studies. Less waste, more productivity.", "Lean, Kaizen, 5S, TPM y cronoanálisis. Menos desperdicio, más productividad."],
    ["Gestão de Projetos e PMO", "Project Management and PMO", "Gestión de Proyectos y PMO"],
    ["PMO enxuto, cronograma, entregas e metodologias ágeis como Scrum.", "Lean PMO, schedules, deliverables and agile methods such as Scrum.", "PMO ágil, cronograma, entregas y metodologías ágiles como Scrum."],
    ["Soluções Corporativas", "Corporate Solutions", "Soluciones Corporativas"],
    ["Sistemas, automações com IA e dashboards gerenciais sob medida.", "Custom systems, AI automations and management dashboards.", "Sistemas, automatizaciones con IA y dashboards gerenciales a medida."],
    ["Liderança e Equipes", "Leadership and Teams", "Liderazgo y Equipos"],
    ["Liderança, comunicação e gestão, in company ou em turmas abertas.", "Leadership, communication and management, in-company or in open classes.", "Liderazgo, comunicación y gestión, in company o en grupos abiertos."],
    // ---- Metodologia
    ["Como trabalhamos", "How we work", "Cómo trabajamos"],
    ["A Metodologia Rockstar", "The Rockstar Method", "La Metodología Rockstar"],
    ["Cada projeto segue quatro etapas, do entendimento das necessidades à medição dos impactos.", "Every project follows four stages, from understanding needs to measuring impact.", "Cada proyecto sigue cuatro etapas, desde entender las necesidades hasta medir los impactos."],
    ["Diagnóstico inicial", "Initial diagnosis", "Diagnóstico inicial"],
    ["Análise profunda de necessidades.", "In-depth needs analysis.", "Análisis profundo de necesidades."],
    ["Planejamento estratégico", "Strategic planning", "Planificación estratégica"],
    ["Definição de metas detalhadas.", "Definition of detailed goals.", "Definición de metas detalladas."],
    ["Implementação", "Implementation", "Implementación"],
    ["Execução com acompanhamento rigoroso.", "Execution with close monitoring.", "Ejecución con seguimiento riguroso."],
    ["Avaliação", "Evaluation", "Evaluación"],
    ["Medição de impactos e sustentabilidade da mudança.", "Impact measurement and sustainability of change.", "Medición de impactos y sostenibilidad del cambio."],
    // ---- Galeria / por que
    ["Na prática", "In practice", "En la práctica"],
    ["Treinamentos Estratégicos para Potencializar", "Strategic Training to Boost", "Capacitaciones Estratégicas para Potenciar"],
    ["Resultados de Alta Performance", "High-Performance Results", "Resultados de Alto Rendimiento"],
    ["Na Rockstar Consultoria, nossa missão é impulsionar o desenvolvimento humano e organizacional, promovendo inovação e excelência para transformar desafios em oportunidades de crescimento.", "At Rockstar Consulting, our mission is to drive human and organizational development, promoting innovation and excellence to turn challenges into growth opportunities.", "En Rockstar Consultoría, nuestra misión es impulsar el desarrollo humano y organizacional, promoviendo innovación y excelencia para transformar desafíos en oportunidades de crecimiento."],
    ["Por que treinar com a Rockstar?", "Why train with Rockstar?", "¿Por qué capacitarse con Rockstar?"],
    ["Cursos práticos, com exercícios e casos reais para aplicar no dia a dia da sua empresa.", "Practical courses with exercises and real cases to apply in your company's day-to-day.", "Cursos prácticos, con ejercicios y casos reales para aplicar en el día a día de su empresa."],
    ["Instrutores do mercado", "Industry instructors", "Instructores del mercado"],
    ["Quem ensina atua no mercado e traz a experiência prática para a sala de aula.", "Those who teach work in the industry and bring hands-on experience to the classroom.", "Quien enseña trabaja en el mercado y lleva la experiencia práctica al aula."],
    ["Turmas presenciais em Manaus, Boa Vista e Belém, e treinamentos online para todo o Brasil.", "In-person classes in Manaus, Boa Vista and Belém, and online training across Brazil.", "Grupos presenciales en Manaos, Boa Vista y Belém, y capacitaciones online para todo Brasil."],
    ["Sob medida", "Tailor-made", "A medida"],
    ["Soluções personalizadas, com conteúdos focados na realidade do seu negócio.", "Customized solutions with content focused on the reality of your business.", "Soluciones personalizadas, con contenidos centrados en la realidad de su negocio."],
    // ---- Catálogo
    ["Catálogo", "Catalog", "Catálogo"],
    ["Algumas de nossas capacitações", "Some of our courses", "Algunas de nuestras capacitaciones"],
    ["Treinamentos práticos, com a carga horária de cada curso. Veja as turmas abertas ou solicite um treinamento para a sua equipe.", "Hands-on training, with the hours of each course. See open classes or request training for your team.", "Capacitaciones prácticas, con la carga horaria de cada curso. Vea los grupos abiertos o solicite una capacitación para su equipo."],
    ["Dados e Análise", "Data and Analytics", "Datos y Análisis"],
    ["Industrial e Engenharia", "Industrial and Engineering", "Industrial e Ingeniería"],
    ["Marketing e Empreendedorismo", "Marketing and Entrepreneurship", "Marketing y Emprendimiento"],
    ["Tecnologia e Infraestrutura", "Technology and Infrastructure", "Tecnología e Infraestructura"],
    ["Gestão e Liderança", "Management and Leadership", "Gestión y Liderazgo"],
    ["Excel para Análise de Dados", "Excel for Data Analysis", "Excel para Análisis de Datos"],
    ["Power BI na Prática", "Power BI in Practice", "Power BI en la Práctica"],
    ["Introdução ao Python", "Introduction to Python", "Introducción a Python"],
    ["SQL para Análise de Dados", "SQL for Data Analysis", "SQL para Análisis de Datos"],
    ["IA Generativa na Prática", "Generative AI in Practice", "IA Generativa en la Práctica"],
    ["N8N e Automações", "N8N and Automations", "N8N y Automatizaciones"],
    ["IA para Negócios", "AI for Business", "IA para Negocios"],
    ["PCM com IA", "Maintenance Planning (PCM) with AI", "PCM con IA"],
    ["TBO: Treinamento Básico Operacional", "TBO: Basic Operational Training", "TBO: Capacitación Básica Operacional"],
    ["Cronoanálise", "Time Study", "Cronoanálisis"],
    ["Ferramentas da Qualidade", "Quality Tools", "Herramientas de la Calidad"],
    ["Metodologia A3", "A3 Methodology", "Metodología A3"],
    ["Gestão da Manutenção", "Maintenance Management", "Gestión del Mantenimiento"],
    ["VSM: Fluxo de Valor", "VSM: Value Stream Mapping", "VSM: Flujo de Valor"],
    ["Normas Regulamentadoras (geral)", "Safety Standards (general)", "Normas Reglamentarias (general)"],
    ["Interpretação de NRs", "Interpreting NRs", "Interpretación de NRs"],
    ["NR-5: CIPA", "NR-5: CIPA (Accident Prevention Committee)", "NR-5: CIPA"],
    ["NR-12: Máquinas e Equipamentos", "NR-12: Machinery and Equipment", "NR-12: Máquinas y Equipos"],
    ["NR-23: Brigada de Incêndio", "NR-23: Fire Brigade", "NR-23: Brigada de Incendio"],
    ["NR-1: Gerenciamento de Riscos", "NR-1: Risk Management", "NR-1: Gestión de Riesgos"],
    ["Marketing Digital na Prática", "Digital Marketing in Practice", "Marketing Digital en la Práctica"],
    ["Tráfego Pago", "Paid Traffic", "Tráfico Pago"],
    ["Gestão de Redes Sociais", "Social Media Management", "Gestión de Redes Sociales"],
    ["Empreendedores Amazônicos em Marketing", "Amazonian Entrepreneurs in Marketing", "Emprendedores Amazónicos en Marketing"],
    ["Técnico de Redes", "Network Technician", "Técnico de Redes"],
    ["Conscientização contra golpes cibernéticos", "Awareness against cyber scams", "Concientización contra estafas cibernéticas"],
    ["Instalador de CFTV IP e Coaxial", "IP and Coaxial CCTV Installer", "Instalador de CCTV IP y Coaxial"],
    ["Montagem e manutenção de computadores", "Computer assembly and maintenance", "Montaje y mantenimiento de computadoras"],
    ["Scrum e Metodologias Ágeis", "Scrum and Agile Methods", "Scrum y Metodologías Ágiles"],
    ["Gestão de Projetos", "Project Management", "Gestión de Proyectos"],
    ["Liderança e Gestão de Equipes", "Leadership and Team Management", "Liderazgo y Gestión de Equipos"],
    ["Comunicação e desenvolvimento profissional", "Communication and professional development", "Comunicación y desarrollo profesional"],
    // ---- Turmas
    ["Turmas abertas", "Open classes", "Grupos abiertos"],
    ["Próximos Treinamentos Rockstar", "Upcoming Rockstar Training", "Próximas Capacitaciones Rockstar"],
    ["Confira as turmas abertas, escolha o seu treinamento e faça a inscrição online. Depois da inscrição, um consultor entra em contato.", "Check the open classes, choose your course and sign up online. After signing up, a consultant will contact you.", "Consulte los grupos abiertos, elija su capacitación e inscríbase online. Después de la inscripción, un consultor se pondrá en contacto."],
    ["Desenvolvimento de Sistemas com IA (Lovable) – Iniciante", "Systems Development with AI (Lovable) – Beginner", "Desarrollo de Sistemas con IA (Lovable) – Principiante"],
    ["IA na Prática", "AI in Practice", "IA en la Práctica"],
    ["Claude Chat: Pensar e Decidir", "Claude Chat: Think and Decide", "Claude Chat: Pensar y Decidir"],
    ["Metrologia Básica", "Basic Metrology", "Metrología Básica"],
    ["TBO – Treinamento Básico Operacional", "TBO – Basic Operational Training", "TBO – Capacitación Básica Operacional"],
    ["Licitações e Contratos na Prática", "Public Tenders and Contracts in Practice", "Licitaciones y Contratos en la Práctica"],
    ["Online ao vivo", "Live online", "Online en vivo"],
    ["Turma planejada", "Planned class", "Grupo planificado"],
    ["Data a definir", "Date to be defined", "Fecha por definir"],
    ["Inscrever-se", "Sign up", "Inscribirse"],
    ["Quer um treinamento para a sua equipe? Montamos conteúdos sob medida para a realidade da sua empresa.", "Want training for your team? We build tailor-made content for your company's reality.", "¿Quiere una capacitación para su equipo? Armamos contenidos a medida para la realidad de su empresa."],
    ["Solicitar para minha equipe", "Request for my team", "Solicitar para mi equipo"],
    // ---- Cases
    ["Nossa experiência na prática", "Our hands-on experience", "Nuestra experiencia en la práctica"],
    ["Alguns dos tipos de projeto que já realizamos para indústrias, empresas e instituições públicas e privadas.", "Some of the types of projects we have delivered for industries, companies and public and private institutions.", "Algunos de los tipos de proyecto que ya realizamos para industrias, empresas e instituciones públicas y privadas."],
    ["Engenharia e Indústria", "Engineering and Industry", "Ingeniería e Industria"],
    ["Projetos arquitetônicos, de climatização e elétricos para ambientes corporativos e industriais", "Architectural, HVAC and electrical projects for corporate and industrial environments", "Proyectos arquitectónicos, de climatización y eléctricos para ambientes corporativos e industriales"],
    ["Treinamentos normativos em NR-23 e NR-5", "Regulatory training in NR-23 and NR-5", "Capacitaciones normativas en NR-23 y NR-5"],
    ["Cronoanálise e melhoria contínua: estudos de tempos e movimentos", "Time studies and continuous improvement: time and motion studies", "Cronoanálisis y mejora continua: estudios de tiempos y movimientos"],
    ["Análise de risco e responsabilidade técnica NR-12", "NR-12 risk analysis and technical responsibility", "Análisis de riesgo y responsabilidad técnica NR-12"],
    ["Dados e Inovação (IA)", "Data and Innovation (AI)", "Datos e Innovación (IA)"],
    ["IA Generativa para Engenharia e Power BI para Planejamento", "Generative AI for Engineering and Power BI for Planning", "IA Generativa para Ingeniería y Power BI para Planificación"],
    ["Dashboards em Python e análise de dados", "Python dashboards and data analysis", "Dashboards en Python y análisis de datos"],
    ["Capacitação corporativa em IA Generativa", "Corporate Generative AI training", "Capacitación corporativa en IA Generativa"],
    ["Business Intelligence e consultoria em banco de dados", "Business Intelligence and database consulting", "Business Intelligence y consultoría en bases de datos"],
    ["Setor Público e Projetos", "Public Sector and Projects", "Sector Público y Proyectos"],
    ["Diagnóstico organizacional e comercialização para a agricultura familiar", "Organizational diagnosis and sales strategy for family farming", "Diagnóstico organizacional y comercialización para la agricultura familiar"],
    ["Capacitação de empreendedores amazônicos, TBO e Metrologia", "Training of Amazonian entrepreneurs, TBO and Metrology", "Capacitación de emprendedores amazónicos, TBO y Metrología"],
    ["Mapeamento de processos, matriz de responsabilidade e plano de ação", "Process mapping, responsibility matrix and action plan", "Mapeo de procesos, matriz de responsabilidades y plan de acción"],
    ["Suporte na prospecção de editais de inovação e fomento", "Support in prospecting innovation and funding calls", "Apoyo en la prospección de convocatorias de innovación y fomento"],
    // ---- Depoimentos / caminhos
    ["Depoimentos", "Testimonials", "Testimonios"],
    ["O que dizem os participantes", "What participants say", "Lo que dicen los participantes"],
    ["Relatos reais de quem já participou dos treinamentos da Rockstar.", "Real accounts from people who have attended Rockstar training.", "Relatos reales de quienes ya participaron en las capacitaciones de Rockstar."],
    ["Diretor Comercial", "Sales Director", "Director Comercial"],
    ["Agente de Inovação", "Innovation Agent", "Agente de Innovación"],
    ["Participante", "Participant", "Participante"],
    ["Por onde você quer começar?", "Where would you like to start?", "¿Por dónde quiere empezar?"],
    ["Escolha o caminho que combina com o seu momento.", "Choose the path that fits your moment.", "Elija el camino que combina con su momento."],
    ["Quero fazer um treinamento", "I want to take a course", "Quiero hacer una capacitación"],
    ["Veja as turmas abertas, com data, carga horária, local e instrutor, e inscreva-se online.", "See the open classes, with date, hours, location and instructor, and sign up online.", "Vea los grupos abiertos, con fecha, carga horaria, lugar e instructor, e inscríbase online."],
    ["Ver turmas", "See classes", "Ver grupos"],
    ["Quero treinar a minha equipe", "I want to train my team", "Quiero capacitar a mi equipo"],
    ["Montamos treinamentos sob medida, com conteúdos práticos e focados na realidade do seu negócio.", "We build tailor-made training with practical content focused on the reality of your business.", "Armamos capacitaciones a medida, con contenidos prácticos y centrados en la realidad de su negocio."],
    ["Solicitar", "Request", "Solicitar"],
    ["Preciso de consultoria ou projeto", "I need consulting or a project", "Necesito consultoría o un proyecto"],
    ["Engenharia, processos, NRs, dados e IA: conte o desafio da sua operação e receba uma proposta sob medida.", "Engineering, processes, NRs, data and AI: tell us your operation's challenge and receive a tailored proposal.", "Ingeniería, procesos, NRs, datos e IA: cuéntenos el desafío de su operación y reciba una propuesta a medida."],
    // ---- Sobre
    ["Manaus · Região Norte · Brasil", "Manaus · North Region · Brazil", "Manaos · Región Norte · Brasil"],
    ["Processos em Performance, com gente que faz acontecer", "Processes in Performance, with people who make it happen", "Procesos en Performance, con gente que hace que suceda"],
    ["Conheça quem está por trás da Rockstar: direção, equipe e consultores parceiros unidos por um objetivo — transformar conhecimento em resultado para a sua empresa.", "Meet the people behind Rockstar: leadership, team and partner consultants united by one goal — turning knowledge into results for your company.", "Conozca a quienes están detrás de Rockstar: dirección, equipo y consultores aliados unidos por un objetivo: transformar conocimiento en resultados para su empresa."],
    ["Quem somos e nosso propósito", "Who we are and our purpose", "Quiénes somos y nuestro propósito"],
    ["A Rockstar é uma empresa dedicada a impulsionar o crescimento e a competitividade das organizações por meio de soluções corporativas inovadoras. Atuamos desde 2024 em consultoria, treinamentos e desenvolvimento de projetos, unindo conhecimento técnico, experiência prática e foco em resultados para apoiar empresas na melhoria de processos, desenvolvimento de pessoas, adequação normativa e aumento da eficiência operacional.", "Rockstar is a company dedicated to boosting the growth and competitiveness of organizations through innovative corporate solutions. Since 2024 we have worked in consulting, training and project development, combining technical knowledge, hands-on experience and a focus on results to help companies improve processes, develop people, meet regulations and increase operational efficiency.", "Rockstar es una empresa dedicada a impulsar el crecimiento y la competitividad de las organizaciones mediante soluciones corporativas innovadoras. Desde 2024 actuamos en consultoría, capacitaciones y desarrollo de proyectos, uniendo conocimiento técnico, experiencia práctica y foco en resultados para apoyar a las empresas en la mejora de procesos, el desarrollo de personas, la adecuación normativa y el aumento de la eficiencia operativa."],
    ["Nosso compromisso é entregar valor por meio de soluções personalizadas, contribuindo para negócios mais produtivos, seguros e preparados para os desafios do futuro.", "Our commitment is to deliver value through customized solutions, helping build businesses that are more productive, safer and ready for the challenges of the future.", "Nuestro compromiso es entregar valor mediante soluciones personalizadas, contribuyendo a negocios más productivos, seguros y preparados para los desafíos del futuro."],
    ["Missão", "Mission", "Misión"],
    ["Proporcionar soluções estratégicas que potencializem o desempenho de processos e talentos.", "To provide strategic solutions that boost the performance of processes and talent.", "Proporcionar soluciones estratégicas que potencien el desempeño de procesos y talentos."],
    ["Visão", "Vision", "Visión"],
    ["Ser referência em soluções, formando profissionais e empresas de alta performance.", "To be a benchmark in solutions, shaping high-performance professionals and companies.", "Ser referente en soluciones, formando profesionales y empresas de alto rendimiento."],
    ["Valores", "Values", "Valores"],
    ["Foco em Resultados", "Focus on Results", "Foco en Resultados"],
    ["Inovação Aplicada", "Applied Innovation", "Innovación Aplicada"],
    ["Excelência Operacional", "Operational Excellence", "Excelencia Operativa"],
    ["Desenvolvimento de Talentos", "Talent Development", "Desarrollo de Talentos"],
    ["Parceria Estratégica", "Strategic Partnership", "Alianza Estratégica"],
    ["Nossa Equipe", "Our Team", "Nuestro Equipo"],
    ["Gestão e comercial da Rockstar, apoiados por consultores parceiros organizados por área de atuação.", "Rockstar's management and sales team, supported by partner consultants organized by field.", "Gestión y área comercial de Rockstar, apoyados por consultores aliados organizados por área de actuación."],
    ["Direção e Gestão", "Leadership and Management", "Dirección y Gestión"],
    ["Comercial e Atendimento", "Sales and Customer Service", "Comercial y Atención"],
    ["Marketing e Mídias", "Marketing and Media", "Marketing y Medios"],
    ["Consultores · Dados e TI", "Consultants · Data and IT", "Consultores · Datos y TI"],
    ["Consultores · Inovação e Qualidade", "Consultants · Innovation and Quality", "Consultores · Innovación y Calidad"],
    ["Consultores · Processos e Manutenção", "Consultants · Processes and Maintenance", "Consultores · Procesos y Mantenimiento"],
    ["Consultores · Segurança e Saúde", "Consultants · Safety and Health", "Consultores · Seguridad y Salud"],
    ["Diretor e Consultor de Processos", "Director and Process Consultant", "Director y Consultor de Procesos"],
    ["Coordenadora Geral", "General Coordinator", "Coordinadora General"],
    ["Gerente de Operações e Negócios", "Operations and Business Manager", "Gerente de Operaciones y Negocios"],
    ["Consultor do Pará", "Pará Consultant", "Consultor de Pará"],
    ["Consultor de Licitações e Negócios", "Tenders and Business Consultant", "Consultor de Licitaciones y Negocios"],
    ["Consultor Comercial", "Sales Consultant", "Consultor Comercial"],
    ["Atendimento", "Customer Service", "Atención"],
    ["Coordenador de Marketing", "Marketing Coordinator", "Coordinador de Marketing"],
    ["Mídias Sociais", "Social Media", "Redes Sociales"],
    ["Consultor de Dados", "Data Consultant", "Consultor de Datos"],
    ["Consultor de TI (Infraestrutura e Cibersegurança)", "IT Consultant (Infrastructure and Cybersecurity)", "Consultor de TI (Infraestructura y Ciberseguridad)"],
    ["Consultor de Inovação e IA", "Innovation and AI Consultant", "Consultor de Innovación e IA"],
    ["Consultor de Qualidade e Instrumentação", "Quality and Instrumentation Consultant", "Consultor de Calidad e Instrumentación"],
    ["Instrutor", "Instructor", "Instructor"],
    ["Consultor de Processos Industriais", "Industrial Process Consultant", "Consultor de Procesos Industriales"],
    ["Consultor de Processos", "Process Consultant", "Consultor de Procesos"],
    ["Consultor de Manutenção e PCM", "Maintenance and PCM Consultant", "Consultor de Mantenimiento y PCM"],
    ["Consultor de Segurança do Trabalho", "Occupational Safety Consultant", "Consultor de Seguridad Laboral"],
    ["Psicólogo Organizacional", "Organizational Psychologist", "Psicólogo Organizacional"],
    // ---- Recursos / FAQ
    ["Gratuito · Cadastro rápido", "Free · Quick sign-up", "Gratuito · Registro rápido"],
    ["Materiais exclusivos", "Exclusive materials", "Materiales exclusivos"],
    ["Guias e manuais práticos da Rockstar para você aplicar na sua empresa. Faça um cadastro rápido e receba o acesso.", "Practical Rockstar guides and manuals for you to apply in your company. Sign up quickly and get access.", "Guías y manuales prácticos de Rockstar para aplicar en su empresa. Haga un registro rápido y reciba el acceso."],
    ["Guia: como criar um agente de IA no WhatsApp", "Guide: how to build an AI agent on WhatsApp", "Guía: cómo crear un agente de IA en WhatsApp"],
    ["Passo a passo completo, do zero ao agente no ar: 9 etapas, prompts prontos, checklist de testes e boas práticas de segurança e LGPD.", "Complete step-by-step, from zero to a live agent: 9 stages, ready-made prompts, a testing checklist and security and data-protection (LGPD) best practices.", "Paso a paso completo, de cero al agente en línea: 9 etapas, prompts listos, checklist de pruebas y buenas prácticas de seguridad y LGPD."],
    ["Quero receber", "I want to receive it", "Quiero recibirlo"],
    ["Pacote de 5 prompts de análise e diagnóstico", "Pack of 5 analysis and diagnosis prompts", "Paquete de 5 prompts de análisis y diagnóstico"],
    ["Cinco prompts prontos para usar com IA: análise de Instagram, diagnóstico de processo, ata de reunião em plano de ação, olhar crítico para planilha ou painel e roteiro de feedback.", "Five ready-to-use AI prompts: Instagram analysis, process diagnosis, turning meeting minutes into an action plan, a critical review of a spreadsheet or dashboard, and a feedback script.", "Cinco prompts listos para usar con IA: análisis de Instagram, diagnóstico de procesos, acta de reunión en plan de acción, mirada crítica de una planilla o panel y guion de feedback."],
    ["Perguntas frequentes", "Frequently asked questions", "Preguntas frecuentes"],
    ["Respostas diretas sobre os serviços, os treinamentos e a forma de trabalho da Rockstar.", "Straight answers about Rockstar's services, training and way of working.", "Respuestas directas sobre los servicios, las capacitaciones y la forma de trabajo de Rockstar."],
    ["Quais áreas a Rockstar atende?", "Which areas does Rockstar cover?", "¿Qué áreas atiende Rockstar?"],
    ["Atuamos em engenharia e projetos, inovação e inteligência artificial, gestão de processos e melhoria contínua, segurança do trabalho e NRs, capacitações industriais e empreendedoras, e TI, análise de dados e BI.", "We work in engineering and projects, innovation and artificial intelligence, process management and continuous improvement, occupational safety and NRs, industrial and entrepreneurial training, and IT, data analysis and BI.", "Actuamos en ingeniería y proyectos, innovación e inteligencia artificial, gestión de procesos y mejora continua, seguridad laboral y NRs, capacitaciones industriales y emprendedoras, y TI, análisis de datos y BI."],
    ["Os treinamentos são presenciais ou online?", "Is the training in person or online?", "¿Las capacitaciones son presenciales u online?"],
    ["Os dois formatos existem. Os presenciais acontecem em Manaus, Boa Vista e Belém, e os online atendem todo o território nacional. Cada turma indica o formato, a data e o local.", "Both formats exist. In-person classes take place in Manaus, Boa Vista and Belém, and online classes serve all of Brazil. Each class lists its format, date and location.", "Existen los dos formatos. Los presenciales se realizan en Manaos, Boa Vista y Belém, y los online atienden a todo el territorio nacional. Cada grupo indica el formato, la fecha y el lugar."],
    ["Como me inscrevo em uma turma aberta?", "How do I sign up for an open class?", "¿Cómo me inscribo en un grupo abierto?"],
    ["Escolha o treinamento em Próximos Treinamentos e clique em Inscrever-se. Depois da inscrição, um consultor entra em contato.", "Choose the course under Upcoming Training and click Sign up. After signing up, a consultant will contact you.", "Elija la capacitación en Próximas Capacitaciones y haga clic en Inscribirse. Después de la inscripción, un consultor se pondrá en contacto."],
    ["Posso contratar um treinamento só para a minha empresa?", "Can I hire training just for my company?", "¿Puedo contratar una capacitación solo para mi empresa?"],
    ["Sim. Montamos soluções personalizadas para desenvolver o seu time, com conteúdos práticos e focados na realidade do seu negócio. Fale com a gente pelo WhatsApp ou pelo formulário de contato.", "Yes. We build customized solutions to develop your team, with practical content focused on the reality of your business. Reach us on WhatsApp or through the contact form.", "Sí. Armamos soluciones personalizadas para desarrollar a su equipo, con contenidos prácticos y centrados en la realidad de su negocio. Escríbanos por WhatsApp o por el formulario de contacto."],
    ["Como funciona um projeto de consultoria?", "How does a consulting project work?", "¿Cómo funciona un proyecto de consultoría?"],
    ["Seguimos a Metodologia Rockstar em quatro etapas: diagnóstico inicial, planejamento estratégico, implementação com acompanhamento rigoroso e avaliação dos impactos e da sustentabilidade da mudança.", "We follow the Rockstar Method in four stages: initial diagnosis, strategic planning, implementation with close monitoring, and evaluation of the impact and sustainability of the change.", "Seguimos la Metodología Rockstar en cuatro etapas: diagnóstico inicial, planificación estratégica, implementación con seguimiento riguroso y evaluación de los impactos y de la sostenibilidad del cambio."],
    ["Como falo com a equipe?", "How do I reach the team?", "¿Cómo hablo con el equipo?"],
    ["Pelo WhatsApp +55 92 99263-7236, pelo e-mail rockstar@rockstarbr.com ou pessoalmente em Manaus: Parque 10, 1003, Sala 101, Rua do Comércio.", "By WhatsApp +55 92 99263-7236, by e-mail at rockstar@rockstarbr.com, or in person in Manaus: Parque 10, 1003, Room 101, Rua do Comércio.", "Por WhatsApp +55 92 99263-7236, por e-mail a rockstar@rockstarbr.com o en persona en Manaos: Parque 10, 1003, Sala 101, Rua do Comércio."],
    // ---- Contato / rodapé
    ["Vamos conversar sobre o desafio da sua empresa?", "Shall we talk about your company's challenge?", "¿Conversamos sobre el desafío de su empresa?"],
    ["Conte o que você precisa e a nossa equipe retorna com uma proposta sob medida.", "Tell us what you need and our team will get back with a tailored proposal.", "Cuéntenos lo que necesita y nuestro equipo responde con una propuesta a medida."],
    ["Nome", "Name", "Nombre"],
    ["Empresa", "Company", "Empresa"],
    ["Mensagem", "Message", "Mensaje"],
    ["Concordo com a", "I agree to the", "Acepto la"],
    ["Política de Privacidade", "Privacy Policy", "Política de Privacidad"],
    ["Enviar", "Send", "Enviar"],
    ["Fale com a Rockstar", "Talk to Rockstar", "Hable con Rockstar"],
    ["Endereço", "Address", "Dirección"],
    ["Parque 10, 1003, Sala 101, Rua do Comércio — Manaus – Amazonas", "Parque 10, 1003, Room 101, Rua do Comércio — Manaus – Amazonas", "Parque 10, 1003, Sala 101, Rua do Comércio — Manaos – Amazonas"],
    ["Onde atendemos", "Where we serve", "Dónde atendemos"],
    ["Presencial:", "In person:", "Presencial:"],
    ["Online:", "Online:", "Online:"],
    ["todo o Brasil", "all of Brazil", "todo Brasil"],
    ["Região Norte:", "North Region:", "Región Norte:"],
    ["projetos e consultorias sob consulta", "projects and consulting on request", "proyectos y consultorías a consultar"],
    ["Para combinar horário de atendimento ou uma visita, chame a gente no WhatsApp.", "To arrange a time or a visit, message us on WhatsApp.", "Para acordar un horario de atención o una visita, escríbanos por WhatsApp."],
    ["Consultoria, treinamentos e soluções para empresas de alta performance. Menos teoria. Mais resultado.", "Consulting, training and solutions for high-performance companies. Less theory. More results.", "Consultoría, capacitaciones y soluciones para empresas de alto rendimiento. Menos teoría. Más resultados."],
    ["Navegação", "Navigation", "Navegación"],
    ["Início", "Home", "Inicio"],
    ["Próximos Treinamentos", "Upcoming Training", "Próximas Capacitaciones"],
    ["Parque 10, 1003, Sala 101, Rua do Comércio, Manaus – AM", "Parque 10, 1003, Room 101, Rua do Comércio, Manaus – AM", "Parque 10, 1003, Sala 101, Rua do Comércio, Manaos – AM"],
    ["Rockstar Consultoria, Treinamentos e Soluções. Todos os direitos reservados.", "Rockstar Consulting, Training and Solutions. All rights reserved.", "Rockstar Consultoría, Capacitaciones y Soluciones. Todos los derechos reservados."],
    // ---- Atributos
    ["Rockstar – Consultoria, Treinamentos e Soluções", "Rockstar – Consulting, Training and Solutions", "Rockstar – Consultoría, Capacitaciones y Soluciones"],
    ["Rockstar Consultoria, Treinamentos e Soluções", "Rockstar Consulting, Training and Solutions", "Rockstar Consultoría, Capacitaciones y Soluciones"],
    ["Principal", "Main", "Principal"],
    ["Abrir menu", "Open menu", "Abrir menú"],
    ["Engenharia e Serviços", "Engineering and Services", "Ingeniería y Servicios"],
    ["Materiais e IA", "Materials and AI", "Materiales e IA"],
    ["Cases e experiência", "Cases and experience", "Casos y experiencia"],
    ["Rolar", "Scroll", "Desplazar"],
    ["Turma em treinamento Rockstar", "Rockstar training class", "Grupo en capacitación Rockstar"],
    ["Participantes em treinamento", "Training participants", "Participantes en capacitación"],
    ["Atividade prática em treinamento", "Hands-on training activity", "Actividad práctica en capacitación"],
    ["Turma reunida durante o curso", "Class gathered during the course", "Grupo reunido durante el curso"],
    ["Treinamento com instrutor", "Training with instructor", "Capacitación con instructor"],
    ["Instrutor conduzindo capacitação", "Instructor leading a training session", "Instructor dirigiendo una capacitación"],
    ["Anterior", "Previous", "Anterior"],
    ["Próximo", "Next", "Siguiente"],
    ["Seu nome", "Your name", "Su nombre"],
    ["voce@empresa.com", "you@company.com", "usted@empresa.com"],
    ["Nome da empresa", "Company name", "Nombre de la empresa"],
    ["Conte o desafio da sua operação", "Tell us your operation's challenge", "Cuéntenos el desafío de su operación"],
    ["Mapa: Rua do Comércio, Manaus – AM", "Map: Rua do Comércio, Manaus – AM", "Mapa: Rua do Comércio, Manaos – AM"],
    ["Rodapé", "Footer", "Pie de página"],
    ["Falar no WhatsApp", "Chat on WhatsApp", "Hablar por WhatsApp"],
    ["Rockstar – Consultoria, Treinamentos e Soluções", "Rockstar – Consulting, Training and Solutions", "Rockstar – Consultoría, Capacitaciones y Soluciones"],
    ["Processos, pessoas e tecnologia para a sua operação render mais. Consultoria, treinamentos e soluções em engenharia, gestão, segurança do trabalho, dados e IA.", "Processes, people and technology to make your operation perform better. Consulting, training and solutions in engineering, management, occupational safety, data and AI.", "Procesos, personas y tecnología para que su operación rinda más. Consultoría, capacitaciones y soluciones en ingeniería, gestión, seguridad laboral, datos e IA."],
    // ---- Mensagens dinâmicas
    ["Obrigado! Abrimos o WhatsApp com a sua mensagem pronta para enviar.", "Thank you! We opened WhatsApp with your message ready to send.", "¡Gracias! Abrimos WhatsApp con su mensaje listo para enviar."],
    ["Olá, Rockstar! Sou", "Hello, Rockstar! I am", "¡Hola, Rockstar! Soy"],
    ["Política de Privacidade (disponível em português)", "Privacy Policy (available in Portuguese)", "Política de Privacidad (disponible en portugués)"]
  ];

  (window.RS_EXTRA || []).forEach(r => ROWS.push(r));
  const LANGS = ['pt', 'en', 'es'];
  const dict = { en: {}, es: {} };
  ROWS.forEach(r => { dict.en[r[0]] = r[1]; dict.es[r[0]] = r[2]; });

  // Padrões numéricos (horas e datas dos cursos)
  const rules = {
    en: [[/^(\d+) horas$/, '$1 hours'], [/^(\d{2}\/\d{2}\/\d{4}) a (\d{2}\/\d{2}\/\d{4})$/, '$1 to $2']],
    es: [[/^(\d+) horas$/, '$1 horas'], [/^(\d{2}\/\d{2}\/\d{4}) a (\d{2}\/\d{2}\/\d{4})$/, '$1 al $2']]
  };
  const X = window.RS_RULES || {};
  ['en', 'es'].forEach(l => (X[l] || []).forEach(r => rules[l].push(r)));
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const tr = (pt, lang) => {
    if (lang === 'pt') return pt;
    const d = dict[lang][pt];
    if (d) return d;
    for (const [re, to] of rules[lang]) if (re.test(pt)) return pt.replace(re, to);
    return pt;
  };

  const ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  let lang = 'pt';

  function applyNode(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        const p = n.parentElement;
        if (!p || p.closest('script,style,noscript,#privacy')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      if (n.__pt === undefined) n.__pt = n.nodeValue;
      const key = norm(n.__pt);
      const out = tr(key, lang);
      const lead = n.__pt.match(/^\s*/)[0], trail = n.__pt.match(/\s*$/)[0];
      const v = out === key ? n.__pt : lead + out + trail;
      if (n.nodeValue !== v) n.nodeValue = v;
    });
    const els = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : [];
    els.forEach(el => {
      if (el.closest('#privacy')) return;
      ATTRS.forEach(a => {
        if (!el.hasAttribute(a)) return;
        const k = '__pt_' + a;
        if (el[k] === undefined) el[k] = el.getAttribute(a);
        const v = tr(norm(el[k]), lang);
        if (el.getAttribute(a) !== v) el.setAttribute(a, v);
      });
    });
  }

  const meta = document.querySelector('meta[name="description"]');
  const ptDesc = meta && meta.content;
  function setLang(l, save = true) {
    if (!LANGS.includes(l)) l = 'pt';
    lang = l;
    window.RS_LANG = l;
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : l;
    applyNode(document.body);
    if (meta) meta.content = tr(norm(ptDesc), l);
    const title = {
      pt: 'Rockstar – Consultoria, Treinamentos e Soluções',
      en: 'Rockstar – Consulting, Training and Solutions',
      es: 'Rockstar – Consultoría, Capacitaciones y Soluciones'
    };
    document.title = title[l];
    document.querySelectorAll('.lang-btn').forEach(b => {
      const on = b.dataset.lang === l;
      b.classList.toggle('on', on); b.setAttribute('aria-pressed', on);
    });
    const note = document.getElementById('privNote');
    if (note) {
      note.hidden = l === 'pt';
      note.textContent = l === 'en'
        ? 'This policy is provided in Portuguese, as it is governed by Brazilian law (LGPD).'
        : 'Esta política se ofrece en portugués, ya que se rige por la legislación brasileña (LGPD).';
    }
    if (save) { try { localStorage.setItem('rs-lang', l); } catch (e) {} }
  }

  // Traduz conteúdo criado depois (abas, etc.)
  new MutationObserver(ms => {
    if (lang === 'pt') return;
    ms.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType === 1) applyNode(n);
      else if (n.nodeType === 3 && n.parentElement) applyNode(n.parentElement);
    }));
  }).observe(document.body, { childList: true, subtree: true });

  document.addEventListener('click', e => {
    const b = e.target.closest('.lang-btn');
    if (b) setLang(b.dataset.lang);
  });

  window.RS_T = pt => tr(norm(pt), lang);

  let start = 'pt';
  try { start = localStorage.getItem('rs-lang'); } catch (e) {}
  // Padrão é sempre português; só muda se o visitante escolheu outro idioma nos botões.
  if (!start || !LANGS.includes(start)) start = 'pt';
  window.RS_LANG = 'pt';
  setLang(start, false);
})();
