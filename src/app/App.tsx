import * as React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const portfolioAlbumUrl = 'https://www.artstation.com/caisantos/albums/14969340';
const pierInstagramUrl = 'https://www.instagram.com/pierstudiocriativo/';

const projects = [
    {
        id: 'one-innovation',
        type: 'Arquitetura / Interativo / Experiência Física',
        title: 'One Innovation — Tour Interativo de Apartamento',
        shortTitle: 'One Innovation',
        client: 'One Innovation',
        artstation: 'https://www.artstation.com/artwork/4N52v8',
        videos: ['https://www.youtube.com/watch?v=ce0EHMYvRPU'],
        images: ['/One/one1.webp', '/One/one2.webp', '/One/one3.webp'],
        description: [
            'Este projeto foi desenvolvido para a construtora One Innovation, com foco no lançamento do empreendimento Nex One: Parque Augusta, um condomínio residencial composto por studios e apartamentos de dois dormitórios.',
            'A proposta consistiu na criação de um tour virtual interativo de um apartamento de 40 m², ampliando as possibilidades de apresentação do espaço em relação ao decorado físico de 26 m² existente no lançamento.',
            'Inicialmente concebido para realidade virtual, o projeto foi adaptado para um totem físico com computador, televisão e controle de PlayStation 5 DualSense, favorecendo uma experiência coletiva, intuitiva e com maior qualidade gráfica.',
        ],
        highlights: [
            'Tour interativo em apartamento de 40 m²',
            'Experiência adaptada para totem físico',
            'Controle DualSense e navegação gamificada',
        ],
    },
    {
        id: 'gc-engenharia',
        type: 'VR / Web / Interiores',
        title: 'GC Engenharia — Tour Virtual para Apartamento de Alto Padrão',
        shortTitle: 'GC Engenharia',
        client: 'GC Engenharia',
        artstation: 'https://www.artstation.com/artwork/0lybaw',
        videos: ['https://www.youtube.com/watch?v=s6kVzKRhMx0', 'https://youtu.be/4vpRm1ACghw'],
        images: ['/GC/gc1.jpg', '/GC/gc2.png', '/GC/gc3.jpg', '/GC/gc4.png', '/GC/gc5.jpg', '/GC/gc6.png'],
        description: [
            'Projeto desenvolvido para a GC Engenharia, com objetivo de proporcionar uma experiência imersiva e realista dos ambientes de sala de estar e cozinha de um apartamento de alto padrão.',
            'O escopo foi direcionado a esses dois espaços devido a um estudo de design proposto pelo arquiteto e designer de interiores, auxiliando na validação de harmonia, funcionalidade e decisões antes da execução.',
            'A experiência foi desenvolvida tanto para realidade virtual quanto para streaming via nuvem/web, permitindo acesso em diferentes dispositivos, como PCs e smartphones, desde que haja conexão estável com a internet.',
        ],
        highlights: [
            'Ambientes internos de alto padrão',
            'VR e streaming via nuvem/web',
            'Apoio à decisão antes da execução',
        ],
    },
    {
        id: 'construpoli',
        type: 'Twinmotion / Imobiliário / Interativo',
        title: 'Construpoli — Residência Interativa em Itupeva',
        shortTitle: 'Construpoli',
        client: 'Construpoli',
        artstation: 'https://www.artstation.com/artwork/oAGa6L',
        videos: ['https://youtu.be/mJ8ttioskoI'],
        images: [
            '/Constru/constru1.png',
            '/Constru/constru2.jpg',
            '/Constru/constru3.png',
            '/Constru/constru4.png',
            '/Constru/constru5.png',
            '/Constru/constru6.png',
            '/Constru/constru7.png',
        ],
        description: [
            'Projeto desenvolvido para a construtora Construpoli, localizado na cidade de Itupeva, com foco na apresentação de uma residência unifamiliar em bairro residencial.',
            'A proposta foi apresentar ao potencial comprador diferentes soluções de design aplicáveis ao imóvel por meio de um tour virtual interativo, com variações estéticas e funcionais do espaço.',
            'O projeto foi desenvolvido no Twinmotion, explorando navegação em modo aéreo e modo pedestre, controle de iluminação, variações de mobiliário e alterações de materiais como pisos e revestimentos.',
        ],
        highlights: [
            'Navegação em modo drone e pedestre',
            'Controle de iluminação em tempo real',
            'Variações de mobiliário e materiais',
        ],
    },
    {
        id: 'mexhibit',
        type: 'Tour Virtual / Web / Eventos',
        title: 'Mexhibit — Tour Virtual para Eventos',
        shortTitle: 'Mexhibit Grupo Expositor',
        client: 'Mexhibit Grupo Expositor',
        artstation: 'https://www.artstation.com/artwork/vbPDOD',
        videos: ['https://www.youtube.com/watch?v=4e0Ueg4ag0Y'],
        images: ['/Mexhibit/mexhibit1.webp'],
        description: [
            'Projeto desenvolvido para a Mexhibit Grupo Expositor, com foco na criação de uma experiência virtual acessível e de rápida navegação.',
            'A solução consistiu em um tour virtual baseado em imagens 360°, disponibilizado diretamente na web, com navegação fluida e intuitiva semelhante a plataformas como Google Maps.',
            'O tour permitiu apresentar a disposição estratégica dos estandes dentro do galpão do evento, transmitindo com maior precisão a escala e dimensão real do espaço para apoiar a tomada de decisão dos expositores.',
        ],
        highlights: [
            'Tour 360° acessível via web',
            'Navegação rápida e intuitiva',
            'Visualização estratégica de estandes',
        ],
    },
    {
        id: 'stein',
        type: 'VR / Interativo / Produto',
        title: 'Stein — Motorhome Interativo em Realidade Virtual',
        shortTitle: 'Stein Motorhomes',
        client: 'Stein – Projetos Interiores & Motorhomes',
        artstation: 'https://www.artstation.com/artwork/bgQZqG',
        videos: ['https://www.youtube.com/watch?v=ERO6MITCR6o'],
        images: ['/Stein/stein1.png'],
        description: [
            'Projeto desenvolvido para a Stein – Projetos Interiores & Motorhomes, aplicado à customização de uma van padrão V12 convertida em motorhome.',
            'O objetivo foi proporcionar uma experiência imersiva em realidade virtual, permitindo ao cliente compreender com precisão as proporções externas e internas do veículo.',
            'O projeto incorpora interações para personalização de pintura, bancos, mesa e materiais do piso, além de animações funcionais como abertura de portas, armários e acionamento do toldo integrado à escada.',
        ],
        highlights: [
            'Customização interativa de motorhome',
            'Troca de pintura, materiais e mobiliário',
            'Animações funcionais e ergonomia',
        ],
    },
];

function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
    const [current, setCurrent] = React.useState(0);
    const hasMultipleImages = images.length > 1;

    const previous = () => {
        setCurrent((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    };

    const next = () => {
        setCurrent((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    };

    return (
        <div className="relative h-[300px] overflow-hidden rounded-[26px] bg-[#111]/5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:h-[420px] lg:h-[560px]">
            <ImageWithFallback
                key={images[current]}
                src={images[current]}
                alt={`${title} — imagem ${current + 1}`}
                className="h-full w-full object-contain"
            />

            {hasMultipleImages && (
                <>
                    <button
                        type="button"
                        onClick={previous}
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-white hover:scale-105 sm:left-5 sm:h-12 sm:w-12"
                        aria-label="Imagem anterior"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-white hover:scale-105 sm:right-5 sm:h-12 sm:w-12"
                        aria-label="Próxima imagem"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/88 px-4 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.10)]">
                        {images.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === current ? 'w-7 bg-[#7FA8BC]' : 'w-2.5 bg-[#7FA8BC]/35'
                                    }`}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <div
                className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.10)]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
                {current + 1} / {images.length}
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-[#7FA8BC]/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
                <a href="#topo" className="flex items-center gap-3">
                    <img src="/logopier.png?v=5" alt="Pier" className="h-9 w-auto" />
                    <span
                        className="hidden text-xs uppercase tracking-[0.25em] text-white/80 sm:block"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                        Portfólio 3D
                    </span>
                </a>

                <nav className="hidden items-center gap-7 lg:flex">
                    <a href="#sobre" className="text-sm text-white/88 transition hover:text-white">
                        Sobre
                    </a>
                    <a href="#projetos" className="text-sm text-white/88 transition hover:text-white">
                        Projetos
                    </a>
                    <a href="#diferenciais" className="text-sm text-white/88 transition hover:text-white">
                        Diferenciais
                    </a>
                    <a href="#contato" className="text-sm text-white/88 transition hover:text-white">
                        Contato
                    </a>
                </nav>

                <a
                    href={pierInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#6D99AF] shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition hover:-translate-y-[1px]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                >
                    Pier ↗
                </a>
            </div>
        </header>
    );
}

export default function App() {
    return (
        <div id="topo" className="min-h-screen overflow-x-hidden bg-[#ECE7DF] text-[#222]">
            <Header />

            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden bg-[#7FA8BC]" id="topo">
                {/* fundo desktop: 75% azul / 25% bege */}
                <div className="absolute inset-y-0 left-0 hidden w-[75%] bg-[#7FA8BC] md:block" />
                <div className="absolute inset-y-0 right-0 hidden w-[25%] bg-[#EDE6DA] md:block" />

                {/* fundo mobile */}
                <div className="absolute inset-0 bg-[#7FA8BC] md:hidden" />

                {/* bloco decorativo */}
                <div className="absolute bottom-0 left-0 h-[24%] w-[55%] rounded-tr-[54px] bg-[#D9CFC0]/35 sm:w-[38%]" />

                {/* conteúdo texto: preso nos primeiros 50% */}
                <div className="relative z-10 flex min-h-screen items-center px-5 pt-24 sm:px-8 lg:px-14">
                    <div className="w-full md:w-1/2">
                        <div
                            className="mb-7 text-xs uppercase tracking-[0.45em] text-white/80"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            Portfólio 3D
                        </div>

                        <h1
                            className="text-[4rem] leading-[0.92] text-white sm:text-[5.8rem] lg:text-[6.5rem] xl:text-[7rem]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Experiências
                            <br />
                            visuais
                            <br />
                            imersivas
                        </h1>

                        <div className="mt-9 h-px w-24 bg-white/45" />

                        <p
                            className="mt-9 max-w-2xl text-lg leading-[1.85] text-white/90 sm:text-xl"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            Apresentação de projetos, produtos e espaços com linguagem visual sofisticada,
                            imersiva e estratégica.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#projetos"
                                className="rounded-full bg-white px-7 py-4 text-center text-sm uppercase tracking-[0.17em] text-[#6D99AF] shadow-[0_16px_34px_rgba(0,0,0,0.12)] transition hover:-translate-y-[2px]"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                                Ver projetos
                            </a>

                            <a
                                href={portfolioAlbumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/45 px-7 py-4 text-center text-sm uppercase tracking-[0.17em] text-white transition hover:bg-white/12"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                            >
                                ArtStation ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* DESKTOP: Pier no bloco 50%-75%, Caique no bloco 75%-100% */}
                <div className="pointer-events-none absolute inset-0 z-20 hidden md:block animate-[collabSlide_900ms_ease-out_both]">
                    {/* Pier: coluna de 25% azul */}
                    <div className="absolute left-1/2 top-1/2 flex w-1/4 -translate-y-1/2 justify-center">
                        <img
                            src="/logopier.png?v=5"
                            alt="Pier"
                            className="pointer-events-auto w-[150px] brightness-0 invert lg:w-[190px] xl:w-[230px]"
                        />
                    </div>

                    {/* X: fixado em 75% */}
                    <div
                        className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.8rem] leading-none lg:text-[5.8rem]"
                        style={{
                            fontFamily: 'Crimson Text, serif',
                            fontWeight: 700,
                            background: 'linear-gradient(to right, #ffffff 50%, #6D99AF 50%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 6px 18px rgba(0,0,0,0.10)',
                        }}
                    >
                        ×
                    </div>

                    {/* Caique: coluna de 25% bege */}
                    <div className="absolute right-0 top-1/2 flex w-1/4 -translate-y-1/2 justify-center">
                        <div className="pointer-events-auto text-left">
                            <div
                                className="text-[2.4rem] leading-none text-[#6D99AF] lg:text-[3.2rem] xl:text-[3.8rem]"
                                style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                            >
                                Caique
                                <br />
                                Santos
                            </div>

                            <div
                                className="mt-4 text-[0.68rem] uppercase tracking-[0.36em] text-[#6D99AF]/80 lg:text-[0.78rem]"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                            >
                                Modelagem 3D
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div className="relative z-20 mx-auto flex w-full max-w-sm flex-col items-center gap-4 px-5 pb-16 text-center md:hidden animate-[collabSlide_900ms_ease-out_both]">
                    <img
                        src="/logopier.png?v=5"
                        alt="Pier"
                        className="w-[155px] brightness-0 invert"
                    />

                    <div
                        className="text-[2.4rem] leading-none text-white/90"
                        style={{ fontFamily: 'Crimson Text, serif', fontWeight: 700 }}
                    >
                        ×
                    </div>

                    <div>
                        <div
                            className="text-[2.4rem] leading-none text-white"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Caique Santos
                        </div>

                        <div
                            className="mt-3 text-[0.72rem] uppercase tracking-[0.38em] text-white/75"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            Modelagem 3D
                        </div>
                    </div>
                </div>
            </section>

            {/* SOBRE */}
            <section id="sobre" className="relative bg-[#F4F0E8] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                    <div className="relative min-h-[420px] overflow-hidden rounded-[34px] lg:min-h-[720px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
                            alt="Ambiente de criação"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center rounded-[34px] bg-white px-7 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:px-12 lg:px-16">
                        <div
                            className="mb-5 text-xs uppercase tracking-[0.35em] text-[#7FA8BC]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                            Sobre a colaboração
                        </div>

                        <h2
                            className="max-w-2xl text-[3rem] leading-[1] text-[#222] sm:text-[4.5rem]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Estratégia, estética e experiência.
                        </h2>

                        <div
                            className="mt-8 grid gap-5 text-base leading-[1.85] text-[#555] sm:text-lg"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            <p>
                                A Pier é um estúdio de criação estratégica focado em desenvolver experiências
                                visuais que fortalecem a comunicação de marcas e projetos.
                            </p>
                            <p>
                                Em colaboração com <strong style={{ fontWeight: 600 }}>Caique Santos</strong>,
                                especialista em modelagem 3D e experiências interativas, desenvolvemos soluções
                                que combinam estética, tecnologia e estratégia.
                            </p>
                            <p>
                                Essa parceria transforma projetos em experiências digitais que facilitam a compreensão,
                                aumentam o engajamento e potencializam a tomada de decisão.
                            </p>
                        </div>

                        <div className="mt-9 grid gap-3 sm:grid-cols-2">
                            {['Realidade virtual', 'Tours interativos', 'Apresentação de produtos', 'Arquitetura e espaços'].map((text) => (
                                <div
                                    key={text}
                                    className="rounded-full bg-[#7FA8BC]/85 px-5 py-3 text-center text-xs uppercase tracking-[0.14em] text-white"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MENU PROJETOS */}
            <section id="projetos" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
                <div className="absolute bottom-0 right-0 h-[38%] w-[42%] rounded-tl-[54px] bg-[#E8E0D4]" />

                <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                    <div>
                        <div
                            className="mb-6 text-xs uppercase tracking-[0.38em] text-[#7FA8BC]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                            Menu do portfólio
                        </div>

                        <h2
                            className="text-[3.5rem] leading-[0.94] text-[#222] sm:text-[5rem]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 700 }}
                        >
                            Projetos
                            <br />
                            selecionados
                        </h2>

                        <p
                            className="mt-8 max-w-xl text-lg leading-[1.8] text-[#5F5F5F]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            Navegue pelos projetos e explore imagens, vídeos e links completos de apresentação.
                        </p>
                    </div>

                    <div className="rounded-b-[30px] bg-[#F4F0E8] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-10">
                        <div className="grid gap-4">
                            {projects.map((project, index) => (
                                <a
                                    key={project.id}
                                    href={`#${project.id}`}
                                    className="group flex items-center justify-between rounded-full bg-[#7FA8BC]/82 px-5 py-4 text-white transition-all duration-300 hover:bg-[#7FA8BC] hover:translate-x-1 sm:px-7"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                >
                                    <span className="text-xs uppercase tracking-[0.12em] sm:text-sm">
                                        {(index + 1 < 9 ? '0' : '') + String(index + 1)} — {project.shortTitle}
                                    </span>
                                    <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                                        ↓
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJETOS */}
            <div className="bg-[#ECE7DF]">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            id={project.id}
                            key={project.id}
                            className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-14 lg:py-28 ${isEven ? 'bg-[#F4F0E8]' : 'bg-white'
                                }`}
                        >
                            <div className="mx-auto max-w-7xl">
                                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="inline-flex w-fit items-center rounded-full bg-[#7FA8BC] px-5 py-2.5">
                                        <span
                                            className="text-xs uppercase tracking-[0.18em] text-white"
                                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                        >
                                            {project.type}
                                        </span>
                                    </div>

                                    <div
                                        className="text-xs uppercase tracking-[0.3em] text-[#7B8790]"
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                    >
                                        Projeto {(index + 1 < 9 ? '0' : '') + String(index + 1)}
                                    </div>
                                </div>

                                <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
                                    <ProjectCarousel images={project.images} title={project.title} />

                                    <div className="grid gap-6">
                                        <div className="rounded-[30px] bg-white p-7 shadow-[0_12px_36px_rgba(0,0,0,0.08)] sm:p-10">
                                            <div
                                                className="mb-4 text-xs uppercase tracking-[0.26em] text-[#7FA8BC]"
                                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                            >
                                                {project.client}
                                            </div>

                                            <h3
                                                className="text-[2.4rem] leading-[1.02] text-[#222] sm:text-[3.2rem]"
                                                style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                                            >
                                                {project.title}
                                            </h3>

                                            <div
                                                className="mt-7 grid gap-4 text-[0.98rem] leading-[1.75] text-[#555] sm:text-base"
                                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                                            >
                                                {project.description.map((paragraph) => (
                                                    <p key={paragraph}>{paragraph}</p>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                <a
                                                    href={project.artstation}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center rounded-full bg-[#7FA8BC]/90 px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-[#7FA8BC]"
                                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                                >
                                                    ArtStation <span className="ml-2">↗</span>
                                                </a>

                                                {project.videos.map((video, videoIndex) => (
                                                    <a
                                                        key={video}
                                                        href={video}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center rounded-full bg-[#F4F0E8] px-5 py-3 text-sm text-[#6D99AF] transition-all duration-300 hover:bg-[#E8E0D4]"
                                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                                    >
                                                        Vídeo {project.videos.length > 1 ? videoIndex + 1 : ''}{' '}
                                                        <span className="ml-2">↗</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="rounded-[30px] bg-[#7FA8BC] p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:p-9">
                                            <div
                                                className="mb-5 text-xs uppercase tracking-[0.25em] text-white/82"
                                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                            >
                                                Destaques
                                            </div>

                                            <div
                                                className="grid gap-4 text-base leading-[1.65] text-white"
                                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                                            >
                                                {project.highlights.map((highlight) => (
                                                    <div key={highlight} className="rounded-full bg-white/12 px-5 py-3">
                                                        {highlight}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* DIFERENCIAIS */}
            <section id="diferenciais" className="relative overflow-hidden bg-[#7FA8BC] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
                <div className="absolute bottom-0 left-0 h-[28%] w-[48%] rounded-tr-[54px] bg-[#D9CFC0]/28" />

                <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div className="relative min-h-[420px] overflow-hidden rounded-b-[34px] rounded-tl-[34px] shadow-[0_18px_50px_rgba(0,0,0,0.12)] lg:min-h-[700px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80"
                            alt="Planejamento"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <div
                            className="mb-6 text-xs uppercase tracking-[0.38em] text-white/85"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                        >
                            Por que utilizar 3D?
                        </div>

                        <h2
                            className="text-[3.6rem] leading-[0.96] text-white sm:text-[5rem]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Clareza visual
                            <br />
                            gera decisão.
                        </h2>

                        <p
                            className="mt-9 max-w-xl text-lg leading-[1.85] text-white/90"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            Experiências 3D tornam a apresentação mais clara, reduzem dúvidas e ajudam o cliente
                            a compreender proporções, materiais e possibilidades antes da execução.
                        </p>

                        <div className="mt-10 grid gap-4">
                            {[
                                'Visualização realista antes da execução',
                                'Redução de dúvidas e retrabalho',
                                'Apresentação mais profissional',
                                'Maior engajamento do cliente',
                                'Facilidade na tomada de decisão',
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-full bg-white/12 px-5 py-3 text-white backdrop-blur-sm"
                                >
                                    <div
                                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm text-white"
                                        style={{ fontFamily: 'Crimson Text, serif', fontWeight: 700 }}
                                    >
                                        {index + 1}
                                    </div>

                                    <p
                                        className="text-[0.95rem] leading-[1.45] text-white sm:text-base"
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                                    >
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTATO */}
            <section id="contato" className="relative overflow-hidden bg-[#F4F0E8] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
                <div className="absolute right-0 top-0 h-full w-[28%] bg-[#E8E0D4]" />
                <div className="absolute bottom-0 left-0 h-[22%] w-[34%] rounded-tr-[48px] bg-[#D8CDBE]/40" />

                <div className="relative z-10 mx-auto max-w-5xl rounded-[38px] bg-white px-7 py-12 text-center shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:px-16 sm:py-16">
                    <div
                        className="mb-5 text-xs uppercase tracking-[0.4em] text-[#7FA8BC]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                        Contato
                    </div>

                    <h2
                        className="text-[3rem] leading-none text-[#222] sm:text-[4.5rem]"
                        style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                    >
                        Vamos criar algo
                        <br />
                        memorável.
                    </h2>

                    <p
                        className="mx-auto mt-8 max-w-3xl text-lg leading-[1.8] text-[#555]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                        Transformamos seu projeto em uma experiência visual imersiva, pensada para comunicar
                        melhor, envolver mais e apresentar com mais valor.
                    </p>

                    <div className="mx-auto mt-12 h-px w-24 bg-[#7FA8BC]/45" />

                    {/* CARDS */}
                    <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">

                        {/* PIER */}
                        <a
                            href={pierInstagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[26px] bg-[#F8F5EF] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">

                                <div
                                    className="text-sm uppercase tracking-[0.28em] text-[#7B8790]"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                    Estúdio de criação
                                </div>

                                <img
                                    src="/logopier.png?v=5"
                                    alt="Pier"
                                    className="w-[145px] brightness-0"
                                />

                                <div
                                    className="text-xs uppercase tracking-[0.24em] text-[#7FA8BC]"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                    Instagram <span className="text-base leading-none">↗</span>
                                </div>
                            </div>
                        </a>

                        {/* CAIQUE */}
                        <a
                            href="https://www.artstation.com/caisantos/albums/14969340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[26px] bg-[#F8F5EF] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">

                                <div
                                    className="text-sm uppercase tracking-[0.28em] text-[#7B8790]"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                    Modelagem 3D
                                </div>

                                <div
                                    className="text-[3rem] leading-none text-[#222]"
                                    style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                                >
                                    Caique Santos
                                </div>

                                <div
                                    className="text-xs uppercase tracking-[0.24em] text-[#7FA8BC]"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                                >
                                    ArtStation <span className="text-base leading-none">↗</span>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div
                        className="mt-14 text-xs uppercase tracking-[0.35em] text-[#9A9A9A]"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                        © 2026 Pier × Caique Santos
                    </div>
                </div>
            </section>
        </div>
    );
}
