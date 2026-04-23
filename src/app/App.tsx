import * as React from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const portfolioAlbumUrl = 'https://www.artstation.com/caisantos/albums/14969340';

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
        pageTone: 'warm',
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
        pageTone: 'light',
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
        pageTone: 'blue',
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
        pageTone: 'warm',
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
        pageTone: 'light',
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
        <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-[#111]/5 shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
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
                        className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white hover:scale-105"
                        aria-label="Imagem anterior"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white hover:scale-105"
                        aria-label="Próxima imagem"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.10)]">
                        {images.map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                onClick={() => setCurrent(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === current ? 'bg-[#7FA8BC] w-6' : 'bg-[#7FA8BC]/35'
                                    }`}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <div
                className="absolute right-5 top-5 rounded-full bg-white/88 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6D99AF] shadow-[0_8px_22px_rgba(0,0,0,0.10)]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
                {current + 1} / {images.length}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <div className="bg-[#ECE7DF] print:bg-white">
            {/* CAPA */}
            <section className="relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden break-after-page print:break-after-page bg-[#7FA8BC]">
                <div className="absolute top-0 right-0 h-full w-[32%] bg-[#EDE6DA]" />
                <div className="absolute bottom-0 left-0 h-[28%] w-[42%] bg-[#D9CFC0]/45 rounded-tr-[48px]" />

                <div
                    className="absolute top-8 left-10 text-[0.78rem] uppercase tracking-[0.45em] text-white/85"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                    Portfólio 3D
                </div>

                <div
                    className="absolute right-6 top-1/2 -translate-y-1/2 rotate-180 text-[0.72rem] uppercase tracking-[0.4em] text-[#7B8790]"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        writingMode: 'vertical-rl',
                        fontWeight: 500,
                    }}
                >
                    Pier Studio Criativo
                </div>

                <div className="relative z-10 flex min-h-[297mm] flex-col justify-between px-14 py-16">
                    <div className="max-w-[540px] pt-8">
                        <h1
                            className="text-[4.5rem] leading-[0.94] text-white"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Experiências
                            <br />
                            visuais
                            <br />
                            imersivas
                        </h1>

                        <div className="mt-10 h-px w-24 bg-white/45" />

                        <p
                            className="mt-10 max-w-[470px] text-[1.18rem] leading-[1.8] text-white/90"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            Apresentação de projetos, produtos e espaços com linguagem visual
                            sofisticada, imersiva e estratégica.
                        </p>
                    </div>

                    <div className="absolute right-[420px] top-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                        <a
                            href="https://www.instagram.com/pierstudiocriativo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <img
                                src="/logopier.png"
                                alt="Pier"
                                className="relative left-[5px] top-[50px] w-[180px]"
                            />
                        </a>

                        <div
                            className="mt-2 text-[1.25rem] leading-none text-white/85"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            ×
                        </div>

                        <div
                            className="mt-1 text-[2.1rem] leading-none text-white -ml-2"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Caique Santos
                        </div>

                        <div
                            className="mt-3 text-[0.75rem] uppercase tracking-[0.38em] text-white/80 ml-1"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                            Modelagem 3D
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div
                            className="text-[0.72rem] uppercase tracking-[0.38em] text-white/75"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                            Pier × Caique Santos
                        </div>

                        <div
                            className="rounded-full bg-white/14 px-5 py-2 text-[0.78rem] uppercase tracking-[0.24em] text-white backdrop-blur-sm"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                            Portfólio Selecionado
                        </div>
                    </div>
                </div>
            </section>

            {/* SOBRE + ATUAÇÃO (UNIFICADO) */}
            <section className="relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden break-after-page print:break-after-page bg-[#F4F0E8]">

                <div className="grid h-full grid-cols-[1.1fr_0.9fr] items-center gap-10 px-10 py-10">

                    {/* IMAGEM */}
                    <div className="relative h-full overflow-hidden rounded-[34px]">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
                            alt="Ambiente de criação"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* CONTEÚDO */}
                    <div className="rounded-[34px] bg-white px-10 py-12 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

                        <div
                            className="mb-5 text-sm uppercase tracking-[0.35em] text-[#7FA8BC]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            Sobre a colaboração
                        </div>

                        <h2
                            className="mb-6 text-[2.8rem] leading-[1.05] text-[#222]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Experiências visuais imersivas.
                        </h2>

                        <div
                            className="space-y-4 text-[1rem] leading-[1.75] text-[#555]"
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
                                Essa parceria permite transformar projetos em experiências digitais que facilitam a
                                compreensão, aumentam o engajamento e potencializam a tomada de decisão.
                            </p>
                        </div>

                        {/* PILLS */}
                        <div className="mt-8 flex flex-col gap-3">
                            {[
                                'Realidade virtual',
                                'Tours interativos',
                                'Apresentação de produtos',
                                'Arquitetura e espaços',
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className="w-full rounded-full bg-[#7FA8BC]/80 px-5 py-2.5 text-white text-center transition-all duration-300 hover:bg-[#7FA8BC]"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '0.82rem',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>

                        {/* LINK */}
                        <a
                            href={portfolioAlbumUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 text-[#6D99AF] transition-opacity hover:opacity-80"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            Ver coleção no ArtStation <span>↗</span>
                        </a>

                    </div>
                </div>
            </section>


            {/* MENU PORTFÓLIO */}
            <section className="relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden break-after-page print:break-after-page bg-white">
                <div className="absolute top-0 left-0 h-full w-[34%] bg-[#F4F0E8]" />
                <div className="absolute bottom-0 right-0 h-[34%] w-[38%] rounded-tl-[48px] bg-[#E8E0D4]" />

                <div className="relative z-10 flex min-h-[297mm] items-center px-14">
                    <div className="grid w-full grid-cols-[0.8fr_1.2fr] gap-14 items-center">
                        <div>
                            <div
                                className="mb-6 text-sm uppercase tracking-[0.38em] text-[#7FA8BC]"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                            >
                                Menu do portfólio
                            </div>

                            <h2
                                className="text-[4.5rem] leading-[0.92] text-[#222]"
                                style={{ fontFamily: 'Crimson Text, serif', fontWeight: 700 }}
                            >
                                Projetos
                                <br />
                                selecionados
                            </h2>

                            <div className="mt-10 h-[2px] w-20 bg-[#7FA8BC]/40" />

                            <p
                                className="mt-8 text-[1.05rem] leading-[1.75] text-[#5F5F5F]"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                            >
                                Clique em um projeto para acessar diretamente sua página, visualizar imagens
                                e abrir os links de apresentação.
                            </p>
                        </div>

                        <div className="rounded-b-[30px] bg-[#F4F0E8] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                            <div className="flex flex-col gap-4">
                                {projects.map((project, index) => (
                                    <a
                                        key={project.id}
                                        href={`#${project.id}`}
                                        className="group flex items-center justify-between rounded-full bg-[#7FA8BC]/80 px-7 py-4 text-white transition-all duration-300 hover:bg-[#7FA8BC] hover:translate-x-1"
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                                    >
                                        <span className="text-sm uppercase tracking-[0.15em]">
                                            {(index + 1 < 9 ? '0' : '') + String(index + 1)} — {project.shortTitle}
                                        </span>
                                        <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1">
                                            ↓
                                        </span>
                                    </a>
                                ))}
                            </div>

                            <a
                                href={portfolioAlbumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10 inline-flex items-center gap-2 text-[#6D99AF] transition-opacity hover:opacity-80"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                            >
                                Ver álbum completo no ArtStation <span className="text-base leading-none">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* PROJETOS */}
            {projects.map((project, index) => {
                const isBlue = project.pageTone === 'blue';
                const isWarm = project.pageTone === 'warm';

                const wrapperBg = isBlue ? 'bg-[#7FA8BC]' : isWarm ? 'bg-[#F4F0E8]' : 'bg-white';
                const textCardBg = isBlue ? 'bg-white/95' : 'bg-[#F8F5EF]';
                const highlightCardBg = isBlue ? 'bg-white/14' : 'bg-[#EAE3D7]';
                const highlightText = isBlue ? 'text-white' : 'text-[#4F4F4F]';
                const highlightSmall = isBlue ? 'text-white/80' : 'text-[#7FA8BC]';
                const pierMark = isBlue ? 'text-white/25' : 'text-[#7FA8BC]/25';
                const topRight = isBlue ? 'text-white/80' : 'text-[#7B8790]';

                return (
                    <section
                        id={project.id}
                        key={project.id}
                        className={`relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden break-after-page print:break-after-page scroll-mt-6 ${wrapperBg}`}
                    >
                        <div className="h-full w-full px-10 py-10">
                            <div className="grid h-full grid-rows-[auto_1fr] gap-8">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center rounded-full bg-[#7FA8BC] px-6 py-2.5">
                                        <span
                                            className="text-white text-sm tracking-[0.18em] uppercase"
                                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                                        >
                                            {project.type}
                                        </span>
                                    </div>

                                    <div
                                        className={`text-sm tracking-[0.3em] uppercase ${topRight}`}
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                                    >
                                        Projeto {(index + 1 < 9 ? '0' : '') + String(index + 1)}
                                    </div>
                                </div>

                                <div className="grid h-full grid-rows-[0.92fr_1.08fr] gap-8">
                                    <ProjectCarousel images={project.images} title={project.title} />

                                    <div className="grid grid-cols-[1.05fr_0.95fr] gap-8">
                                        <div
                                            className={`rounded-[30px] ${textCardBg} p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]`}
                                        >
                                            <div
                                                className="mb-4 text-xs uppercase tracking-[0.26em] text-[#7FA8BC]"
                                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                            >
                                                {project.client}
                                            </div>

                                            <h2
                                                className="mb-6 text-[2.15rem] leading-[1.1] text-[#222222]"
                                                style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                                            >
                                                {project.title}
                                            </h2>

                                            <div
                                                className="space-y-4 text-[0.93rem] leading-[1.68] text-[#555]"
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
                                                    className="inline-flex items-center rounded-full bg-[#7FA8BC]/85 px-5 py-2.5 text-white transition-all duration-300 hover:bg-[#7FA8BC]"
                                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem' }}
                                                >
                                                    ArtStation <span className="ml-2">↗</span>
                                                </a>

                                                {project.videos.map((video, videoIndex) => (
                                                    <a
                                                        key={video}
                                                        href={video}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[#6D99AF] transition-all duration-300 hover:bg-[#F4F0E8]"
                                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.82rem' }}
                                                    >
                                                        Vídeo {project.videos.length > 1 ? videoIndex + 1 : ''} <span className="ml-2">↗</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <div
                                            className={`rounded-[30px] ${highlightCardBg} p-10 shadow-[0_12px_40px_rgba(0,0,0,0.05)]`}
                                        >
                                            <div className="flex h-full flex-col justify-between">
                                                <div>
                                                    <div
                                                        className={`mb-4 text-sm uppercase tracking-[0.25em] ${highlightSmall}`}
                                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                                    >
                                                        Destaques
                                                    </div>

                                                    <div
                                                        className={`space-y-5 text-[1rem] leading-[1.7] ${highlightText}`}
                                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                                                    >
                                                        {project.highlights.map((highlight) => (
                                                            <p key={highlight}>{highlight}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div
                                                    className={`pt-8 text-[2.8rem] leading-none ${pierMark}`}
                                                    style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}
                                                >
                                                    pier
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* DIFERENCIAL */}
            <section className="relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden break-after-page print:break-after-page bg-[#7FA8BC]">
             
              

                {/* bloco suave inferior */}
                <div className="absolute bottom-0 left-0 h-[26%] w-[42%] rounded-tr-[48px] bg-[#D9CFC0]/35" />

                <div className="relative z-10 flex min-h-[297mm] items-center px-12 py-12">
                    <div className="grid w-full grid-cols-[0.95fr_1.05fr] gap-12 items-center">

                        {/* imagem */}
                        <div className="relative h-[700px] overflow-hidden rounded-b-[34px] rounded-tl-[34px] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80"
                                alt="Planejamento"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* conteúdo */}
                        <div className="relative">
                            <div
                                className="mb-6 text-sm uppercase tracking-[0.38em] text-white/85"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                            >
                                Por que utilizar 3D?
                            </div>

                            <h2
                                className="text-[4.1rem] leading-[0.96] text-white"
                                style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                            >
                                Clareza visual
                                <br />
                                gera decisão.
                            </h2>

                            <div className="mt-10 h-px w-24 bg-white/45" />

                            <p
                                className="mt-9 max-w-[430px] text-[1.1rem] leading-[1.85] text-white/90"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                            >
                                Experiências 3D tornam a apresentação mais clara, reduzem dúvidas e ajudam o cliente
                                a compreender proporções, materiais e possibilidades antes da execução.
                            </p>

                            <div className="mt-12 grid grid-cols-1 gap-4">
                                {[
                                    'Visualização realista antes da execução',
                                    'Redução de dúvidas e retrabalho',
                                    'Apresentação mais profissional',
                                    'Maior engajamento do cliente',
                                    'Facilidade na tomada de decisão',
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 rounded-full bg-white/14 px-5 py-3 text-white backdrop-blur-sm"
                                    >
                                        <div
                                            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm text-white"
                                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 700 }}
                                        >
                                            {index + 1}
                                        </div>

                                        <p
                                            className="text-[0.95rem] leading-[1.45] text-white"
                                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="absolute -right-8 bottom-[-80px] text-[5rem] leading-none text-white/12"
                                style={{
                                    fontFamily: 'Crimson Text, serif',
                                    fontStyle: 'italic',
                                }}
                            >
                                pier
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTATO */}
            <section className="relative min-h-[297mm] w-[210mm] mx-auto overflow-hidden bg-[#F4F0E8]">
                <div className="absolute top-0 right-0 h-full w-[24%] bg-[#E8E0D4]" />
                <div className="absolute bottom-0 left-0 h-[20%] w-[30%] bg-[#D8CDBE]/40 rounded-tr-[40px]" />

                <div className="relative z-10 flex h-full items-center justify-center px-14 py-12">
                    <div className="w-full max-w-5xl rounded-[38px] bg-white px-16 py-16 text-center shadow-[0_18px_45px_rgba(0,0,0,0.07)]">
                        <div
                            className="mb-5 text-sm uppercase tracking-[0.4em] text-[#7FA8BC]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                        >
                            Contato
                        </div>

                        <h2
                            className="text-[4rem] leading-none text-[#222]"
                            style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                        >
                            Vamos criar algo
                            <br />
                            memorável.
                        </h2>

                        <p
                            className="mx-auto mt-8 max-w-3xl text-[1.2rem] leading-[1.8] text-[#555]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                        >
                            Transformamos seu projeto em uma experiência visual imersiva, pensada para comunicar
                            melhor, envolver mais e apresentar com mais valor.
                        </p>

                        <div className="mx-auto mt-14 h-px w-24 bg-[#7FA8BC]/45" />

                        <div className="mt-14 grid grid-cols-2 gap-10 text-left">
                            <a
                                href="https://www.instagram.com/pierstudiocriativo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="rounded-[26px] bg-[#F8F5EF] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                                    <div
                                        className="mb-3 text-sm uppercase tracking-[0.28em] text-[#7B8790]"
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                    >
                                        Estúdio de criação
                                    </div>

                                    <img
                                        src="/logopier.png"
                                        alt="Pier"
                                        className="w-[145px]"
                                    />

                                    <div
                                        className="mt-6 text-xs uppercase tracking-[0.24em] text-[#7FA8BC]"
                                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                    >
                                        Instagram <span className="text-base leading-none">↗</span>
                                    </div>
                                </div>
                            </a>

                            <div className="rounded-[26px] bg-[#F8F5EF] p-8 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                                <div
                                    className="mb-2 text-sm uppercase tracking-[0.28em] text-[#7B8790]"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                >
                                    Modelagem 3D
                                </div>

                                <div
                                    className="text-[3rem] leading-none text-[#222]"
                                    style={{ fontFamily: 'Crimson Text, serif', fontWeight: 600 }}
                                >
                                    Caique Santos
                                </div>

                                <a
                                    href="https://www.artstation.com/caisantos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-[#6D99AF] transition-opacity hover:opacity-80"
                                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                                >
                                    artstation.com/caisantos <span className="text-base leading-none">↗</span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="mt-16 text-xs uppercase tracking-[0.35em] text-[#9A9A9A]"
                            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                            © 2026 Pier × Caique Santos
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
