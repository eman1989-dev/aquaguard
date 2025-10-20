function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Aquaguard. Todos los derechos reservados.
        </p>
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-gray-200" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;