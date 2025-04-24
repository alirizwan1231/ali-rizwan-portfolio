interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  alignment = 'center' 
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto text-center' : ''} mb-12`}>
      <p className="text-primary-600 font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
    </div>
  );
};

export default SectionHeading;