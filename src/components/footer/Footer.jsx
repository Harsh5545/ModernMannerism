// import styles from "./footer.module.css";

const Footer = () => {
  return (

    // <div className={styles.container}>
    //   <div className={styles.logo}>Code Connect</div>
    //   <div className={styles.text}>
    //     Code Connect  agency © All rights reserved.
    //   </div>
    // </div>

  <>
    <footer className="dark:bg-[#00001F] bg-white text-black dark:text-white py-10">
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>
              We provide top-notch image consulting, table etiquette, and personality development services to help you shine in your personal and professional life.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        &copy; 2024 ModernMannerism | Designed by HarshadKajale
      </div>
    </footer></>
  );
};





export default Footer;