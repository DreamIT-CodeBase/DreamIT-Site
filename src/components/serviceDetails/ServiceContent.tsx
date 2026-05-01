import { Col, Row } from "antd";
import React, { useEffect, useRef } from "react";
import { SectionContent } from "../content";

const ServiceContent = ({ servicedata, showTwoLayoutColumn = false }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageClassName = servicedata?.sections?.[0]?.imageClassName || "";
  const contentClassName = servicedata?.sections?.[0]?.contentClassName || "";

  const handleScroll = (e: WheelEvent) => {
    if (contentRef.current) {
      const contentEl = contentRef.current;
      const isScrollable = contentEl.scrollHeight > contentEl.clientHeight;
      const isAtTop = contentEl.scrollTop === 0;
      const isAtBottom =
        contentEl.scrollTop + contentEl.clientHeight >= contentEl.scrollHeight;

      if (isScrollable) {
        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          e.preventDefault();
          contentEl.scrollTop += e.deltaY;
        }
      }
    }
  };

  const updateContentHeight = () => {
    if (imageRef.current) {
      const imageHeight = imageRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--image-height",
        `${imageHeight}px`,
      );
    }
  };

  useEffect(() => {
    const imageContainerEl = imageContainerRef?.current;
    const imageEl = imageRef?.current;

    if (imageContainerEl) {
      imageContainerEl.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    if (imageEl) {
      imageEl.addEventListener("load", updateContentHeight);
      // Also update on window resize
      window.addEventListener("resize", updateContentHeight);
      // Initial height set
      updateContentHeight();
    }

    return () => {
      if (imageContainerEl) {
        imageContainerEl.removeEventListener("wheel", handleScroll);
      }
      if (imageEl) {
        imageEl.removeEventListener("load", updateContentHeight);
      }
      window.removeEventListener("resize", updateContentHeight);
    };
  }, [servicedata]);

  return (
    <div>
      <section className="pt-60 pab-30 container">
        <Row
          align={"top"}
          justify={"center"}
          gutter={[24, 24]}
          className="flex items-start"
        >
          {showTwoLayoutColumn ? (
            <>
              {/* Left Image */}
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={imageContainerRef}
                className="image-column"
              >
                <div>
                  <img
                    ref={imageRef}
                    src={servicedata?.sections[0].imageUrls}
                    alt="Professional working with city view"
                    loading="lazy"
                    className={`w-full h-auto ${imageClassName}`}
                  />
                </div>
              </Col>
              {/* Right Content */}
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={contentRef}
                className={`space-y-3 service-content-container content-column ${contentClassName}`}
              >
                <h3 className="service-details-content-title">
                  {servicedata?.sections[0]?.title}
                </h3>
                <SectionContent
                  editor={servicedata?.editor}
                  sections={servicedata?.sections}
                />
              </Col>
            </>
          ) : (
            <>
              <Col
                xl={24}
                lg={24}
                md={24}
                sm={24}
                xs={24}
                ref={contentRef}
                className={`space-y-3 service-content-container content-column ${contentClassName}`}
              >
                <SectionContent
                  editor={servicedata?.editor}
                  sections={servicedata?.sections}
                />
              </Col>
            </>
          )}
        </Row>
      </section>
    </div>
  );
};

export default ServiceContent;
