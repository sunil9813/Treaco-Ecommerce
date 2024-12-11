import { footer } from "../../assets/data/data";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <ul>
            <h3>Social</h3>
            {footer.social.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3>Contact</h3>
            {footer.contact.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.value}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3>About</h3>
            {footer.about.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3>Customer Care</h3>
            {footer.copyright.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3>Our Information</h3>
            {footer.copyright.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h3>Top Categories</h3>
            {footer.topCategories.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};
