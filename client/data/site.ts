/** Who built THRIVE. Used on the Contact page, in the footer and nav. */
export const BUILDER = {
  name: "Akshay Sriram",
  email: "akshaysrir09@gmail.com",
  role: "Creator of THRIVE",
};

export const contactHref = (subject = "Hello from THRIVE") =>
  `mailto:${BUILDER.email}?subject=${encodeURIComponent(subject)}`;
