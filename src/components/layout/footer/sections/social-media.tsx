import Image from "next/image";

const socialMediaLinks = [
  {
    icon: "/icons/social/telegram.svg",
    link: "https://t.me/almokhlif3od",
    title: "telegram",
  },
  {
    icon: "/icons/social/youtube.svg",
    link: "https://www.youtube.com/channel/UCgbuikbqHfbPavTfju01LAA",
    title: "youtube",
  },
  {
    icon: "/icons/social/instagram.svg",
    link: "https://www.instagram.com/almokhlif3od/",
    title: "instagram",
  },
  {
    icon: "/icons/social/snapchat.svg",
    link: "https://www.snapchat.com/add/almokhlif3od/",
    title: "snapchat",
  },
  {
    icon: "/icons/social/tiktok.svg",
    link: "https://www.tiktok.com/@almokhlif3od",
    title: "tiktok",
  },
  {
    icon: "/icons/social/x.svg",
    link: "https://x.com/almokhlif3od",
    title: "X",
  },
];

function SocialMedia() {
  return (
    <ul className="social-media">
      {socialMediaLinks.map(({ icon, link, title }) => (
        <li key={title}>
          <a href={link || "#"} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon}
              width={24}
              height={24}
              alt={title}
              title={title}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
