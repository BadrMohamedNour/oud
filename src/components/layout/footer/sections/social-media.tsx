import { memo } from "react";
import Image from "next/image";
import { StoreContact } from "@/types/store";

// Map of social media platforms to their icon paths
const SOCIAL_MEDIA_ICONS: Readonly<Record<StoreContact["key"], string>> = {
  youtube: "/icons/social/youtube.svg",
  instagram: "/icons/social/instagram.svg",
  linkedin: "/icons/social/linkedin.svg",
  facebook: "/icons/social/facebook.svg",
  twitter: "/icons/social/twitter.svg",
};

// Props interface for type checking
interface SocialMediaProps {
  storeContact: ReadonlyArray<StoreContact>;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ storeContact }) => {
  return (
    <ul className="social-media">
      {storeContact?.map(({ key, name, value }) => (
        <li key={key}>
          <a href={value} target="_blank" rel="noopener noreferrer">
            <Image
              src={SOCIAL_MEDIA_ICONS[key]}
              width={24}
              height={24}
              alt={`${name}-icon`}
              title={name}
              priority={false}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(SocialMedia);
