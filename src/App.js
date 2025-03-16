import certificates from "./data/certificates";
import CertificateCard from "./components/CertificateCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Mis Certificados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.slug} {...cert} />
        ))}
      </div>
    </div>
  );
}

export default App;