import Link from "next/link";

const links = [
  {
    title: "الأقسام",
    links: [
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
    ],
  },
  {
    title: "الأقسام",
    links: [
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
      {
        name: "خشب العود",
        id: "16",
        path: "",
      },
    ],
  },
  // {
  //   title: lang.text_title_about_footer,
  //   links: [
  //     { name: lang.text_about_footer, path: ROUTES.ABOUT_US.path },
  //     { name: lang.text_terms_footer, path: ROUTES.TERMS.path },
  //     {
  //       name: lang.text_privacy_policy_footer,
  //       path: ROUTES.PRIVACY_POLICY.path,
  //     },
  //     { name: lang.text_distribution_footer, path: ROUTES.BANK_TRANSFER.path },
  //     {
  //       name: ROUTES.RETURN_POLICY_TERMS.name,
  //       path: ROUTES.RETURN_POLICY_TERMS.path,
  //     },
  //   ],
  // },
];

const Links = () => {
  return (
    <div className="links">
      {links.map(({ title, links: subLinks }, index) => (
        <div key={index} className="links__section">
          <h3 className="links__title">{title}</h3>
          <ul>
            {subLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link href={path || "#"}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Links;
