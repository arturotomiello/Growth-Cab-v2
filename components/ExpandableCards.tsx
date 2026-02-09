import React from 'react';
import './ExpandableCards.css';

const ExpandableCards: React.FC = () => {
    return (
        <div className="growth-cards-wrapper">
            {/* CARDS COMPONENT         
         Semantic HTML structure with accessibility features:
         - External links open in new tab (target="_blank")
         - Security: rel="noopener noreferrer" prevents vulnerabilities
         - Performance: loading="lazy" defers off-screen images
         - SEO: Descriptive alt text for all images
      */}
            <div className="cards">
                {/* Card 1: Outbound */}
                <div className="card">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://picsum.photos/id/1/800/600" alt="Outbound Strategies" loading="lazy" />
                        <div className="card-title">Outbound</div>
                        <p className="card-desc">
                            We run personalized prospecting campaigns that flood your calendar with qualified leads using hyper-targeted data sources.
                        </p>
                    </a>
                </div>

                {/* Card 2: LinkedIn Ads */}
                <div className="card">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://picsum.photos/id/3/800/600" alt="LinkedIn Ads" loading="lazy" />
                        <div className="card-title">LinkedIn Ads</div>
                        <p className="card-desc">
                            We run Account Based Marketing (ABM) campaigns that turn cold accounts into sales-ready opportunities through retargeting.
                        </p>
                    </a>
                </div>

                {/* Card 3: LinkedIn Content */}
                <div className="card">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="https://picsum.photos/id/160/800/600" alt="LinkedIn Content" loading="lazy" />
                        <div className="card-title">LinkedIn Content</div>
                        <p className="card-desc">
                            We publish high-performing content pieces that educate your target on your offering, establishing thought leadership.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExpandableCards;
