const CertificateCard = ({ name, image, verifyAt }) => {
    return (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <a href={verifyAt} target="_blank" rel={name}>
        <img src={image} alt={name} className="w-full h-45 object-contain rounded" />
        </a>
        <h3 className="text-center text-xl font-bold mt-2">{name}</h3>
      </div>
    );
  };
  
  export default CertificateCard;
  