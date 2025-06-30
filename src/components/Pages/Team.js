import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, Heart, Target } from 'lucide-react';
import Footer from '../Footer';
import './Team.css';

const Team = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      bio: 'With over 15 years in the design industry, Sarah founded Brandblast with a vision to help businesses create memorable brand experiences.',
      specialties: ['Brand Strategy', 'Creative Direction', 'Team Leadership']
    },
    {
      name: 'Michael Chen',
      role: 'Head of Production',
      image: 'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
      bio: 'Michael ensures every project meets our high-quality standards. His expertise in printing technology keeps us at the forefront of innovation.',
      specialties: ['Quality Control', 'Production Management', 'Technical Innovation']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Designer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      bio: 'Emily brings creative concepts to life with her exceptional design skills and attention to detail.',
      specialties: ['Graphic Design', 'Brand Identity', 'Print Design']
    },
    {
      name: 'David Thompson',
      role: 'Client Relations Manager',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      bio: 'David ensures every client receives exceptional service and support throughout their project journey.',
      specialties: ['Client Communication', 'Project Management', 'Customer Success']
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality results.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our dedication to every client.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of trends and technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to bring their vision to life.'
    }
  ];

  const handleContactUs = () => {
    // Navigate back to home and scroll to contact
    onBack();
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Pre-fill contact form
        setTimeout(() => {
          if (window.preFillContactForm) {
            window.preFillContactForm(
              "Hi! I'd like to learn more about working with your team. Please contact me with information about your services."
            );
          }
        }, 800);
      }
    }, 100);
  };

  return (
    <div className="team-page">
      <div className="team-page__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="team-page__header"
        >
          <button
            onClick={onBack}
            className="team-page__back-btn"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="team-page__title">
            Meet Our <span className="team-page__title-highlight">Team</span>
          </h1>
          <p className="team-page__description">
            The creative minds behind Brandblast. Our diverse team brings together years of experience 
            in design, production, and client service to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="team-page__grid"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="team-page__member"
            >
              <div className="team-page__member-content">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-page__member-image"
                />
                <div className="team-page__member-info">
                  <h3 className="team-page__member-name">{member.name}</h3>
                  <p className="team-page__member-role">{member.role}</p>
                  <p className="team-page__member-bio">{member.bio}</p>
                  <div className="team-page__member-specialties">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="team-page__specialty"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="team-page__values"
        >
          <h2 className="team-page__values-title">Our Values</h2>
          <div className="team-page__values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="team-page__value"
              >
                <div className="team-page__value-icon">
                  <value.icon size={24} />
                </div>
                <h3 className="team-page__value-title">{value.title}</h3>
                <p className="team-page__value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="team-page__cta"
        >
          <h2 className="team-page__cta-title">Ready to Work With Us?</h2>
          <p className="team-page__cta-description">
            Let's discuss your project and see how our team can help bring your vision to life.
          </p>
          <button 
            onClick={handleContactUs}
            className="team-page__cta-button"
          >
            Contact Our Team
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;