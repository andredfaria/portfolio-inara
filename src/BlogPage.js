import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./_blog.scss";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      slug: "blog-inara",
      title: "Blog Inara",
      autor: "Inara Angra",
      summary: `...`,
      image:
        "https://ageimagem.com.br/wp-content/uploads/2023/11/Foto-768x474.png",
      date: "2025-02-11",
    },
    // Add more posts here
  ];

  return (
    <Fragment>
      <Header />
      <section className="blog-section container section-spacing">
        <div className="section-heading">
          <h4 className="about-me-heading">Blog</h4>
        </div>

        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card shadow-lg">
                  <div className="blog-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-content">
                    <h5 className="blog-title">{post.title}</h5>
                    <p className="blog-summary">{post.autor}</p>
                    <p className="blog-summary">{post.summary}</p>
                    <div className="blog-date">
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default BlogPage;
