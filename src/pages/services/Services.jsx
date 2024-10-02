import bg from '../../assets/services/bg.jpg';
import {
  FaPhoneAlt,
  FaCommentDots,
  FaEnvelope,
  FaLaptop,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Services/CustomComponents/CustomButton'; // Adjust the path as necessary

// Sample service data
const services = [
  {
    id: 1,
    name: 'Lead Connector App',
    description:
      'Connect with potential clients instantly with our branded Lead Connector App, available on Android and iOS.',
    icon: <FaPhoneAlt className='text-6xl mb-4' />,
    cta: 'Learn More',
    category: 'Mobile Apps',
  },
  {
    id: 2,
    name: 'Text Messaging',
    description:
      'Communicate directly with your customers through our easy-to-use text messaging service.',
    icon: <FaCommentDots className='text-6xl mb-4' />,
    cta: 'Get Started',
    category: 'Communication',
  },
  {
    id: 3,
    name: 'Chat Widget',
    description:
      'Engage your website visitors in real-time with our customizable chat widget applications.',
    icon: <FaLaptop className='text-6xl mb-4' />,
    cta: 'Learn More',
    category: 'Web Tools',
  },
  {
    id: 4,
    name: 'Email Builder',
    description:
      'Create stunning email campaigns with our drag-and-drop email builder.',
    icon: <FaEnvelope className='text-6xl mb-4' />,
    cta: 'Get Started',
    category: 'Marketing',
  },
  {
    id: 5,
    name: 'Analytics Dashboard',
    description:
      'Track your performance metrics with our comprehensive analytics dashboard.',
    icon: <FaLaptop className='text-6xl mb-4' />,
    cta: 'View Dashboard',
    category: 'Analytics',
  },
  {
    id: 6,
    name: 'Social Media Manager',
    description:
      'Manage all your social media accounts in one place with our intuitive platform.',
    icon: <FaCommentDots className='text-6xl mb-4' />,
    cta: 'Get Started',
    category: 'Social Media',
  },
];

const Services = () => {
  return (
    <section
      className='mt-12 bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bg})`, padding: '0' }}
    >
      {/* Blue Overlay */}
      <div className='absolute inset-0 bg-[#002366] opacity-70'></div>
      <main className='max-w-[90vw] mx-auto '>
        {/* Content */}
        <div className='relative z-10 p-8'>
          <h1 className='heading text-center underline mb-10 text-white'>
            Our Services
          </h1>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.id}
                className='flex flex-col shadow-md scale-100 hover:scale-95 hover:shadow-2xl transition duration-300 rounded-lg p-6 border border-[#002366] bg-white bg-opacity-70 text-[#002366]'
              >
                <div className='flex items-center justify-center mb-4'>
                  <span className='text-6xl mb-4'>{service.icon}</span>
                </div>
                <h2 className='text-xl font-semibold text-center'>
                  {service.name}
                </h2>
                <p className='text-center mb-4'>{service.description}</p>
                <div className='w-full flex items-center justify-center'>
                  <Link to={`/services/${service.id}`} className='mt-auto'>
                    <CustomButton text={service.cta} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
