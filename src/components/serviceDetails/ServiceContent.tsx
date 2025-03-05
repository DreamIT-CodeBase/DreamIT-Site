import { Col, Row } from "antd";
import React, { useEffect, useRef } from "react";

const ServiceContent = ({ servicedata }: any) => {
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
  return (
    <div>
      {servicedata.contentImage && (
        <section className="pt-60 pab-30 container">
          <Row align={"middle"} justify={"space-between"} gutter={[24, 24]}>
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
                  src={servicedata.contentImage}
                  alt="Professional working with city view"
                  loading="lazy"
                />
              </div>
            </Col>

            {servicedata.slug !== "digital-transformation" &&
              servicedata.slug !== "business-applications" &&
              servicedata.slug !== "digital-marketing" && (
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  ref={contentRef}
                  className="space-y-3 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] xs:max-h-[400px] overflow-auto service-content-container"
                >
                  <h3 className="service-details-content-title">{servicedata.contentTitle}</h3>
                  <h6 className="">{servicedata.article1} </h6>
                  <h4 className="text-[#1c1c1c] ">
                    {servicedata.articleTitle1}{" "}
                  </h4>
                  <h6 className="">{servicedata.article2} </h6>
                  <h6 className="">{servicedata.article3} </h6>
                  <h4 className="text-[#1c1c1c] ">
                    {servicedata.articleTitle2}{" "}
                  </h4>
                  <h6 className="">{servicedata.article4} </h6>
                  <h6 className="">{servicedata.article5} </h6>
                  <h6 className="">{servicedata.article6} </h6>
                </Col>
              )}

            {servicedata.slug === "digital-transformation" && (
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={contentRef}
                className="space-y-6 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] xs:max-h-[400px] overflow-auto service-content-container"
              >
                <h3 className="">
                  Rewiring Businesses For Success: Through Digital
                  Transformation and Automation
                </h3>
                <h6 className="">
                  In an increasingly competitive landscape, staying ahead means
                  embracing change. We, empower businesses to evolve through{" "}
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Digital Transformation and Process Automation.
                  </span>{" "}
                  Two key drivers that accelerate growth, reduce cost and
                  enhance productivity
                </h6>
                <h6 className="">
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Digital Transformation{" "}
                  </span>
                  is about more than adopting new technologies. It&apos;s about
                  rethinking how your business operates. By integrating advanced
                  solutions, we help companies optimize their processes,
                  streamline workflows and improve decision-making. From
                  automating routine tasks to leveraging data for better
                  insights, digital transformation reshapes how businesses
                  engage with their customers and employees.
                </h6>
                <h6 className="">
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Process Automation{" "}
                  </span>
                  on the other hand, eliminates manual bottlenecks, reduces
                  errors and frees up valuable time for more strategic tasks.
                  Whether it&apos;s automating invoicing, payroll or customer
                  support. Automation ensures faster and more accurate
                  processes, boosting overall efficiency and empowering teams to
                  focus on what truly matters
                </h6>
                <h6>
                  We craft digital transformation and automation strategies
                  aligning with your specific business needs, ensuring a
                  seamless transition and long-term success.
                </h6>
              </Col>
            )}

            {servicedata.slug === "business-applications" && (
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={contentRef}
                className="space-y-6 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] xs:max-h-[400px] overflow-auto service-content-container"
              >
                <h3 className="">
                  Business Applications That Evolve: Adapting and Improving
                  Alongside You
                </h3>
                <h6>
                  We specialize in creating custom business applications that
                  cater to your unique needs. Our expert developers design and
                  deploy software solutions that enhance efficiency and
                  streamline processes ensuring your business stays competitive
                  and agile.{" "}
                </h6>
                <h6>
                  Unlike the off-shelf software, custom applications are built
                  to fit your specific requirements, offering flexibility,
                  scalability and seamless integration with existing systems.
                  They adapt as your business grows, ensuring long-term value.We
                  use the latest technologies to deliver high-performance,
                  secure applications that drive your business forward.{" "}
                </h6>
                <h4 className="text-[#1c1c1c]">
                  Benefits of Custom Business Applications{" "}
                </h4>
                <h6>
                  {" "}
                  <span className="text-[#1c1c1c] font-bold">
                    Boost efficiency:
                  </span>{" "}
                  Automate tasks and reduce errors
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Gain Real-time insights:
                  </span>{" "}
                  Make informed decisions faster.
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Enhanced Collaboration:{" "}
                  </span>
                  Streamline communication across teams.
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Scale with Ease:{" "}
                  </span>
                  Grow your business with adaptable solutions.
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Seamless Integration:
                  </span>{" "}
                  Fit your custom app with existing systems.
                </h6>
              </Col>
            )}

            {servicedata.slug === "digital-marketing" && (
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                ref={contentRef}
                className="space-y-6 xl:max-h-[500px] lg:max-h-[400px] md:max-h-[400px] sm:max-h-[400px] xs:max-h-[400px] overflow-auto service-content-container"
              >
                <h3>
                  Unlocking Digital Growth With Targeted Marketing:Creative
                  Strategies Fueling Tangible Growth
                </h3>
                <h6>
                  In a world where precision meets performance, businesses
                  thrive on systems that streamline complexity. We believe
                  Enterprise Resource Planning (ERP) is not just a software,
                  It&apos;s a mindset shift. It’s about aligning technology with
                  strategy, turning challenges into opportunities and driving
                  growth through seamless operations.
                </h6>
                <h4 className="text-[#1c1c1c]">What We Offer</h4>
                <h6>
                  Our approach to digital marketing focuses on helping you reach
                  the right audience at the right time. From crafting compelling
                  campaigns to optimizing your online channels, we ensure your
                  business achieves tangible results.
                </h6>
                <h4 className="text-[#1c1c1c]">
                  Why Choose Us for Digital Marketing Solutions
                </h4>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    Customized Strategies:{" "}
                  </span>{" "}
                  We craft each campaign according to your business goals and
                  audience.{" "}
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    Result-Driven Approach:{" "}
                  </span>{" "}
                  Our focus is on delivering measurable growth and ROI.
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    Expert Team:{" "}
                  </span>{" "}
                  Work with skilled professionals who understand the nuances of
                  digital marketing{" "}
                </h6>
                <h6>
                  <span className="text-[#1c1c1c] font-bold">
                    {" "}
                    Continuous Optimization:
                  </span>{" "}
                  We refine strategies to ensure consistent success in a
                  changing digital landscape.
                </h6>
                <h6>
                  At Dream IT, we don&apos;t just market your business, we help
                  it grow. Whether you’re looking to boost brand awareness,
                  increase conversions or enhance customer engagement our
                  digital marketing services are here to make it happen!
                </h6>
              </Col>
            )}
          </Row>
        </section>
      )}
    </div>
  );
};

export default ServiceContent;
