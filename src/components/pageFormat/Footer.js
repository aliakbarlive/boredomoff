export default function Footer() {
  return (
    <div className="footer">
      <p>
        Made with ❤️‍ by{" "}
        <a
          className="footer-link"
          href="https://github.com/AliAkbar215"
          rel="noopener noreferrer"
          target="_blank"
        >
         Ali Akbar 
        </a>
      </p>
      <p>
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
