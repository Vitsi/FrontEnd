import { UserIcon, ClipboardIcon, CalendarIcon, LockClosedIcon } from '@heroicons/react/24/outline';

interface Feature {
    name: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
}

const features: Feature[] = [
    {
      name: 'User Registration',
      description:
        'Healthcare providers can easily register on the platform to manage their appointments and patient records.',
      icon: UserIcon,
    },
    {
      name: 'Appointment Booking',
      description:
        'Patients can conveniently book appointments with their preferred healthcare providers through the website.',
      icon: CalendarIcon,
    },
    {
      name: 'Patient History',
      description:
        'Healthcare providers have access to detailed patient history and medical records to provide better care.',
      icon: ClipboardIcon,
    },
    {
      name: 'Data Security',
      description:
        'Ensures the security and privacy of patient data with robust encryption and authentication measures.',
      icon: LockClosedIcon,
    },
  ];
  const FeatureSection: React.FC = () => {
    return (
      <section className='features'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need for a better access to healthcare
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your one-stop solution for seamless healthcare provider registration, appointment booking, patient history management, and data security.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeatureSection;