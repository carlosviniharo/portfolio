import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import InfiniteMenu  from "../../components/infinitemenu";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Projects = () => {
  return (
    <HelmetProvider>
      <section id="projects" className="projects">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-flex flex-column justify-content-center align-items-center">
          <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <InfiniteMenu items={dataportfolio}/>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
