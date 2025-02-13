import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, fetch post data based on slug
  const post = {
    title: "A Transformação Digital no Jornalismo",
    content: `O jornalismo passou por uma verdadeira revolução nos últimos anos. Se antes as notícias chegavam até nós pelo jornal impresso, rádio ou TV, hoje a informação circula de forma instantânea, moldada por algoritmos e pelo comportamento do público nas redes sociais. A transformação digital trouxe desafios, mas também inúmeras oportunidades para jornalistas e veículos de comunicação.

O impacto da tecnologia no jornalismo
A internet e as novas tecnologias mudaram a forma como o jornalismo é produzido, distribuído e consumido. A ascensão das redes sociais transformou qualquer pessoa com um smartphone em uma potencial fonte de notícias, enquanto a inteligência artificial já auxilia na criação de conteúdos automatizados e na análise de grandes volumes de dados.

Além disso, o modelo tradicional de financiamento do jornalismo, baseado em assinaturas e publicidade, precisou ser reinventado. Hoje, vemos o crescimento do paywall (acesso pago), do jornalismo independente financiado por apoiadores e do uso de ferramentas de monetização em plataformas digitais.

Os desafios da era digital
A velocidade com que as informações circulam trouxe um problema: a disseminação de fake news. O jornalismo, que sempre teve a missão de verificar os fatos, precisou se adaptar para combater a desinformação em tempo real. Isso fez com que a checagem de fatos se tornasse uma área essencial dentro dos veículos de comunicação.

Outro desafio é a adaptação dos profissionais. O jornalista de hoje não pode apenas escrever bem—ele precisa entender de SEO, engajamento digital, análise de dados e até mesmo inteligência artificial para se manter competitivo no mercado.

As oportunidades da nova era
Apesar dos desafios, a transformação digital trouxe novas formas de atuação para jornalistas. Podcasts, newsletters e canais no YouTube se tornaram alternativas viáveis para a produção de conteúdo independente. Além disso, a análise de dados e o jornalismo investigativo digital abriram caminho para reportagens mais aprofundadas e impactantes.

O jornalismo nunca foi tão acessível para quem quer criar e compartilhar informação. Mas isso vem acompanhado de uma grande responsabilidade: manter o compromisso com a verdade em meio a um oceano de dados e desinformação.

O futuro do jornalismo não é apenas digital, ele é interativo, personalizado e inovador. Quem souber usar a tecnologia a seu favor, sem perder a essência do jornalismo ético e investigativo, estará sempre um passo à frente.`,
    image:
      "https://latamjournalismreview.org/wp-content/uploads/2022/04/Feature-Fake-News-Bill-2.png",
    date: "2024-03-20",
    autor: "Inara Angra",
    slug: slug,
  };

  return (
    <Fragment>
      <Header />
      <article className="blog-post container section-spacing">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} />
          <span>Voltar para o Blog</span>
        </Link>

        <div className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <time className="blog-post-date">
            {new Date(post.date).toLocaleDateString("pt-BR")}
          </time>
          <p className="blog-summary">{post.autor}</p>
        </div>

        <div className="blog-post-image-wrapper">
          <img src={post.image} alt={post.title} className="blog-post-image" />
        </div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
    </Fragment>
  );
};

export default BlogPost; 