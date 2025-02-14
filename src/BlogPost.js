import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, fetch post data based on slug
  const post = {
    title: "Blog",
    content: ``,
    image:
      "https://ageimagem.com.br/wp-content/uploads/2023/11/Foto-768x474.png",
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