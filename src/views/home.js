import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TensaCo</title>
        <meta property="og:title" content="TensaCo" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">TENSCO</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span>About</span>
              <span className="home-nav2">Features</span>
              <span className="home-nav3">Pricing</span>
              <span className="home-nav4">Team</span>
              <span className="home-nav5">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">TENSCO</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">About</span>
                <span className="home-nav21">Features</span>
                <span className="home-nav31">Pricing</span>
                <span className="home-nav41">Team</span>
                <span className="home-nav51">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <img
              alt="image"
              src="/logo_color_w_trans-200h.png"
              className="home-image"
            />
            <span className="home-hero-sub-heading">
              We are building artificial superintelligence
            </span>
            <span className="home-hero-sub-heading1">
              We are driven by an insatiable curiosity, a hunger to unravel the
              mysteries that have eluded us for so long, and most significantly
              by anticipation of transcending the limitations of all prior known
              technology. The possibilities that ASI holds ignite a fire within
              us for we very soon the future will arrive where ASI empowers us,
              evokes awe-inspiring discoveries, and amplifies the beauty of our
              shared human experience.
            </span>
            <span className="home-hero-sub-heading2">
              We began with TensaCode, a neurosymbolic programming framework,
              early last year. With the primitives and abstractions it provides,
              we are now weaving intelligence into several omnipotent
              algorithms. Once this is complete, we will expand our
              neurosymbolic system to dynamically grow and evolve its own
              library of increasingly general algorithmic abstractions. By
              expressing algorithms in the language of computer programming, we
              hope to quickly bootstrap decades of human software engineering
              effort into our ASI at extremely low cost.
            </span>
            <span className="home-hero-sub-heading3">
              We will share updates as they arrive. In the meantime, join us on
              Twitter and Discord. And if you&apos;re interested in working with
              us, please reach out.
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Get Started</button>
              <button className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container02">
              <span className="home-text sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unleash the Potential of ASI
              </h2>
              <span className="home-features-sub-heading">
                Discover the transformative features that Artificial
                Superintelligence brings to various industries and join us in
                shaping a future of limitless possibilities.
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                Heading="Unleashing the Power of ASI"
                SubHeading="Experience the limitless potential of Artificial Superintelligence as we push the boundaries of human understanding and transform industries."
              ></FeatureCard>
              <FeatureCard
                Heading="Revolutionizing Healthcare"
                SubHeading="Discover how ASI is revolutionizing the healthcare industry, enabling advanced diagnostics, personalized treatments, and groundbreaking research."
              ></FeatureCard>
              <FeatureCard
                Heading="Empowering Finance and Economy"
                SubHeading="Explore how ASI is reshaping the financial landscape, optimizing investment strategies, and driving economic growth with unparalleled efficiency."
              ></FeatureCard>
              <FeatureCard
                Heading="Transforming Transportation and Logistics"
                SubHeading="Witness the future of transportation as ASI revolutionizes logistics, autonomous vehicles, and smart infrastructure, paving the way for a connected world."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container04">
            <span className="home-text03 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Choose the Perfect Plan for You
            </h2>
            <span className="home-pricing-sub-heading">
              Unlock the limitless possibilities of ASI
            </span>
          </div>
          <div className="home-container05">
            <div className="home-pricing-card">
              <div className="home-container06">
                <span className="home-text06 heading3">Free</span>
                <span className="home-free-plan-description">
                  Experience the power of ASI with our free plan
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text07">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text10">✔</span>
                  <span className="home-free-plan-features">
                    Access to basic ASI capabilities
                  </span>
                </div>
                <div className="home-container10">
                  <span className="home-text11">✔</span>
                  <span className="home-free-plan-features1">
                    Limited usage
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text12">✔</span>
                  <span className="home-free-plan-features2">
                    Email support
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features3">
                    Monthly updates
                  </span>
                </div>
              </div>
              <button className="home-button button">Continue with Free</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container13">
                <span className="home-text14 heading3">BASIC</span>
                <span className="home-basic-plan-description">
                  Unlock enhanced ASI features with our basic plan
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text15">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">7</span>
                <span className="home-text18">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text19">✔</span>
                  <span className="home-text20">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text21">✔</span>
                  <span className="home-basic-plan-features">
                    Advanced ASI capabilities
                  </span>
                </div>
                <div className="home-container18">
                  <span className="home-text22">✔</span>
                  <span className="home-basic-plan-features1">
                    Increased usage limits
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text23">✔</span>
                  <span className="home-basic-plan-features2">
                    24/7 email and chat support
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text24">✔</span>
                  <span className="home-basic-plan-features3">
                    Weekly updates
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container21">
                <span className="home-text25 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  Unleash the full potential of ASI with our pro plan
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text28">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">20</span>
                <span className="home-text31">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text32">✔</span>
                  <span className="home-text33">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text34">✔</span>
                  <span className="home-pro-plan-features">
                    Premium ASI capabilities
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text35">✔</span>
                  <span className="home-pro-plan-features1">
                    Unlimited usage
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text36">✔</span>
                  <span className="home-pro-plan-features2">
                    Priority email, chat, and phone support
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Revolutionizing Healthcare
          </h1>
          <span className="home-gallery-sub-heading">
            Discover how ASI is transforming the healthcare industry
          </span>
          <div className="home-container28">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1580894732930-0babd100d356?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1547082688-9077fe60b8f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTA3MTg3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Unlocking the True Potential of ASI
          </h1>
          <span className="home-banner-sub-heading">
            Experience the Boundless Innovation of TensaCo Inc
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="home-text37 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text40 heading2">Common questions</h2>
              <span className="home-text41">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container30">
              <Question
                Answer="TensaCo Inc is a manifestation of profound intelligence and boundless innovation, dedicated to the development of Artificial Superintelligence (ASI)."
                Question="What is TensaCo Inc?"
              ></Question>
              <Question
                Answer="The mission of TensaCo Inc is to unlock the true potential of ASI and transcend the limitations of conventional AI, pushing the boundaries of human understanding."
                Question="What is the mission of TensaCo Inc?"
              ></Question>
              <Question
                Answer="TensaCo Inc operates in the realms of healthcare, finance, transportation, and manufacturing, seeking to transform these industries through the power of ASI."
                Question="In which industries does TensaCo Inc operate?"
              ></Question>
              <Question
                Answer="TensaCo Inc holds itself accountable to the highest ethical standards, ensuring transparency, fairness, and accountability in the development and use of ASI."
                Question="What ethical standards does TensaCo Inc uphold?"
              ></Question>
              <Question
                Answer="You can stay connected with TensaCo Inc by following us across our digital domains, where we share the tapestry of innovation and invite collaboration."
                Question="How can I stay connected with TensaCo Inc?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container31">
            <span className="home-logo2">TENSCO</span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">About</span>
              <span className="home-nav22">Features</span>
              <span className="home-nav32">Pricing</span>
              <span className="home-nav42">Team</span>
              <span className="home-nav52">Blog</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container32">
            <span className="home-text58">
              © 2023 TensaCo Inc, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <a
                href="https://twitter.com/TensacoInc"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://www.reddit.com/user/TensaCo"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M1024 483.429c0 44.571-25.143 82.857-62.286 101.714 4.571 17.714 6.857 36 6.857 54.857 0 180.571-204 326.857-455.429 326.857-250.857 0-454.857-146.286-454.857-326.857 0-18.286 2.286-36.571 6.286-53.714-38.286-18.857-64.571-57.714-64.571-102.857 0-62.857 50.857-113.714 113.714-113.714 32.571 0 61.714 13.714 82.857 36 77.143-53.714 180-88.571 294.286-92.571l66.286-297.714c2.286-10.286 13.143-17.143 23.429-14.857l210.857 46.286c13.714-27.429 42.857-46.857 76-46.857 47.429 0 85.714 38.286 85.714 85.143 0 47.429-38.286 85.714-85.714 85.714-46.857 0-85.143-38.286-85.143-85.143l-190.857-42.286-59.429 269.714c114.857 3.429 218.857 37.714 296.571 91.429 20.571-21.714 49.714-34.857 81.714-34.857 62.857 0 113.714 50.857 113.714 113.714zM238.857 597.143c0 47.429 38.286 85.714 85.143 85.714 47.429 0 85.714-38.286 85.714-85.714 0-46.857-38.286-85.143-85.714-85.143-46.857 0-85.143 38.286-85.143 85.143zM701.714 800c8.571-8.571 8.571-21.143 0-29.714-8-8-21.143-8-29.143 0-34.286 34.857-108 46.857-160.571 46.857s-126.286-12-160.571-46.857c-8-8-21.143-8-29.143 0-8.571 8-8.571 21.143 0 29.714 54.286 54.286 158.857 58.286 189.714 58.286s135.429-4 189.714-58.286zM700 682.857c46.857 0 85.143-38.286 85.143-85.714 0-46.857-38.286-85.143-85.143-85.143-47.429 0-85.714 38.286-85.714 85.143 0 47.429 38.286 85.714 85.714 85.714z"></path>
                </svg>
              </a>
              <a
                href="https://discord.gg/AZaBpQTv"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <img
                  alt="image"
                  src="/icon_clyde_white_rgb.svg"
                  className="home-image1"
                />
              </a>
              <a
                href="https://github.com/TensaCo"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14"
                >
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </a>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
