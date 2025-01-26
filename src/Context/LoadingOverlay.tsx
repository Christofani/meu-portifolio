import { useLanguage } from "./LanguageContext"; // Importando o contexto

const LoadingOverlay = () => {
  const { loading } = useLanguage();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
