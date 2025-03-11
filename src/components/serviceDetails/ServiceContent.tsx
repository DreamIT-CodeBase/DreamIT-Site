import { Col, Row } from "antd";
import React, { useEffect, useRef } from "react";
import { SectionContent } from "../content";

const ServiceContent = ({ servicedata }: any) => {
  debugger;
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const imageContainerEl = imageContainerRef.current;
    if (imageContainerEl) {
      imageContainerEl.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (imageContainerEl) {
        imageContainerEl.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  // Extract layout type from servicedata
  const layoutType =
    servicedata.sections[0]?.layoutType || "LEFT_IMAGE_RIGHT_CONTENT";

  return (
    <div>
      <section className="pt-60 pab-30 container">
        <Row align={"middle"} justify={"space-between"} gutter={[24, 24]}>
          {layoutType === "LEFT_IMAGE_RIGHT_CONTENT" ? (
            <>
              {/* Left Image */}
              <Col
                xl={11}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={imageContainerRef}
              >
                <div>
                  <img
                    src={servicedata.sections[0].imageUrls}
                    alt="Professional working with city view"
                    loading="lazy"
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
                className="space-y-3 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[100%] xs:max-h-[100%] overflow-auto service-content-container"
              >
                <h3 className="service-details-content-title">
                  {servicedata.sections[0].title}
                </h3>
                <SectionContent
                  editor={servicedata.editor}
                  sections={servicedata.sections}
                />
              </Col>
            </>
          ) : (
            <>
              {/* Right Image */}
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={contentRef}
                className="space-y-3 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[100%] xs:max-h-[100%] overflow-auto service-content-container"
              >
                <h3 className="service-details-content-title">
                  {servicedata.sections[0].title}
                </h3>
                <SectionContent
                  editor={servicedata.editor}
                  sections={servicedata.sections}
                />
              </Col>
              {/* Left Image */}
              <Col
                xl={11}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={imageContainerRef}
              >
                <div>
                  <img
                    src={servicedata.sections[0].imageUrls}
                    alt="Professional working with city view"
                    loading="lazy"
                  />
                </div>
              </Col>
            </>
          )}
        </Row>
      </section>
    </div>
  );
};

export default ServiceContent;
