import minhafoto from "../images/Imagem do WhatsApp de 2024-10-27 à(s) 18.56.16_9fe3c1ad.jpg"

function Main() {
  return (
    <main className="flex items-center justify-center min-h-screen px-10">
      <div className="flex items-center justify-between w-full max-w-4xl">
        {/* Seção com o texto à esquerda */}
        <div className="w-full md:w-1/2 pr-10">
          <p className="text-xl font-rajdhani">Olá !</p>
          <p className="text-5xl font-rajdhani">Eu sou o Rodrigo </p>
          <p className="italic text-gray-700">"Transformar a si mesmo é o começo de uma grande transformação no mundo." – Mahatma Gandhi</p>
        </div>

        {/* Seção com a imagem à direita */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src={minhafoto}
            alt="minha-foto"
            className="rounded-full w-80 h-80 "
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
